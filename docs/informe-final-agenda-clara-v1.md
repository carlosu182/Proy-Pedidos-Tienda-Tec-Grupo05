# Informe de entrega — Agenda Clara V1
## Sistema de gestión de clientes, servicios y reservas

**Asignatura:** Herramientas de Desarrollo
**Grupo:** 05
**Repositorio:** https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05
**Versión del documento:** Informe de cierre técnico y documental

### Integrantes registrados

- Eduardo Jesús Jara Moya — U21302190
- Lisbert Wiliams Galvan Zamudio — U22217814
- Nery Emerson Velasquez Pacheco — U23272063
- Carlos Fernando Rivera Hipolito — U23216154
- Bruno Santiago Reyes Vicente — U19221035

> Antes de entregar, el equipo debe confirmar los integrantes, las responsabilidades reales y la participación de cada persona. La consigna también establece condiciones relacionadas con la asistencia a la sustentación.

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
| RF11 | Cancelar reservas | V1 |
| RF12 | Recordatorios automáticos | Versión posterior |
| RF13 | Reportes | Versión posterior |
| RF14 | Dashboard de indicadores | Versión posterior |
| RF15 | Pagos en línea | Versión posterior |

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

La existencia del enlace no acredita por sí sola que todas las tareas, responsables, prioridades y transiciones estén correctamente registrados. Antes de la entrega se debe comprobar el tablero real y conservar capturas que muestren sus estados y actividades.

El archivo `docs/tablero-actividades.csv` sirve como apoyo para organizar tareas, pero no sustituye al tablero publicado.

## 5. Estrategia de ramas y desarrollo paralelo

La estrategia de trabajo contempla:

- `main`: rama destinada a la versión estable.
- `develop`: rama de integración.
- Ramas de funcionalidad o corrección: desarrollo aislado de cambios.
- Ramas documentales: actualización de trazabilidad e informes.

Los cambios se proponen mediante Pull Requests para facilitar la revisión y el registro de las integraciones.

Esta descripción explica el flujo de trabajo. No implica que todas las ramas propuestas estén publicadas ni que la rama estable y su versión final estén verificadas.

## 6. Funcionalidades técnicas implementadas

La adaptación contempla las siguientes funcionalidades:

- API para registrar, consultar, buscar y modificar clientes.
- API para registrar, consultar y modificar servicios, con precio y duración; también permite activar o desactivar servicios.
- API para registrar, consultar, buscar y cancelar reservas vinculadas a clientes y servicios, con fecha y hora.
- Persistencia en SQLite y validaciones básicas de datos.
- Pruebas automatizadas mediante Node.js Test Runner.
- Manejo de solicitudes cuyo cuerpo contiene JSON malformado.

Rutas principales documentadas en el `README.md`:

- `/api/clientes`
- `/api/servicios`
- `/api/reservas`
- `/api/health`

## 7. Pruebas y validación técnica

### 7.1 Pruebas automatizadas

En el cierre técnico registrado en la PR #15 se ejecutó `npm test`, con el siguiente resultado:

| Indicador | Resultado |
|---|---:|
| Pruebas aprobadas | 21 |
| Pruebas fallidas | 0 |

La PR #15 también registra la ejecución de `npm ci` y la ausencia de vulnerabilidades reportadas durante esa instalación. Estos resultados corresponden a las validaciones consignadas en dicha Pull Request.

El archivo `docs/evidencias/pruebas-automatizadas.png` está disponible como evidencia. Antes de entregar, se debe confirmar que la captura refleje la ejecución de 21 pruebas; no debe atribuirse a la imagen un resultado que no muestre.

### 7.2 Manejo de JSON inválido

La PR #15 incorpora un manejador de errores para devolver HTTP 400 con una respuesta JSON cuando una solicitud contiene JSON malformado.

Referencias verificables:

- Pull Request: https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/pull/15
- Commit del cambio: `3d6c0b1`
- Commit de integración en `develop`: `799c2ea`

El cambio incluye una prueba automatizada que comprueba el código HTTP 400 y el mensaje de error en formato JSON.

### 7.3 Validación manual

El documento `docs/validacion-manual-v1.md` registra cuatro flujos confirmados:

1. Registro de un cliente desde la interfaz.
2. Registro de un servicio.
3. Creación de una reserva vinculando cliente y servicio.
4. Cancelación de una reserva.

El registro indica que los resultados fueron confirmados durante la validación manual. No acredita capturas individuales de cada operación ni pruebas adicionales que no se hayan ejecutado.

## 8. Trabajo colaborativo y responsabilidades

Los integrantes registrados aparecen en la carátula de este informe. Sin embargo, sus responsabilidades y contribuciones deben confirmarse mediante los commits, las asignaciones del tablero y las Pull Requests.

No se atribuyen tareas, revisiones ni aprobaciones a una persona sin evidencia verificable.

