
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registro-cita',
  imports: [ReactiveFormsModule],
  templateUrl: './registro-cita.html',
  styleUrl: './registro-cita.scss',
})
export class RegistroCita {
  private readonly fb = inject(FormBuilder);

  formularioCita = this.fb.group({
    nombre: [
      '',
      [Validators.required, Validators.minLength(3)],
    ],
    correo: [
      '',
      [Validators.required, Validators.email],
    ],
    fecha: [
      '',
      [Validators.required, fechaFuturaValidator],
    ],
    servicio: [
      '',
      [Validators.required],
    ],
  });

  enviado = false;

  registrarCita(): void {
    this.enviado = false;

    if (this.formularioCita.invalid) {
      this.formularioCita.markAllAsTouched();
      return;
    }

    this.enviado = true;
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
