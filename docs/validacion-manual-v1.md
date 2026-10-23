# Validación manual y cierre técnico — Agenda Clara V1

## 1. Propósito

Registrar los resultados técnicos disponibles y las verificaciones necesarias antes de la entrega académica. Este documento separa los resultados de pruebas comunicados y los flujos documentados de las actividades que todavía deben repetirse y demostrarse con evidencia real.

## 2. Pruebas automatizadas

### Resultado reportado

| Indicador | Resultado |
|---|---:|
| Comando | `npm test` |
| Tests reportados por Node.js Test Runner | 21 |
| Aprobados | 21 |
| Fallidos | 0 |
| Cancelados | 0 |
| Omitidos | 0 |
| Pendientes | 0 |
| Duración local compartida | Aproximadamente 556 ms |

El total reportado por el ejecutor incluye suites contenedoras; no debe interpretarse necesariamente como 21 casos de prueba individuales diferentes.

**Archivo disponible:** [`docs/evidencias/pruebas-automatizadas.txt`](evidencias/pruebas-automatizadas.txt). El `.txt` es un resumen escrito de los resultados, no una captura de pantalla de la terminal. Si el profesor exige captura, debe incorporarse una imagen auténtica tomada durante una nueva ejecución en Windows.

### Comando para repetir la ejecución

Desde la raíz del repositorio:

```powershell
npm ci
npm test
```

Guardar la salida real y, si se solicita, realizar una captura de pantalla donde se vean el comando y el resumen final.

## 3. Validación manual

El documento previo registra estos cuatro flujos como confirmados durante una comprobación anterior:

1. Registro de un cliente desde la interfaz.
2. Registro de un servicio.
3. Creación de una reserva asociando cliente y servicio.
4. Cancelación de una reserva.

No se localizaron capturas individuales de esos flujos. Repetir la validación después de integrar los últimos cambios y rellenar esta tabla únicamente con resultados observados:

| ID | Prueba a ejecutar | Resultado observado | Evidencia |
|---|---|---|---|
| VM-01 | Iniciar la aplicación y consultar `/api/health` | Por ejecutar | Captura real |
| VM-02 | Registrar y consultar un cliente | Por ejecutar | Captura real |
| VM-03 | Modificar un cliente | Por ejecutar | Captura real |
| VM-04 | Registrar y consultar un servicio con precio y duración | Por ejecutar | Captura real |
| VM-05 | Crear una reserva con cliente, servicio, fecha y hora | Por ejecutar | Captura real |
| VM-06 | Consultar una reserva | Por ejecutar | Captura real |
| VM-07 | Cancelar una reserva | Por ejecutar | Captura real |
| VM-08 | Enviar JSON malformado a un endpoint y comprobar HTTP 400 con JSON | Por ejecutar en la verificación final | Captura real de consola/cliente HTTP |

No marcar las pruebas como aprobadas hasta ejecutarlas en la versión integrada. Las capturas deben ser auténticas, sin reconstrucciones.

## 4. Gestión del tablero

El tablero mostrado por el equipo presenta las columnas Pendiente, Seleccionado, En progreso, En revisión y Hecho. Esta captura evidencia las columnas y las tarjetas visibles, pero no confirma automáticamente que las tareas estén asignadas correctamente ni que su criterio de aceptación se haya completado.

Antes de entregar:
- Confirmar que cada actividad está asignada a la persona que realmente la ejecuta.
- Revisar las tareas #8 «Revisar cambios mediante Pull Request», #9 «Validar y liberar Agenda Clara V1», #10 «Completar trazabilidad de requisitos» y #11 «Actualizar informe final y PDF».
- Mover una tarea a «Hecho» únicamente cuando se haya completado y exista evidencia.
- Guardar una captura legible del tablero y otra del detalle de responsables, cuando corresponda.

Tablero: https://github.com/users/carlosu182/projects/1

## 5. Revisión por pares

La tarea #8 describe como criterio de cierre una revisión auténtica por otro integrante. Los registros consultados de las PR #15, #16 y #17 no muestran revisiones formales, y la tarea #8 fue cerrada sin comentarios.

Por tanto, la revisión por pares permanece pendiente de acreditar. Un integrante que no sea autor de los cambios debe revisar una PR apropiada, registrar observaciones reales y emitir la aprobación si corresponde. No se debe inventar una revisión ni cerrar esta actividad hasta que el registro exista.

## 6. Conflicto Git

El documento `docs/resolucion-conflictos.md` cita commits históricos cuya procedencia no quedó verificada en las ramas revisadas. Antes de la entrega:
- Comprobarlos en el repositorio de origen; o reproducir un conflicto real entre ramas en este repositorio.
- Conservar la salida del conflicto, la resolución y el commit final.
- Guardar una captura auténtica y documentar las ramas, archivo afectado y participantes reales.

## 7. Liberación de versión

No se confirmó una etiqueta `v1.0.0` ni una GitHub Release en la auditoría previa. Confirmar si la consigna exige ambas. Si corresponde, crearlas únicamente después de completar las pruebas, la revisión y la comprobación manual.

## 8. Criterio final

La entrega estará lista cuando las pruebas se hayan repetido, el tablero y los responsables estén verificados, exista revisión auténtica por pares, el conflicto esté respaldado, la liberación requerida pueda consultarse y las evidencias reales se hayan incorporado al PDF.