**Pendientes de verificación:**

- Confirmar las asignaciones y responsabilidades de cada integrante.
- Comprobar la participación registrada en el tablero.
- Verificar una revisión auténtica de un integrante distinto del autor en la Pull Request correspondiente.
- Incorporar enlaces o capturas que acrediten la colaboración.

## 9. Integración y revisión de cambios

La integración de la PR #15 en `develop` está registrada mediante el commit `799c2ea`.

Esta integración acredita el cambio técnico descrito en dicha PR. No sustituye la evidencia de revisión por otro integrante ni demuestra que la liberación final de Agenda Clara V1 esté completada.

Antes de cerrar la entrega se debe verificar en GitHub:

- Que exista una revisión auténtica por otro integrante, cuando la consigna lo requiera.
- Que la aprobación esté registrada y corresponda al cambio revisado.
- Que las integraciones declaradas coincidan con el historial de Git.
- Que la documentación final refleje los estados reales de las Pull Requests.

## 10. Gestión de conflictos

El archivo `docs/resolucion-conflictos.md` documenta antecedentes de conflictos de Git y una referencia a un ejercicio controlado sobre `docs/prueba-conflicto-git.txt`.

El historial disponible en el clon actual contiene antecedentes de conflictos relacionados con `README.md`, incluidos los commits `5710faa`, `da94043` y `b829d67`.

La documentación de revisión también menciona los commits `82f49bd`, `685d535`, `2e25c5f`, `75f39c3` y `283520c`. Estos cinco identificadores no aparecen en las ramas disponibles en el clon revisado; por ello, su procedencia permanece pendiente de verificación.

El ejercicio controlado descrito en esa documentación no debe presentarse como un conflicto del código funcional de clientes, servicios o reservas. La participación de otro integrante tampoco se considera demostrada sin evidencia adicional.

## 11. Gestión de versiones y liberación

La V1 comprende la gestión de clientes, servicios y reservas. Los recordatorios automáticos, reportes, dashboard, pagos en línea e historial ampliado quedan fuera del alcance mínimo definido.

La integración técnica en `develop` está registrada. Sin embargo, la existencia de una rama estable y de la etiqueta `v1.0.0` debe comprobarse en el repositorio antes de afirmar que la liberación final se ha completado.

No se declara en este informe que la etiqueta `v1.0.0` exista o que la versión estable ya haya sido liberada.

## 12. Trazabilidad

La correspondencia exigida es:

**Requerimiento → Actividad → Responsable → Desarrollo → Revisión → Integración**

La matriz de trazabilidad debe relacionar cada requisito con el código o archivo correspondiente, la actividad asociada, el responsable real, la revisión y la integración.

La matriz actualizada distingue entre la integración técnica confirmada, la evidencia disponible y los puntos pendientes de verificación. Los responsables se mantienen como pendientes de confirmar cuando no existe evidencia suficiente para asignarlos.

## 13. Lista de verificación final

- [ ] Confirmar nombres, códigos y participación de los integrantes.
- [ ] Verificar el tablero real y sus cinco estados.
- [ ] Confirmar responsables, prioridades y asignaciones de tareas.
- [x] Integrar la PR #15 en `develop`; commit `799c2ea`.
- [x] Incorporar manejo de JSON malformado y su prueba automatizada.
- [x] Registrar en la PR #15 un resultado de 21 pruebas aprobadas y 0 fallidas.
- [x] Registrar la validación manual de los cuatro flujos descritos en `docs/validacion-manual-v1.md`.
- [ ] Confirmar que la captura automatizada corresponde a la ejecución de 21 pruebas.
- [ ] Verificar una revisión auténtica por otro integrante.
- [ ] Confirmar la procedencia de los commits citados para el ejercicio controlado de conflicto.
- [ ] Verificar la rama estable y la etiqueta `v1.0.0`, si corresponde.
- [ ] Actualizar y revisar el PDF definitivo con enlaces y evidencias reales.
- [ ] Confirmar los requisitos de asistencia a la sustentación.

## 14. Conclusiones

La adaptación de Agenda Clara V1 contempla la gestión de clientes, servicios y reservas mediante una aplicación web, una API REST y persistencia SQLite.

El cierre técnico de la PR #15 está registrado en `develop` mediante el commit `799c2ea`. La Pull Request documenta 21 pruebas automatizadas aprobadas y ninguna fallida, además de la incorporación del manejo de JSON malformado.

No obstante, la entrega académica requiere verificar aspectos adicionales de gestión, trazabilidad, colaboración, revisión, evidencias del conflicto y liberación estable. Por ello, este informe distingue entre los cambios técnicos integrados y las evidencias que todavía deben comprobarse.

La entrega se considerará completamente cerrada cuando los pendientes de la lista de verificación hayan sido resueltos y sus resultados estén respaldados por registros verificables.
