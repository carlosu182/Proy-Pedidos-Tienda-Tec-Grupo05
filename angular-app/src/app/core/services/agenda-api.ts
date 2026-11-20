
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  duracion_minutos: number;
  activo: number;
}

export interface NuevoCliente {
  nombre: string;
  documento: string;
  correo: string;
}

export interface ClienteCreado {
  id: number;
  nombre: string;
  documento: string;
  correo: string;
}

export interface NuevaReserva {
  cliente_id: number;
  servicio_id: number;
  fecha_hora: string;
  observaciones?: string;
}

export interface ReservaCreada {
  id: number;
  codigo: string;
  cliente_id: number;
  servicio_id: number;
  fecha_hora: string;
  estado: string;
}

@Injectable({
  providedIn: 'root',
})
export class AgendaApi {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api';

  obtenerServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(
      `${this.apiUrl}/servicios`,
    );
  }

  registrarCliente(
    cliente: NuevoCliente,
  ): Observable<ClienteCreado> {
    return this.http.post<ClienteCreado>(
      `${this.apiUrl}/clientes`,
      cliente,
    );
  }

  registrarReserva(
    reserva: NuevaReserva,
  ): Observable<ReservaCreada> {
    return this.http.post<ReservaCreada>(
      `${this.apiUrl}/reservas`,
      reserva,
    );
  }
}
