# Gestión de conflictos — Agenda Clara

## 1. Objetivo
Registrar de forma reproducible el conflicto, su causa y resolución, separando evidencias del repositorio actual de antecedentes históricos.

## 2. Antecedentes históricos
La documentación previa menciona commits relacionados con conflictos de README (`5710faa`, `da94043`, `b829d67`) y un ejercicio controlado con los identificadores `82f49bd`, `685d535`, `2e25c5f`, `75f39c3`, `283520c`.

Estos últimos se han descrito como un ejercicio sobre cambios incompatibles en una misma línea. No se deben considerar evidencia de participación de los dos integrantes de Agenda Clara hasta verificar repositorio de origen, autoría, fechas, padres y contenido.

## 3. Evidencia requerida para el cierre académico
Para demostrar un conflicto causado por trabajo simultáneo, el equipo debe conservar:
1. Dos ramas con cambios incompatibles en la misma región de un archivo.
2. Identificación de las ramas y del archivo conflictivo.
3. Salida real de Git donde aparezca `CONFLICT (content)`.
4. Resolución manual, validación del archivo resultante y commit de resolución.
5. Registro de qué integrante hizo cada cambio, verificable en GitHub.
6. Captura auténtica o enlaces a los commits y PR.

## 4. Limitación actual
La documentación histórica no demuestra por sí sola que ambos integrantes hayan intervenido simultáneamente en el conflicto del repositorio actual. No se inventa un log de terminal ni se atribuyen commits a una persona no verificada.

## 5. Pasos recomendados
Coordinar una modificación inocua del mismo archivo en dos ramas separadas con ambos integrantes, intentar integrar una rama en la otra, capturar el conflicto real, resolverlo manteniendo el contenido válido y registrar el commit final. No realizar este ejercicio sobre archivos de datos o código sensible para la ejecución.

## 6. Criterio de cierre
Cerrar el requisito cuando los links de los dos cambios, la salida del conflicto y el commit de resolución estén disponibles y se puedan atribuir realmente a los dos integrantes del equipo.

## 7. Evidencia verificada en el repositorio

Archivo en conflicto: `docs/prueba-conflicto-v1.txt`.

- Rama base: `docs/conflicto-base`, commit `fd383e7`.
- Variante de Bruno: rama `docs/conflicto-bruno`, commit `b9997c1`. El archivo indica `Estado: Validado por Bruno`.
- Variante de Carlos: rama `docs/conflicto-carlos`, commit `0fe5753`. El archivo indica `Estado: Validado por Carlos`.
- Resolución: commit de fusión `4314e23`, realizado por Carlos Rivera. El archivo resultante indica `Estado: Validado por Carlos y Bruno`.

Los padres del commit de fusión y el contenido de las tres versiones permiten verificar las variantes y el resultado integrado. No se conserva en esta evidencia la salida de terminal `CONFLICT (content)` del momento de la operación; por tanto, no se reproduce ni se afirma disponer de esa captura histórica.