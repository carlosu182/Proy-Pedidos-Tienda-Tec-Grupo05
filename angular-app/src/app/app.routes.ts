
import { Routes } from '@angular/router';
import { RegistroCita } from './features/citas/pages/registro-cita/registro-cita';

export const routes: Routes = [
  {
    path: 'citas',
    component: RegistroCita,
  },
  {
    path: '',
    redirectTo: 'citas',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'citas',
  },
];
