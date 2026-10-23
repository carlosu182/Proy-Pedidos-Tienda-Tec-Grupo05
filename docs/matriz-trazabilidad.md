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

La PR #15 y el commit de integración documentado `799c2ea` respaldan el manejo de JSON malformado y las pruebas referidas en ese cambio. Esta evidencia no equivale a una revisión manual específica de cada RF. Los commits de integración particulares de cada requisito deben agregarse cuando se hayan identificado y comprobado.

## 3. Fuera del alcance V1
- RF11: recordatorios automáticos.
- RF12: reportes.
- RF13: dashboard de indicadores.
- RF14: pagos en línea.
- RF15: historial ampliado de clientes.

Se mantienen como backlog V2, conforme a la documentación actual del proyecto.

## 4. Evidencias y pendientes
- Pruebas automatizadas: se reportaron 21 tests, 21 aprobados y 0 fallidos. Ver `docs/evidencias/pruebas-automatizadas.txt`.
- Capturas manuales: el equipo indica que ya están en el informe. Mantenerlas enlazadas o adjuntarlas en el repositorio para trazabilidad reproducible.
- Revisión por pares: pendiente de una revisión auténtica en PR #18.
- Conflicto Git: verificar las referencias históricas o reproducir conflicto real con participación trazable de ambos integrantes.
- Liberación: confirmar tag y release después de cerrar los pendientes.

## 5. Flujo requerido
**Requerimiento → Actividad → Responsable → Desarrollo → Revisión → Integración.**

Para cada requisito, registrar en GitHub el responsable real, issue/actividad, rama o commit de desarrollo, PR/revisor real y commit de integración. No atribuir revisiones ni actividades retrospectivamente si no aparecen respaldadas por registros.


## Responsables y evidencia individual

Integrantes actuales declarados por el equipo:

- Carlos Fernando Rivera Hipolito — U23216154: [commit b6179e7](https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/commit/b6179e74f56f43ff73a88d1bd7c58e7cf2f9d5cd), documentación de evidencias de participación; merge relacionado [8af4fa7](https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/commit/8af4fa713878cd2913699931712fe90c2edf3155).
- Bruno Santiago Reyes Vicente — U19221035: autor de la [PR #18](https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/pull/18), sobre el cierre documental de Agenda Clara V1. La PR está abierta y sin revisión formal registrada en la consulta actual.

Estas entradas son registros puntuales y no acreditan por sí mismas toda la responsabilidad funcional. Mantener pendiente la atribución RF01–RF10 hasta cotejar cada commit de implementación con su autor real. No inferir revisiones ni aprobaciones a partir de un merge.
