# Matriz de trazabilidad — Agenda Clara V1

## 1. Objetivo

Relacionar los requerimientos funcionales de Agenda Clara V1 con las actividades registradas en GitHub Projects, los responsables, el código implementado y las evidencias de revisión e integración.

## 2. Matriz de requerimientos funcionales

| Req. | Actividad / Issue | Responsable asignado | Desarrollo | Revisión e integración |
|---|---|---|---|---|
| RF01 | Registro de clientes — #2 | Carlos | `server/routes/clientes.js` | Integrado; revisión específica no acreditada |
| RF02 | Modificación de clientes — #2 | Carlos | `PUT /api/clientes/:id` | Integrado; revisión específica no acreditada |
| RF03 | Consulta de clientes — #2 | Carlos | `GET /api/clientes` | Integrado; revisión específica no acreditada |
| RF04 | Registro de servicios — #3 | Bruno | `POST /api/servicios` | Integrado; revisión específica no acreditada |
| RF05 | Precio y duración — #3 | Bruno | Validaciones en `server/routes/servicios.js` | Integrado; revisión específica no acreditada |
| RF06 | Consulta de servicios — #3 | Bruno | `GET /api/servicios` | Integrado; revisión específica no acreditada |
| RF07 | Registro de reservas — #4 | Carlos | `POST /api/reservas` | Integrado; revisión específica no acreditada |
| RF08 | Fecha y hora de reserva — #4 | Carlos | Validación de fecha y hora | Integrado; revisión específica no acreditada |
| RF09 | Consulta de reservas — #4 | Carlos | `GET /api/reservas` | Integrado; revisión específica no acreditada |
| RF10 | Cancelación de reservas — #4 | Carlos | `PATCH /api/reservas/:id/cancelar` | Integrado; revisión específica no acreditada |

Los responsables indicados corresponden a las asignaciones del tablero. La autoría histórica de cada cambio debe verificarse mediante el registro de commits.

## 3. Requerimientos para versiones posteriores

- RF11: Recordatorios automáticos.
- RF12: Reportes.
- RF13: Dashboard de indicadores.
- RF14: Pagos en línea.
- RF15: Historial ampliado de clientes.

Estas funcionalidades no forman parte del alcance mínimo de Agenda Clara V1.

## 4. Actividades de gestión y seguimiento

| Issue | Actividad | Estado registrado |
|---|---|---|
| #2 | Implementar módulo de clientes | Hecho |
| #3 | Implementar módulo de servicios | Hecho |
| #4 | Implementar módulo de reservas | Hecho |
| #5 | Ejecutar pruebas automatizadas | Hecho |
| #6 | Publicar e integrar el proyecto en GitHub | Hecho |
| #7 | Completar tablero y responsables | Hecho |
| #8 | Revisar cambios mediante Pull Request | En revisión |
| #9 | Validar y liberar Agenda Clara V1 | Pendiente |
| #10 | Completar trazabilidad de requisitos | En progreso |
| #11 | Actualizar informe final y PDF | Pendiente |

## 5. Evidencias de desarrollo e integración

**Repositorio actual:**

https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05

**Proyecto de gestión:**

https://github.com/users/carlosu182/projects/1

**Ramas utilizadas:**
- `feature/backend-api`: versión integrada antes de organizar el flujo de liberación.
- `develop`: rama de integración y validación.
- `feature/revision-v1`: rama creada para la mejora de manejo de JSON inválido.

**Integración inicial:**
- Pull Request #1.
- Commit de integración: `5f951cf`.
- Actualización de dependencias: `f622140`.

**Mejora sometida a revisión:**
- Issue #8.
- Commit: `55d95ae`.
- Modificación de `server/app.js` para responder HTTP 400 ante JSON inválido.
- Revisor solicitado: `brunoreyes-dev`.
- Estado: pendiente de aprobación e integración en `develop`.

## 6. Evidencias de pruebas

Se ejecutó la suite automatizada de Agenda Clara V1 utilizando:

`npm test`

Resultados registrados:
- Pruebas ejecutadas: 20.
- Pruebas aprobadas: 20.
- Pruebas fallidas: 0.

También se verificó manualmente que la API respondiera con HTTP 400 y un mensaje JSON ante una solicitud mal formada.

## 7. Antecedentes del repositorio original

El desarrollo previo se realizó en:

https://github.com/Eduardo-Jara03/Proyecto-pedidos-tiendatecnologia-grupo05

Referencias históricas documentadas:
- `26d1fc6`: adaptación funcional.
- `373219f`: documentación y trazabilidad.
- `1bbd6b6`: evidencia de pruebas.
- `540f580`: actualización del tablero CSV.
- `cfe7465`: validación manual.

Estas referencias corresponden al repositorio original y deben distinguirse de los commits e integraciones del repositorio actual.

## 8. Evidencias pendientes

- Aprobación registrada por Bruno en el Pull Request de revisión.
- Integración del cambio revisado en `develop`.
- Nueva ejecución de pruebas después de la integración.
- Preparación y validación de `main`.
- Creación de la etiqueta estable `v1.0.0`.
- Actualización del informe final y sus capturas.

La aprobación de un Pull Request, la integración de código y la liberación de una versión solo se consideran completadas cuando existen registros verificables en GitHub.