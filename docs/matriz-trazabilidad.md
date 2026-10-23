# Matriz de trazabilidad — Agenda Clara V1

## 1. Objetivo

Relacionar los requerimientos funcionales de Agenda Clara V1 con el desarrollo técnico, las evidencias disponibles, la revisión y la integración en el repositorio actual.

**Repositorio actual:**
https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05

**Tablero de gestión:**
https://github.com/users/carlosu182/projects/1

**Rama de integración:** `develop`

## 2. Matriz de requerimientos funcionales

| Req. | Actividad | Responsable | Desarrollo técnico | Revisión | Integración |
|---|---|---|---|---|---|
| RF01 | Registrar clientes | Por verificar | `server/routes/clientes.js` | Revisión específica pendiente de acreditar | Integrado en `develop` |
| RF02 | Modificar clientes | Por verificar | `PUT /api/clientes/:id` | Revisión específica pendiente de acreditar | Integrado en `develop` |
| RF03 | Consultar y buscar clientes | Por verificar | `GET /api/clientes` | Revisión específica pendiente de acreditar | Integrado en `develop` |
| RF04 | Registrar servicios | Por verificar | `POST /api/servicios` | Revisión específica pendiente de acreditar | Integrado en `develop` |
| RF05 | Definir precio y duración de servicios | Por verificar | Validaciones del módulo de servicios | Revisión específica pendiente de acreditar | Integrado en `develop` |
| RF06 | Consultar servicios | Por verificar | `GET /api/servicios` | Revisión específica pendiente de acreditar | Integrado en `develop` |
| RF07 | Registrar reservas vinculadas a cliente y servicio | Por verificar | `POST /api/reservas` | Revisión específica pendiente de acreditar | Integrado en `develop` |
| RF08 | Registrar fecha y hora de reserva | Por verificar | Validación de fecha y hora | Revisión específica pendiente de acreditar | Integrado en `develop` |
| RF09 | Consultar reservas | Por verificar | `GET /api/reservas` | Revisión específica pendiente de acreditar | Integrado en `develop` |
| RF10 | Cancelar reservas | Por verificar | `PATCH /api/reservas/:id/cancelar` | Revisión específica pendiente de acreditar | Integrado en `develop` |

La integración general del proyecto en `develop` está acreditada por el historial Git. Esta afirmación no sustituye la verificación individual de cada requisito ni demuestra una revisión específica por requisito.

## 3. Requerimientos previstos para versiones posteriores

- RF11: Recordatorios automáticos.
- RF12: Reportes.
- RF13: Dashboard de indicadores.
- RF14: Pagos en línea.
- RF15: Historial ampliado de clientes.

Estas funciones están fuera del alcance declarado de Agenda Clara V1.

## 4. Evidencias técnicas

### Integración inicial

- Pull Request: [PR #1](https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/pull/1).
- Commit de integración registrado: `5f951cf`.
- Rama de integración: `develop`.

### Manejo de JSON inválido

- Pull Request: [PR #15](https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/pull/15).
- Commit de cambio: `3d6c0b1`.
- Commit de integración: `799c2ea`.
- Cambio: respuesta HTTP 400 con JSON ante solicitudes con cuerpo JSON malformado.
- Pruebas declaradas en el registro de la PR: 21 aprobadas y 0 fallidas.
- Estado: integrada en `develop`.

### Pruebas automatizadas

- Comando documentado: `npm test`.
- Resultado más reciente registrado: 21 pruebas aprobadas y 0 fallidas.
- Captura disponible: `docs/evidencias/pruebas-automatizadas.png`.

La captura debe revisarse para confirmar si corresponde a la ejecución más reciente. No debe atribuirse a ella un resultado que no muestre.

### Validación manual

El archivo `docs/validacion-manual-v1.md` registra cuatro flujos confirmados: registro de clientes, registro de servicios, creación de reservas y cancelación de reservas.

El registro declara que no existen capturas individuales para cada operación.

## 5. Gestión y colaboración

| Actividad | Estado conocido | Evidencia o acción pendiente |
|---|---|---|
| Integración técnica en `develop` | Completada para la PR #15 | Commit `799c2ea` |
| Consolidación documental de la matriz | Completada en PR #16 | La documentación se integró; las evidencias externas deben corresponder a actividades reales |
| Revisión de cambios por otro integrante | Pendiente de confirmar | Verificar revisión y aprobación auténticas en GitHub |
| Tablero colaborativo | Enlace disponible | Comprobar tareas, responsables y cinco estados requeridos |
| Conflicto de Git | Documentación en revisión | Verificar el origen de los commits citados en `docs/resolucion-conflictos.md` |
| Liberación estable | Pendiente de verificar | Validar la versión y el tag antes de declarar el cierre |
| Informe y PDF definitivos | Pendientes de actualización | Incorporar enlaces y evidencias verificables |

## 6. Referencias históricas

El desarrollo previo incluye referencias al repositorio:

https://github.com/Eduardo-Jara03/Proyecto-pedidos-tiendatecnologia-grupo05

Los commits y documentos de ese repositorio deben tratarse como antecedentes históricos, no como evidencia automática de integración o revisión en el repositorio actual.

## 7. Criterios de cierre

Antes de declarar finalizada la entrega se debe:

- Verificar que los responsables reflejen asignaciones y contribuciones reales.
- Confirmar el tablero y sus estados.
- Registrar una revisión auténtica por otro integrante.
- Validar las pruebas automatizadas y conservar evidencia actualizada.
- Verificar la procedencia de la evidencia del conflicto.
- Comprobar la rama estable y la etiqueta de versión, si se crean.
- Actualizar el informe final y el PDF con los enlaces correctos.

La matriz distingue entre integración técnica confirmada, evidencia disponible y pendientes de verificación. No declara una liberación final mientras no existan registros que la acrediten.
