# Matriz de trazabilidad — Agenda Clara V1

## 1. Objetivo

Relacionar los requerimientos funcionales de Agenda Clara V1 con el desarrollo técnico, las actividades, los responsables, las evidencias, la revisión y la integración. Se diferencia la presencia de código en la rama de integración de la comprobación individual de cada requisito.

**Repositorio:** https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05  
**Tablero de gestión:** https://github.com/users/carlosu182/projects/1  
**Rama de integración:** `develop`

## 2. Matriz de requerimientos funcionales

| Req. | Actividad | Responsable | Desarrollo técnico | Revisión | Integración |
|---|---|---|---|---|---|
| RF01 | Registrar clientes | Por confirmar con el equipo | `server/routes/clientes.js` | Revisión específica no acreditada | Código presente en `develop`; validar flujo completo |
| RF02 | Modificar clientes | Por confirmar con el equipo | `PUT /api/clientes/:id` | Revisión específica no acreditada | Código presente en `develop`; validar flujo completo |
| RF03 | Consultar y buscar clientes | Por confirmar con el equipo | `GET /api/clientes` | Revisión específica no acreditada | Código presente en `develop`; validar flujo completo |
| RF04 | Registrar servicios | Por confirmar con el equipo | `POST /api/servicios` | Revisión específica no acreditada | Código presente en `develop`; validar flujo completo |
| RF05 | Definir precio y duración de servicios | Por confirmar con el equipo | Validaciones del módulo de servicios | Revisión específica no acreditada | Código presente en `develop`; validar flujo completo |
| RF06 | Consultar servicios | Por confirmar con el equipo | `GET /api/servicios` | Revisión específica no acreditada | Código presente en `develop`; validar flujo completo |
| RF07 | Registrar reservas vinculadas a cliente y servicio | Por confirmar con el equipo | `POST /api/reservas` | Revisión específica no acreditada | Código presente en `develop`; validar flujo completo |
| RF08 | Registrar fecha y hora de reserva | Por confirmar con el equipo | Validación de fecha y hora | Revisión específica no acreditada | Código presente en `develop`; validar flujo completo |
| RF09 | Consultar reservas | Por confirmar con el equipo | `GET /api/reservas` | Revisión específica no acreditada | Código presente en `develop`; validar flujo completo |
| RF10 | Cancelar reservas | Por confirmar con el equipo | `PATCH /api/reservas/:id/cancelar` | Revisión específica no acreditada | Código presente en `develop`; validar flujo completo |

La integración general del proyecto en `develop` está registrada en el historial de Git. No se considera que exista una revisión individual por requisito si no está documentada en una Pull Request o en una evidencia de revisión verificable.

## 3. Requerimientos de versiones posteriores

- RF11: Recordatorios automáticos.
- RF12: Reportes.
- RF13: Dashboard de indicadores.
- RF14: Pagos en línea.
- RF15: Historial ampliado de clientes.

Estas funciones están fuera del alcance mínimo declarado para V1. La codificación debe cotejarse con la consigna original antes de entregar.

## 4. Evidencias técnicas

### 4.1 Integración inicial

