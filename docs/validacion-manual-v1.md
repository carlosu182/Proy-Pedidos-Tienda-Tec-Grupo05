# Validación manual y cierre técnico — Agenda Clara V1

## 1. Propósito
Consolidar resultados técnicos informados, las pruebas manuales y los pendientes de evidencia. No se marcarán como aprobadas pruebas no ejecutadas o sin evidencia suficiente.

## 2. Validación automatizada
La transcripción de `npm test` compartida desde Windows registra:
- Tests reportados: 21
- Aprobados: 21
- Fallidos: 0
- Cancelados: 0
- Omitidos: 0
- Duración aproximada en esa ejecución: 543 ms.

Ver: [evidencias/pruebas-automatizadas.txt](evidencias/pruebas-automatizadas.txt) y [evidencias/ejecucion-npm-test.txt](evidencias/ejecucion-npm-test.txt). La transcripción es textual; no equivale a una captura de pantalla.

Comandos para repetir en el entorno final:
```powershell
npm ci
npm test
npm audit
```

## 3. Validación manual
El equipo comunicó haber probado los flujos básicos en la interfaz. En el documento previo se registraron:
1. Registro de clientes.
2. Registro de servicios.
3. Creación de reserva asociada con cliente y servicio.
4. Cancelación de reservas.

La evidencia individual por flujo debe ser la captura auténtica que el equipo ya tomó e incluyó en el informe. Si esas capturas no están guardadas en el repositorio, hay que agregarlas para que queden accesibles junto al código. No se declaran aquí rutas de imágenes que no hayan sido verificadas.

| ID | Verificación | Estado documental |
|---|---|---|
| VM-01 | API y base de datos en `/api/health` | Resultado comunicado; guardar captura en repo si la consigna la pide |
| VM-02 | Registrar y consultar clientes | Resultado comunicado; comprobar captura |
| VM-03 | Modificar cliente | Repetir/confirmar evidencia |
| VM-04 | Registrar y consultar servicio con precio y duración | Resultado comunicado; comprobar captura |
| VM-05 | Crear reserva con cliente, servicio, fecha y hora | Resultado comunicado; comprobar captura |
| VM-06 | Consultar reserva | Repetir/confirmar evidencia |
| VM-07 | Cancelar reserva | Resultado comunicado; comprobar captura |
| VM-08 | JSON malformado devuelve HTTP 400 en JSON | Existe prueba automatizada; conservar salida/captura si se exige |

## 4. Tablero colaborativo
Tablero: https://github.com/users/carlosu182/projects/1

Las columnas declaradas son Pendiente, Seleccionado, En progreso, En revisión y Hecho. Verificar que cada tarea esté en el estado real, con responsable correcto y criterio de aceptación completado. La tabla CSV es apoyo, no sustituye al proyecto publicado.

## 5. Revisión por pares

La PR #18 fue revisada y aprobada formalmente por Carlos Fernando Rivera Hipolito, quien dejó un comentario explícito de aprobación antes de integrar los cambios.

PR: https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/pull/18

La PR se integró en develop mediante el commit 083b616. El registro de aprobación acredita la revisión por pares y la integración de los cambios documentales.

## 6. Conflicto Git

El repositorio conserva ramas relacionadas con el ejercicio de conflicto, entre ellas `docs/conflicto-bruno` y `docs/conflicto-carlos`. El commit `4314e23` registra una resolución en `docs/prueba-conflicto-v1.txt`, cuyo contenido indica: “Estado: Validado por Carlos y Bruno”.

Estos registros respaldan la existencia de un ejercicio de resolución. Por sí solos, no demuestran completamente que ambos integrantes trabajaran simultáneamente ni sustituyen la evidencia de las ramas de origen y del proceso de resolución.

## 7. Versión estable

La versión `v1.0.0` está publicada en GitHub. La etiqueta `v1.0.0` apunta al commit `083b616`, que también corresponde a la integración verificada en `develop` y a la versión alineada en `main`.

Las pruebas automatizadas registradas indican 21 pruebas aprobadas y 0 fallidas. La verificación de las capturas individuales de las pruebas manuales permanece pendiente.

## 8. Criterio de cierre

La versión estable está publicada y la PR documental fue integrada. Para completar la evidencia de la entrega, queda comprobar el registro de revisión formal, verificar las capturas de las pruebas manuales y asegurar que la matriz de trazabilidad refleje las responsabilidades reales y la evidencia disponible del conflicto Git.
