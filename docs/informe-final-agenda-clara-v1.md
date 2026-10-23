# Informe de entrega — Agenda Clara V1
## Sistema de gestión de clientes, servicios y reservas

**Asignatura:** Herramientas de Desarrollo  
**Grupo:** 05  
**Repositorio:** https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05  
**Versión del documento:** Informe de cierre técnico y documental

### Integrantes actuales

- Carlos Fernando Rivera Hipolito — U23216154
- Bruno Santiago Reyes Vicente — U19221035

### Responsabilidades y contribuciones verificables

- **Bruno Santiago Reyes Vicente — U19221035:** autor de la [PR #18](https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/pull/18), dedicada a completar evidencias y trazabilidad documental del cierre de Agenda Clara V1. La PR permanece abierta y no tiene revisiones formales registradas en la consulta actual.
- **Carlos Fernando Rivera Hipolito — U23216154:** el repositorio registra el commit [b6179e7](https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/commit/b6179e74f56f43ff73a88d1bd7c58e7cf2f9d5cd), relativo a documentación de evidencias de participación, incorporado mediante el merge [8af4fa7](https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/commit/8af4fa713878cd2913699931712fe90c2edf3155).

El historial permite vincular estos registros concretos, pero no prueba por sí solo el reparto completo de requerimientos, las validaciones manuales ejecutadas por cada persona ni una revisión por pares. Para no inventar contribuciones, el responsable final de cada RF debe contrastarse con el autor de los commits que modifican su implementación y con las asignaciones reales del tablero.

## 1. Descripción de la solución

Agenda Clara es una aplicación web destinada a una empresa de servicios que necesita centralizar la administración de clientes, el catálogo de servicios y las reservas. La interfaz web se comunica con una API REST desarrollada con Node.js y Express. La información se persiste en SQLite mediante relaciones entre clientes, servicios y reservas.

## 2. Requerimientos y alcance de la V1

| Código | Requerimiento | Alcance |
|---|---|---|
| RF01 | Registrar clientes | V1 |
| RF02 | Modificar información de clientes | V1 |
| RF03 | Consultar y buscar clientes | V1 |
| RF04 | Registrar servicios | V1 |
| RF05 | Establecer precio y duración de los servicios | V1 |
| RF06 | Consultar servicios | V1 |
| RF07 | Registrar reservas vinculadas a cliente y servicio | V1 |
| RF08 | Registrar fecha y hora de reserva | V1 |
| RF09 | Consultar reservas | V1 |
| RF10 | Cancelar reservas | V1 |
| RF11 | Recordatorios automáticos | Versión posterior |
| RF12 | Reportes | Versión posterior |
| RF13 | Dashboard de indicadores | Versión posterior |
| RF14 | Pagos en línea | Versión posterior |
| RF15 | Historial ampliado de clientes | Versión posterior |

La trazabilidad de estos requerimientos se documenta en `docs/requerimientos-trazabilidad.md` y `docs/matriz-trazabilidad.md`.

## 3. Organización del proyecto y repositorio

El repositorio utilizado para la adaptación y el cierre técnico es:

https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05

La rama `develop` funciona como rama de integración. El historial de Git registra la incorporación de cambios mediante Pull Requests.

El commit `799c2ea` corresponde a la integración de la PR #15, que incorporó el manejo de solicitudes con JSON malformado y actualizó los metadatos del repositorio en `package.json`.

La integración de este cambio técnico no demuestra por sí sola que todas las actividades de gestión, revisión entre compañeros y liberación académica estén completas.

## 4. Gestión de actividades

La consigna solicita un tablero colaborativo con cinco estados: **Pendiente, Seleccionado, En progreso, En revisión y Hecho**.

El proyecto de GitHub se encuentra enlazado en:

https://github.com/users/carlosu182/projects/1

La existencia del enlace no acredita por sí sola que todas las tareas, responsables, prioridades y transiciones estén correctamente registrados. El tablero real debe comprobarse directamente y mantenerse coherente con las tareas y evidencias. El archivo `docs/tablero-actividades.csv` es un inventario auxiliar, no actualiza por sí mismo las tarjetas de GitHub Projects.

## 5. Estrategia de ramas y desarrollo paralelo

La estrategia de trabajo contempla:

- `main`: rama destinada a la versión estable.
- `develop`: rama de integración.
- Ramas de funcionalidad o corrección para desarrollo aislado.
- Ramas documentales para actualizar trazabilidad e informes.

Los cambios se proponen mediante Pull Requests para facilitar la revisión y el registro de las integraciones. Esta descripción explica el flujo de trabajo y no implica que todas las ramas propuestas estén publicadas ni que la versión estable esté verificada.

## 6. Funcionalidades técnicas implementadas

La adaptación contempla las siguientes funcionalidades:

- API para registrar, consultar, buscar y modificar clientes.
- API para registrar, consultar y modificar servicios, con precio y duración; también permite activar o desactivar servicios.
- API para registrar, consultar, buscar y cancelar reservas vinculadas a clientes y servicios, con fecha y hora.
- Persistencia en SQLite y validaciones básicas de datos.
- Pruebas automatizadas mediante Node.js Test Runner.
- Manejo de solicitudes cuyo cuerpo contiene JSON malformado.

Rutas principales documentadas en el `README.md`: `/api/clientes`, `/api/servicios`, `/api/reservas` y `/api/health`.

## 7. Pruebas y validación técnica

### 7.1 Pruebas automatizadas

En el cierre técnico registrado en la PR #15 se ejecutó `npm test`, con el siguiente resultado:

| Indicador | Resultado |
|---|---:|
| Pruebas aprobadas | 21 |
| Pruebas fallidas | 0 |

La PR #15 también registra la ejecución de `npm ci` y la ausencia de vulnerabilidades reportadas durante esa instalación. Estos resultados corresponden a las validaciones consignadas en dicha Pull Request.

El resumen textual de la ejecución está en `docs/evidencias/pruebas-automatizadas.txt`. Es un resumen textual, no una captura de pantalla.

### 7.2 Manejo de JSON inválido

La PR #15 incorpora un manejador de errores para devolver HTTP 400 con una respuesta JSON cuando una solicitud contiene JSON malformado.

Referencias:
- Pull Request: https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/pull/15
- Commit del cambio: `3d6c0b1`
- Commit de integración en `develop`: `799c2ea`

El cambio incluye una prueba automatizada que comprueba el código HTTP 400 y el mensaje de error en formato JSON.

### 7.3 Validación manual

El documento `docs/validacion-manual-v1.md` registra cuatro flujos: registro de cliente, registro de servicio, creación de una reserva que vincula cliente y servicio, y cancelación de una reserva. La evidencia del informe final debe corresponder a las pruebas realmente realizadas.

## 8. Trabajo colaborativo y responsabilidades

Solo deben figurar como integrantes actuales las dos personas que continúan en el equipo. Sus nombres y códigos requieren confirmación antes de generar el PDF definitivo.

La asignación de trabajo debe verificarse con:
- commits identificables por autor;
- Pull Requests creadas y/o cambios incluidos;
- tareas reales de GitHub Projects y su historial;
- revisiones auténticas registradas en GitHub.

No se atribuyen tareas, revisiones ni aprobaciones a una persona sin evidencia verificable. La integración técnica no equivale automáticamente a una revisión por pares.

## 9. Integración y revisión de cambios

La integración de la PR #15 en `develop` está registrada mediante el commit `799c2ea`. Esta integración acredita el cambio técnico descrito en dicha PR; no sustituye la evidencia de revisión por otro integrante.

Antes del cierre, se debe comprobar que los registros de GitHub respalden las revisiones y que la documentación final refleje los estados reales de las Pull Requests.

## 10. Gestión de conflictos

El archivo `docs/resolucion-conflictos.md` documenta antecedentes de conflictos de Git y una referencia a un ejercicio controlado sobre `docs/prueba-conflicto-git.txt`.

El historial disponible en el clon actual contiene antecedentes relacionados con `README.md`, incluidos los commits `5710faa`, `da94043` y `b829d67`. Los commits `82f49bd`, `685d535`, `2e25c5f`, `75f39c3` y `283520c` se mencionan en la documentación, pero su procedencia no está verificada en las ramas consultadas del repositorio actual.

El ejercicio no debe presentarse como conflicto del código funcional de clientes, servicios o reservas. La participación de dos integrantes solo puede declararse si hay evidencia real de las ramas, los commits y la resolución.

## 11. Gestión de versiones y liberación

La V1 comprende la gestión de clientes, servicios y reservas. Los recordatorios automáticos, reportes, dashboard, pagos en línea e historial ampliado quedan fuera del alcance mínimo definido.

La integración técnica en `develop` está registrada. La existencia de una rama estable y de la etiqueta `v1.0.0` debe comprobarse en el repositorio antes de afirmar que la liberación final se ha completado.

## 12. Trazabilidad

La correspondencia exigida es:

**Requerimiento → Actividad → Responsable → Desarrollo → Revisión → Integración**

La matriz relaciona cada requisito con el archivo o endpoint técnico, mientras que los responsables individuales se mantienen pendientes cuando no existe una atribución verificable. Antes de la entrega, sustituir los campos de integrantes por sus datos reales y documentar qué tareas/commits corresponden a cada persona.

## 13. Lista de verificación final

- [ ] Sustituir los dos campos de integrantes por nombres y códigos reales.
- [ ] Asignar las contribuciones según commits, PR y tareas verificables.
- [ ] Verificar los cinco estados, las tareas y los responsables en GitHub Projects.
- [x] Integrar la PR #15 en `develop`; commit `799c2ea`.
- [x] Incorporar manejo de JSON malformado y su prueba automatizada.
- [x] Registrar el resultado reportado de 21 pruebas aprobadas y 0 fallidas.
- [x] Documentar los cuatro flujos de validación manual en `docs/validacion-manual-v1.md`.
- [ ] Verificar una revisión auténtica por otro integrante, si lo exige la consigna.
- [ ] Confirmar la procedencia de los commits del ejercicio controlado de conflicto o reproducir uno real y documentarlo.
- [ ] Verificar la rama estable y la etiqueta `v1.0.0`, si corresponde.
- [ ] Confirmar que el PDF de entrega final corresponda con esta información y las capturas reales.
- [ ] Confirmar los requisitos de asistencia a la sustentación.

## 14. Conclusiones

Agenda Clara V1 contempla la gestión de clientes, servicios y reservas mediante una aplicación web, una API REST y persistencia SQLite.

El cierre técnico de la PR #15 está registrado en `develop` mediante el commit `799c2ea`. La Pull Request documenta 21 pruebas automatizadas aprobadas y ninguna fallida, además de la incorporación del manejo de JSON malformado.

La entrega académica también requiere coherencia en integrantes, asignación de responsabilidades, tablero, colaboración, conflicto y liberación. Este informe distingue entre los cambios técnicos integrados y las evidencias que todavía deben comprobarse.

La entrega se considerará completamente cerrada cuando los datos de los dos integrantes estén confirmados y los pendientes aplicables estén respaldados por registros verificables.
