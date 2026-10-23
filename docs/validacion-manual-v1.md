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
La PR #18 está abierta y apunta a `develop`. A la última comprobación no tenía revisiones formales registradas. La tarea solo quedará demostrada cuando el segundo integrante revise los archivos y registre su decisión desde su propia cuenta.

PR: https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/pull/18

## 6. Conflicto Git
La documentación cita antecedentes históricos y un ejercicio controlado de conflicto. No se debe afirmar que un conflicto entre los dos integrantes está acreditado hasta verificar los commits de origen o reproducir el conflicto en este repositorio conservando ramas, salida, resolución y commit. La documentación por sí sola no prueba trabajo simultáneo de ambos integrantes.

## 7. Versión estable
La consulta de GitHub no encontró una GitHub Release publicada. Confirmar la rama/tag solicitados por la consigna. La versión estable solo se declarará después de la revisión auténtica y de completar las verificaciones requeridas. No afirmar que `v1.0.0` ya existe hasta comprobarlo.

## 8. Criterio de cierre
La entrega puede declararse cerrada cuando la PR documental se haya revisado e integrado, los responsables reales estén consignados, el tablero y la matriz correspondan con GitHub, se tenga evidencia auténtica del conflicto y se confirme la liberación exigida.
