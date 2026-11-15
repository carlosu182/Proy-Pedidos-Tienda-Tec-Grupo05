
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { RegistroCita } from './registro-cita';
import { AgendaApi } from '../../../../core/services/agenda-api';

describe('RegistroCita', () => {
  let component: RegistroCita;

  const agendaApiMock = {
    obtenerServicios: () =>
      of([
        {
          id: 1,
          nombre: 'Medicina general',
          descripcion: 'Consulta médica general',
          precio: 50,
          duracion_minutos: 30,
          activo: 1,
        },
      ]),
    registrarCliente: () =>
      of({
        id: 1,
        nombre: 'Juan Pérez',
        documento: '12345678',
        correo: 'juan@gmail.com',
      }),
    registrarReserva: () =>
      of({
        id: 1,
        codigo: 'RES-TEST-001',
        cliente_id: 1,
        servicio_id: 1,
        fecha_hora: '2099-12-31T10:00',
        estado: 'RESERVADA',
      }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroCita],
      providers: [
        {
          provide: AgendaApi,
          useValue: agendaApiMock,
        },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(RegistroCita);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear el componente correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe rechazar el formulario cuando los campos están vacíos', () => {
    expect(component.formularioCita.valid).toBe(false);
  });

  it('debe rechazar un correo electrónico con formato incorrecto', () => {
    component.formularioCita.patchValue({
      nombre: 'Juan Pérez',
      documento: '12345678',
      correo: 'correo-invalido',
      fecha: '2099-12-31',
      hora: '10:00',
      servicio: '1',
    });

    expect(
      component.formularioCita.get('correo')?.valid,
    ).toBe(false);
  });

  it('debe rechazar una fecha anterior al día actual', () => {
    component.formularioCita.patchValue({
      fecha: '2020-01-01',
    });

    expect(
      component.formularioCita.get('fecha')?.hasError('fechaNoFutura'),
    ).toBe(true);
  });

  it('debe aceptar un formulario con todos los datos válidos', () => {
    const fechaFutura = new Date();
    fechaFutura.setDate(fechaFutura.getDate() + 7);

    const fecha = [
      fechaFutura.getFullYear(),
      String(fechaFutura.getMonth() + 1).padStart(2, '0'),
      String(fechaFutura.getDate()).padStart(2, '0'),
    ].join('-');

    component.formularioCita.setValue({
      nombre: 'Juan Pérez',
      documento: '12345678',
      correo: 'juan@gmail.com',
      fecha,
      hora: '10:00',
      servicio: '1',
    });

    expect(component.formularioCita.valid).toBe(true);
  });
});
