
import { TestBed } from '@angular/core/testing';
import { RegistroCita } from './registro-cita';

describe('RegistroCita', () => {
  let component: RegistroCita;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroCita],
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
      correo: 'correo-invalido',
      fecha: '2099-12-31',
      servicio: 'Medicina general',
    });

    expect(component.formularioCita.get('correo')?.valid).toBe(false);
  });

  it('debe rechazar una fecha anterior al día actual', () => {
    component.formularioCita.patchValue({
      fecha: '2020-01-01',
    });

    expect(
      component.formularioCita.get('fecha')?.hasError('fechaNoFutura')
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
      correo: 'juan@gmail.com',
      fecha,
      servicio: 'Medicina general',
    });

    expect(component.formularioCita.valid).toBe(true);
  });
});
