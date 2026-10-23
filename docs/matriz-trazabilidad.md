# Matriz de trazabilidad — Agenda Clara V1

## 1. Objetivo

Relacionar los requerimientos funcionales de Agenda Clara V1 con el desarrollo técnico, las evidencias disponibles, la revisión y la integración en el repositorio actual. La matriz distingue la implementación integrada de las evidencias que todavía deben comprobarse; no se atribuyen responsables ni aprobaciones sin respaldo verificable.

**Repositorio:** https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05  
**Tablero de gestión:** https://github.com/users/carlosu182/projects/1  
**Rama de integración:** `develop`

## 2. Matriz de requerimientos funcionales

| Req. | Actividad | Responsable | Desarrollo técnico | Revisión | Integración |
|---|---|---|---|---|---|
| RF01 | Registrar clientes | Por verificar | `server/routes/clientes.js` | Revisión específica pendiente de acreditar | Código integrado en `develop`; validación individual pendiente |
| RF02 | Modificar clientes | Por verificar | `PUT /api/clientes/:id` | Revisión específica pendiente de acreditar | Código integrado en `develop`; validación individual pendiente |
| RF03 | Consultar y buscar clientes | Por verificar | `GET /api/clientes` | Revisión específica pendiente de acreditar | Código integrado en `develop`; validación individual pendiente |
| RF04 | Registrar servicios | Por verificar | `POST /api/servicios` | Revisión específica pendiente de acreditar | Código integrado en `develop`; validación individual pendiente |
| RF05 | Definir precio y duración de servicios | Por verificar | Validaciones del módulo de servicios | Revisión específica pendiente de acreditar | Código integrado en `develop`; validación individual pendiente |
| RF06 | Consultar servicios | Por verificar | `GET /api/servicios` | Revisión específica pendiente de acreditar | Código integrado en `develop`; validación individual pendiente |
| RF07 | Registrar reservas vinculadas a cliente y servicio | Por verificar | `POST /api/reservas` | Revisión específica pendiente de acreditar | Código integrado en `develop`; validación individual pendiente |
| RF08 | Registrar fecha y hora de reserva | Por verificar | Validación de fecha y hora | Revisión específica pendiente de acreditar | Código integrado en `develop`; validación individual pendiente |
| RF09 | Consultar reservas | Por verificar | `GET /api/reservas` | Revisión específica pendiente de acreditar | Código integrado en `develop`; validación individual pendiente |
| RF10 | Cancelar reservas | Por verificar | `PATCH /api/reservas/:id/cancelar` | Revisión específica pendiente de acreditar | Código integrado en `develop`; validación individual pendiente |

La integración general de cambios en `develop` está registrada en el historial Git. Esto no sustituye la comprobación individual de cada requisito, ni prueba por sí solo una revisión específica de cada fila.

## 3. Requerimientos previstos para versiones posteriores

- RF11: Recordatorios automáticos.
- RF12: Reportes.
- RF13: Dashboard de indicadores.
- RF14: Pagos en línea.
- RF15: Historial ampliado de clientes.

Estas funciones se mantienen fuera del alcance declarado para Agenda Clara V1. Confirmar esta codificación con la consigna original antes de la entrega definitiva.

## 4. Evidencias técnicas

### 4.1 Integración inicial

- Pull Request: [PR #1](https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/pull/1).
- Commit de integración registrado: `5f951cf`.
- Rama de integración: `develop`.

### 4.2 Manejo de JSON inválido

- Pull Request: [PR #15](https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/pull/15).
- Commit de cambio citado: `3d6c0b1`.
- Commit de integración citado: `799c2ea`.
- Cambio descrito: respuesta HTTP 400 en formato JSON ante solicitudes cuyo cuerpo contiene JSON malformado.
- Resultado de pruebas registrado: 21 tests reportados, 21 aprobados y 0 fallidos.
- Estado: cambio integrado en `develop`.

### 4.3 Pruebas automatizadas

- Comando ejecutado: `npm test`.
- Resultado compartido desde la ejecución local: 21 tests reportados, 21 aprobados, 0 fallidos, 0 cancelados y 0 omitidos.
- Archivo disponible: [`docs/evidencias/pruebas-automatizadas.txt`](evidencias/pruebas-automatizadas.txt).

El archivo `.txt` es un resumen textual de los resultados; no es una captura de pantalla de la consola. Si la consigna requiere una captura, debe guardarse una imagen auténtica de la ejecución en Windows y añadirse al repositorio. No se debe referenciar `pruebas-automatizadas.png` hasta que ese archivo exista y haya sido verificado.

### 4.4 Validación manual

El documento [`docs/validacion-manual-v1.md`](validacion-manual-v1.md) registra cuatro flujos: registro de clientes, registro de servicios, creación de reservas y cancelación de reservas. La documentación indica que no se conservan capturas individuales de cada operación; por tanto, la evidencia visual debe completarse si la entrega la exige.

## 5. Gestión y colaboración

| Actividad | Estado de evidencia | Acción pendiente |
|---|---|---|
| Integración técnica en `develop` | Integración de PR #15 registrada; commit `799c2ea` | Conservar enlace del merge |
| Consolidación documental de la matriz | Integrada mediante PR #16, según el historial documentado | Comprobar consistencia con la versión final |
| Revisión de cambios por otro integrante | No acreditada en los registros de revisión consultados | Verificar una revisión auténtica en GitHub |
| Tablero colaborativo | Enlace disponible | Confirmar los cinco estados, tareas, responsables y prioridades en el tablero real |
| Conflicto de Git | Documentación existente; origen de parte de la evidencia por verificar | Verificar commits en su repositorio de origen o reproducir un conflicto real |
| Liberación estable | No confirmada en la auditoría realizada | Comprobar rama/tag/release requeridos |
| Informe y PDF definitivos | En preparación | Añadir capturas y enlaces reales del resto de evidencias |

## 6. Referencias históricas

El desarrollo previo incluye referencias al repositorio [Eduardo-Jara03/Proyecto-pedidos-tiendatecnologia-grupo05](https://github.com/Eduardo-Jara03/Proyecto-pedidos-tiendatecnologia-grupo05).

Los commits y documentos de ese repositorio deben tratarse como antecedentes históricos, no como evidencia automática de integración, colaboración o revisión en el repositorio actual. Cualquier referencia usada como prueba debe enlazar al commit o archivo original verificable.

## 7. Criterios de cierre

Antes de declarar finalizada la entrega:

- Confirmar que integrantes, responsables y contribuciones coinciden con datos reales.
- Verificar directamente el tablero publicado y los cinco estados requeridos.
- Registrar una revisión auténtica por otro integrante, si así lo pide la consigna.
- Conservar el resultado actualizado de `npm test` y una captura real de consola si se exige.
- Completar la validación manual de clientes, servicios y reservas y guardar las evidencias.
- Verificar el origen de los commits históricos citados o reproducir un conflicto real, resolviéndolo y conservando su commit y captura.
- Confirmar si se exige rama estable, etiqueta `v1.0.0` o GitHub Release; no declarar que existen hasta verificarlos.
- Incorporar las evidencias y los enlaces correctos en el PDF final.

La matriz diferencia integración técnica, documentación disponible y requisitos cuya evidencia está pendiente. La entrega no se declarará completamente cerrada mientras queden criterios sin respaldo verificable.
