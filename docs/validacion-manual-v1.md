# Validación manual y cierre técnico — Agenda Clara V1

## 1. Propósito

Registrar el estado conocido de las pruebas automatizadas, los flujos manuales documentados y las verificaciones necesarias antes de presentar la entrega académica de Agenda Clara V1. Este documento distingue resultados compartidos de comprobaciones que todavía requieren evidencia adicional.

## 2. Estado técnico documentado

### Completado y documentado

- La PR #15 se integró en `develop` mediante el commit `799c2ea`.
- El cambio para manejar solicitudes con JSON malformado quedó integrado; la respuesta esperada ante un cuerpo JSON inválido es HTTP 400 con contenido JSON.
- La ejecución local compartida de `npm test` reportó 21 tests, 21 aprobados y 0 fallidos.
- La PR #17 integró la consolidación documental y el archivo de resumen textual de pruebas en `develop`.

### Resultado registrado de las pruebas automatizadas

| Indicador | Resultado |
|---|---:|
| Comando | `npm test` |
| Tests reportados por el ejecutor | 21 |
| Aprobados | 21 |
| Fallidos | 0 |
| Cancelados | 0 |
| Omitidos | 0 |
| Pendientes | 0 |
| Duración compartida | Aproximadamente 556 ms |

El total reportado por Node.js Test Runner incluye suites contenedoras; no debe interpretarse necesariamente como 21 casos de prueba individuales diferentes.

**Archivo disponible:** [`docs/evidencias/pruebas-automatizadas.txt`](evidencias/pruebas-automatizadas.txt). Este archivo es un resumen textual, no una captura de pantalla. Si el profesor solicita una captura, debe añadirse una imagen real tomada durante la ejecución en Windows. No se debe referenciar `docs/evidencias/pruebas-automatizadas.png` hasta que exista y se verifique ese archivo.

## 3. Validación manual de los flujos principales

La versión documental disponible registra estos cuatro flujos como confirmados:

1. Registro de un cliente desde la interfaz.
2. Registro de un servicio.
3. Creación de una reserva asociando cliente y servicio.
4. Cancelación de una reserva.

No se localizaron capturas individuales en la evidencia revisada. Antes de la entrega final, conviene repetir y documentar en el equipo de sustentación los siguientes pasos:

| N.º | Flujo que debe comprobarse | Evidencia que se debe conservar |
|---:|---|---|
| 1 | Iniciar la aplicación y comprobar el estado de la API | Captura de la aplicación iniciada y, si procede, respuesta de `/api/health` |
| 2 | Registrar y consultar un cliente | Captura real del resultado en la interfaz |
| 3 | Registrar y consultar un servicio con precio y duración | Captura real del formulario y del resultado |
| 4 | Crear una reserva con cliente, servicio, fecha y hora | Captura real de la reserva creada |
| 5 | Consultar las reservas | Captura real del listado o detalle |
| 6 | Cancelar una reserva | Captura real del estado después de cancelar |
| 7 | Comprobar una entrada inválida relevante | Captura del mensaje o respuesta esperada, si forma parte de los criterios de evaluación |

Marcar estos pasos como completados únicamente después de repetirlos y comprobar los resultados. Las capturas deben proceder de la ejecución real; no se deben reconstruir ni simular.

## 4. Pendientes de gestión y entrega

- [ ] Comprobar el tablero de GitHub Projects y confirmar que muestra los cinco estados solicitados: Pendiente, Seleccionado, En progreso, En revisión y Hecho.
- [ ] Confirmar tareas, responsables y prioridades mediante datos reales del equipo.
- [ ] Verificar que una PR relevante cuenta con revisión auténtica de un integrante distinto del autor, cuando lo exija la consigna.
- [ ] Comprobar la procedencia de los commits citados en `docs/resolucion-conflictos.md`; si no se pueden verificar, reproducir un conflicto real y guardar la evidencia.
- [ ] Confirmar si la consigna exige una rama estable, la etiqueta `v1.0.0` o una GitHub Release; verificar el recurso real antes de documentarlo como existente.
- [ ] Actualizar el PDF de entrega con capturas auténticas y enlaces funcionales.
- [ ] Confirmar los datos de integrantes y los requisitos de asistencia y sustentación.

## 5. Nota de cierre

La integración de la PR #15 acredita el cierre del cambio técnico descrito, pero no significa que toda la entrega académica esté finalizada. La entrega podrá declararse cerrada cuando los requisitos de la consigna estén comprobados y las evidencias reales se hayan incorporado al PDF definitivo.
