import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { AgendaApi } from './agenda-api';

describe('AgendaApi', () => {
  let service: AgendaApi;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(AgendaApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debe crear el servicio', () => {
    expect(service).toBeTruthy();
  });

  it('debe consultar los servicios médicos', () => {
    const servicios = [
      {
        id: 1,
        nombre: 'Medicina general',
        descripcion: '',
        precio: 50,
        duracion_minutos: 30,
        activo: 1,
      },
    ];

    service.obtenerServicios().subscribe((resultado) => {
      expect(resultado).toEqual(servicios);
    });

    const request = httpMock.expectOne('/api/servicios');

    expect(request.request.method).toBe('GET');
    request.flush(servicios);
  });

  it('debe registrar un paciente', () => {
    const paciente = {
      nombre: 'Juan Pérez',
      documento: '72584993',
      correo: 'juan@example.com',
    };

    service.registrarCliente(paciente).subscribe((resultado) => {
      expect(resultado.id).toBe(1);
      expect(resultado.nombre).toBe('Juan Pérez');
    });

    const request = httpMock.expectOne('/api/clientes');

    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(paciente);

    request.flush({
      id: 1,
      ...paciente,
    });
  });

  it('debe registrar una reserva', () => {
    const reserva = {
      cliente_id: 1,
      servicio_id: 1,
      fecha_hora: '2026-12-28T15:30',
    };

    service.registrarReserva(reserva).subscribe((resultado) => {
      expect(resultado.codigo).toBe('RES-TEST-001');
      expect(resultado.estado).toBe('RESERVADA');
    });

    const request = httpMock.expectOne('/api/reservas');

    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(reserva);

    request.flush({
      id: 1,
      codigo: 'RES-TEST-001',
      ...reserva,
      estado: 'RESERVADA',
    });
  });
});
