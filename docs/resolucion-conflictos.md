# Gestión de conflictos Git — Agenda Clara V1

## Estado de la evidencia

La documentación previa menciona antecedentes de conflictos de `README.md` y un ejercicio controlado en `docs/prueba-conflicto-git.txt`. Los siguientes identificadores aparecen en los documentos, pero no se verificaron en las ramas consultadas del repositorio actual:

- Preparación: `82f49bd`
- Primera variante: `685d535`
- Segunda variante: `2e25c5f`
- Resolución: `75f39c3`
- Documentación: `283520c`

Por tanto, no se afirma que estos cinco commits estén presentes en el historial actual ni que el ejercicio esté acreditado definitivamente.

## Procedimiento para cerrar el requisito

Opción A — verificar evidencia histórica:
1. Localizar el repositorio donde se generaron los commits.
2. Abrir cada commit y comprobar autor, fecha, archivo modificado y relación con el conflicto.
3. Añadir enlaces verificables al informe.

Opción B — reproducir un conflicto real en el repositorio actual:
1. Crear una rama base de evidencia a partir de `develop`.
2. Crear dos ramas derivadas de esa base.
3. Modificar la misma línea del mismo archivo de evidencia con textos incompatibles en cada rama y confirmar ambos cambios.
4. Intentar integrar una rama en la otra y conservar la salida real de Git con el conflicto.
5. Resolver manualmente el archivo, retirar los marcadores `<<<<<<<`, `=======`, `>>>>>>>`, comprobar el contenido y crear el commit de resolución.
6. Verificar el historial y guardar capturas de la creación del conflicto y de la resolución.
7. Registrar las ramas, el archivo afectado, el criterio de resolución, el commit final y quién participó realmente.

No crear capturas simuladas ni declarar la revisión de otra persona si esa participación no ocurrió.
