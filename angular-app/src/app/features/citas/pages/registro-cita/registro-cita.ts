
import { Component, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import {
  AgendaApi,
  Servicio,
  NuevoCliente,
  NuevaReserva,
} from '../../../../core/services/agenda-api';

@Component({
  selector: 'app-registro-cita',
  imports: [ReactiveFormsModule],
  templateUrl: './registro-cita.html',
  styleUrl: './registro-cita.scss',
})
export class RegistroCita implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly agendaApi = inject(AgendaApi);

  servicios: Servicio[] = [];
  cargandoServicios = false;
  enviando = false;

  enviado = false;
  intentoEnvio = false;

  codigoReserva = '';
  errorRegistro = '';
  errorServicios = '';

  formularioCita = this.fb.group({
    nombre: [
      '',
      [Validators.required, Validators.minLength(3)],
    ],
    documento: [
      '',
      [Validators.required, Validators.pattern(/^\d{8}$/)],
    ],
    correo: [
      '',
      [Validators.required, Validators.email],
    ],
    fecha: [
      '',
      [Validators.required, fechaFuturaValidator],
    ],
    hora: [
      '',
      [Validators.required],
    ],
    servicio: [
      '',
      [Validators.required],
    ],
  });

  ngOnInit(): void {
    this.cargarServicios();
  }

  cargarServicios(): void {
    this.cargandoServicios = true;
    this.errorServicios = '';

    this.agendaApi.obtenerServicios().subscribe({
      next: (servicios) => {
        this.servicios = servicios.filter(
          (servicio) => servicio.activo === 1,
        );
      },
      error: () => {
        this.errorServicios =
          'No se pudieron cargar los servicios médicos.';
      },
      complete: () => {
        this.cargandoServicios = false;
      },
    });
  }

  registrarCita(): void {
    this.intentoEnvio = true;
    this.enviado = false;
    this.errorRegistro = '';
    this.codigoReserva = '';

    if (this.formularioCita.invalid) {
      this.formularioCita.markAllAsTouched();
      return;
    }

    const datos = this.formularioCita.getRawValue();
    const fechaHora = `${datos.fecha}T${datos.hora}`;

    if (new Date(fechaHora) <= new Date()) {
      this.errorRegistro =
        'La fecha y hora de la cita deben ser futuras.';
      return;
    }

    const nuevoCliente: NuevoCliente = {
      nombre: datos.nombre!,
      documento: datos.documento!,
      correo: datos.correo!,
    };

    this.enviando = true;

    this.agendaApi.registrarCliente(nuevoCliente).subscribe({
      next: (cliente) => {
        const nuevaReserva: NuevaReserva = {
          cliente_id: cliente.id,
          servicio_id: Number(datos.servicio),
          fecha_hora: fechaHora,
        };

        this.agendaApi.registrarReserva(nuevaReserva).subscribe({
          next: (reserva) => {
            this.codigoReserva = reserva.codigo;
            this.enviado = true;
            this.enviando = false;
            this.formularioCita.reset();
            this.intentoEnvio = false;
          },
          error: (error) => {
            this.errorRegistro =
              error.error?.error ||
              'No se pudo registrar la reserva.';

            this.enviando = false;
          },
        });
      },
      error: (error) => {
        this.errorRegistro =
          error.error?.error ||
          'No se pudo registrar el paciente.';

        this.enviando = false;
      },
    });
  }
}

export function fechaFuturaValidator(
  control: AbstractControl,
): ValidationErrors | null {
  if (!control.value) {
    return null;
  }

  const hoy = new Date();

  const fechaActual = [
    hoy.getFullYear(),
    String(hoy.getMonth() + 1).padStart(2, '0'),
    String(hoy.getDate()).padStart(2, '0'),
  ].join('-');

  return control.value > fechaActual
    ? null
    : { fechaNoFutura: true };
}
