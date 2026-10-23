# Matriz de trazabilidad — Agenda Clara V1

## 1. Objetivo
Relacionar los requerimientos de V1 con actividades, archivos de implementación, evidencia, revisión e integración. Los responsables individuales se mantienen pendientes porque no se han confirmado los dos usuarios del equipo en esta auditoría; no se asignan nombres por inferencia.

**Repositorio:** https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05  
**Tablero:** https://github.com/users/carlosu182/projects/1  
**Rama de integración:** `develop`  
**PR de cierre documental:** https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/pull/18

## 2. Requerimientos V1
| Req. | Actividad | Responsable real | Desarrollo técnico | Evidencia de validación | Revisión | Integración |
|---|---|---|---|---|---|---|
| RF01 | Registrar clientes | Confirmar en tablero | `server/routes/clientes.js`, interfaz de clientes | Prueba automatizada; confirmar captura manual | Revisión específica pendiente de acreditar | Implementación previa incluida en `develop` |
| RF02 | Modificar clientes | Confirmar en tablero | `PUT /api/clientes/:id` | Prueba automatizada; confirmar captura manual | Revisión específica pendiente de acreditar | Implementación previa incluida en `develop` |
| RF03 | Consultar/buscar clientes | Confirmar en tablero | `GET /api/clientes` | Prueba automatizada; confirmar captura manual | Revisión específica pendiente de acreditar | Implementación previa incluida en `develop` |
| RF04 | Registrar servicios | Confirmar en tablero | `POST /api/servicios`, `server/routes/servicios.js` | Prueba automatizada; confirmar captura manual | Revisión específica pendiente de acreditar | Implementación previa incluida en `develop` |
| RF05 | Definir precio y duración | Confirmar en tablero | Validaciones del módulo de servicios | Prueba automatizada; confirmar captura manual | Revisión específica pendiente de acreditar | Implementación previa incluida en `develop` |
| RF06 | Consultar servicios | Confirmar en tablero | `GET /api/servicios` | Prueba automatizada; confirmar captura manual | Revisión específica pendiente de acreditar | Implementación previa incluida en `develop` |
| RF07 | Registrar reserva vinculada a cliente y servicio | Confirmar en tablero | `POST /api/reservas`, `server/routes/reservas.js` | Prueba automatizada; confirmar captura manual | Revisión específica pendiente de acreditar | Implementación previa incluida en `develop` |
| RF08 | Registrar fecha y hora | Confirmar en tablero | Validación de fecha/hora y persistencia de reserva | Prueba automatizada; confirmar captura manual | Revisión específica pendiente de acreditar | Implementación previa incluida en `develop` |
| RF09 | Consultar reservas | Confirmar en tablero | `GET /api/reservas` | Prueba automatizada; confirmar captura manual | Revisión específica pendiente de acreditar | Implementación previa incluida en `develop` |
| RF10 | Cancelar reservas | Confirmar en tablero | `PATCH /api/reservas/:id/cancelar` | Prueba automatizada; confirmar captura manual | Revisión específica pendiente de acreditar | Implementación previa incluida en `develop` |

La PR #15 se integró mediante el commit `799c2ea` (22/10/2026; autor del commit: Bruno Reyes). Este registro acredita la integración, pero no demuestra por sí solo una aprobación formal de la PR. La PR #18 sí cuenta con aprobación formal documentada de Carlos y fue integrada en `develop` mediante `083b616`. Los commits identificados para la implementación son `3c69a2d` (Bruno Reyes: API REST de clientes y productos) y `6c4fc63` (Carlos Rivera: incorporación del proyecto con los módulos de clientes, servicios y reservas). Para servicios y reservas, el historial consultado identifica el commit de incorporación, pero no permite atribuir con certeza la autoría original de cada requisito RF.

## 3. Fuera del alcance V1
- RF11: recordatorios automáticos.
- RF12: reportes.
- RF13: dashboard de indicadores.
- RF14: pagos en línea.
- RF15: historial ampliado de clientes.

Se mantienen como backlog V2, conforme a la documentación actual del proyecto.

## 4. Evidencias y estado de verificación

- **Pruebas automatizadas:** 21 aprobadas, 0 fallidas. Evidencia disponible en `docs/evidencias/pruebas-automatizadas.txt`.
- **Integración y revisión:** la PR #18 fue aprobada formalmente por Carlos Fernando Rivera Hipolito y se integró en `develop` mediante `083b616`. La PR #15 se integró mediante `799c2ea`; la evidencia revisada hasta ahora no confirma una aprobación formal de esa PR.
- **Conflicto Git:** se identificaron las ramas `docs/conflicto-base`, `docs/conflicto-bruno` y `docs/conflicto-carlos`, además del commit `4314e23`, cuyo archivo `docs/prueba-conflicto-v1.txt` contiene el texto "Estado: Validado por Carlos y Bruno". Esta evidencia muestra variantes y un commit de resolución, pero todavía debe comprobarse el registro del conflicto efectivo y cómo se resolvió.
- **Liberación:** la etiqueta `v1.0.0` apunta al commit `083b616`; la Release de Agenda Clara V1.0.0 está publicada en GitHub.
- **Tablero:** el equipo confirma que están presentes los cinco estados requeridos. Deben mantenerse actualizados los responsables y el estado real de cada actividad.
- **Trazabilidad individual:** la atribución de RF01–RF10 a responsables y revisiones específicas debe conservarse como pendiente hasta verificar los commits y registros correspondientes.
- **Pruebas manuales:** el informe contiene la documentación de los flujos comunicados por el equipo. La disponibilidad de capturas individuales debe comprobarse antes de afirmar que cada flujo tiene evidencia independiente.

## 5. Flujo de trazabilidad requerido

**Requerimiento → Actividad → Responsable → Desarrollo → Revisión → Integración**

La matriz relaciona los requisitos funcionales con las actividades y archivos técnicos. La atribución individual de cada requisito debe respaldarse con registros verificables del repositorio y del tablero; no debe inferirse únicamente a partir de la integración global.


## Responsables y evidencia individual

Integrantes actuales declarados por el equipo:

- Carlos Fernando Rivera Hipolito — U23216154: [commit b6179e7](https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/commit/b6179e74f56f43ff73a88d1bd7c58e7cf2f9d5cd), documentación de evidencias de participación; merge relacionado [8af4fa7](https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/commit/8af4fa713878cd2913699931712fe90c2edf3155).
- Bruno Santiago Reyes Vicente — U19221035: autor de la [PR #18](https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/pull/18), sobre el cierre documental de Agenda Clara V1. La PR fue aprobada formalmente por Carlos e integrada en `develop` mediante `083b616`. También figura como autor del commit `3c69a2d`, que implementa operaciones REST para clientes y productos.

Estas entradas acreditan contribuciones puntuales, pero no toda la responsabilidad funcional. Mantener pendiente la atribución individual de RF01–RF10 cuando no exista evidencia específica. La aprobación de la PR #18 está respaldada por su registro formal de revisión; para otras PR, no inferir revisiones ni aprobaciones únicamente a partir de un merge.