- [PR #1 — Incorporar proyecto](https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/pull/1).
- Commit de integración citado: `5f951cf`.

### 4.2 Manejo de JSON inválido

- [PR #15 — cierre técnico](https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/pull/15).
- Commit de cambio: `3d6c0b1`.
- Commit de integración: `799c2ea`.
- Cambio: respuesta HTTP 400 en formato JSON para solicitudes con cuerpo JSON malformado.
- La PR registra 21 pruebas aprobadas y 0 fallidas; el resultado de la ejecución local también se compartió posteriormente.

### 4.3 Pruebas automatizadas

- Comando: `npm test`.
- Resultado local compartido: 21 tests reportados, 21 aprobados, 0 fallidos, 0 cancelados y 0 omitidos.
- Resumen disponible: [`docs/evidencias/pruebas-automatizadas.txt`](evidencias/pruebas-automatizadas.txt).

El `.txt` es un resumen de resultados, no una captura de pantalla. Si la consigna solicita evidencia visual, debe incorporarse una captura auténtica de la terminal de Windows. No se referencia un `.png` hasta que ese archivo exista en el repositorio.

### 4.4 Validación manual

El documento [`docs/validacion-manual-v1.md`](validacion-manual-v1.md) registra cuatro flujos principales: registro de cliente, registro de servicio, creación de reserva y cancelación. La evidencia revisada no contiene capturas individuales de esos flujos. Deben repetirse en la versión integrada y capturarse si el profesor las solicita.

## 5. Tablero y colaboración

El tablero real fue mostrado en una captura del equipo. En ella se observan los cinco estados exigidos: **Pendiente, Seleccionado, En progreso, En revisión y Hecho**. La captura también muestra estas tarjetas:
- Pendiente: #9 «Validar y liberar Agenda Clara V1», #11 «Actualizar informe final y PDF».
- En revisión: #8 «Revisar cambios mediante Pull Request», #10 «Completar trazabilidad de requisitos».
- Hecho: #2 clientes, #3 servicios, #4 reservas, #5 pruebas automatizadas, #6 integración en GitHub y #7 completar tablero y asignar responsables.

La captura acredita la existencia de las columnas y las tarjetas visibles en ese momento. No prueba por sí sola el cierre de las tareas ni la identidad real de todas las personas representadas por los avatares.

## 6. Revisión de cambios

Las PR #15, #16 y #17 están integradas, pero los registros de revisiones consultados estaban vacíos. La tarea #8 describe como criterio de finalización una revisión auténtica por otro integrante, pero fue cerrada sin comentarios y sin que aparezca una revisión registrada.

Por ello, no se declara cumplida la revisión por pares. Un integrante distinto del autor debe revisar una PR apropiada, registrar observaciones reales y aprobarla si corresponde. La evidencia debe incluir el enlace a la PR y el registro de revisión de GitHub.

## 7. Conflicto de Git

El archivo [`docs/resolucion-conflictos.md`](resolucion-conflictos.md) menciona conflictos históricos en `README.md` y un ejercicio controlado. Los commits `82f49bd`, `685d535`, `2e25c5f`, `75f39c3` y `283520c` no quedaron verificados en las ramas consultadas del repositorio actual.

Criterio de cierre:
1. Verificar esos commits en el repositorio de origen; o
2. Reproducir en una rama del repositorio actual un conflicto real entre dos ramas.
3. Guardar el resultado del conflicto, la resolución, el commit final y una captura auténtica de la terminal.
4. Documentar qué ramas/archivo participaron y quién intervino realmente.

No se declara el requisito cumplido solo por existir un documento que lo describe.

## 8. Versionado y liberación

La auditoría previa no confirmó una etiqueta Git `v1.0.0` ni una GitHub Release. Antes de crear una versión, deben completarse la validación manual y la revisión requerida. Si la consigna exige una liberación formal, publicar el tag/release y conservar un enlace o captura verificable.

## 9. Estado de cierre

| Requisito | Estado | Criterio pendiente |
|---|---|---|
| Código integrado en `develop` | Integraciones registradas | Comprobar flujos en versión integrada |
| Pruebas automatizadas | 21 reportadas; 0 fallidas | Captura real si la consigna la exige |
| Tablero con cinco estados | Visible en captura del usuario | Verificar asignaciones y mover tareas solo según avance real |
| Responsables y contribuciones | Parcial | Confirmar nombres, tareas y commits |
| Revisión por pares | No acreditada | Revisión auténtica de otro integrante |
| Conflicto Git | Parcial / no acreditado suficientemente | Verificar commits o reproducir conflicto y guardar evidencia |
| Tag/release | No confirmada | Verificar requisito; publicar solo tras completar validación |
| PDF final de entrega | En preparación | Integrar las evidencias auténticas restantes |

## 10. Criterios de cierre

- Confirmar integrantes y contribuciones reales.
- Mantener el tablero accesible; capturar las columnas y el detalle de tareas/responsables.
- Obtener una revisión real por otro integrante.
- Repetir la validación manual y conservar capturas auténticas.
- Verificar o reproducir el conflicto Git.
- Comprobar si se exige tag o GitHub Release y generar la versión solo después de validar.
- Integrar las evidencias en el PDF final siguiendo los 12 puntos de la consigna.

Esta matriz es un registro del estado de las evidencias revisadas; no constituye una calificación ni declara cerradas las actividades cuyo respaldo sigue pendiente.
