# Gestión de conflictos — Agenda Clara

## 1. Objetivo

Documentar los conflictos de Git identificados durante el desarrollo y la preparación de la entrega, indicando su alcance y las limitaciones de la evidencia disponible.

## 2. Antecedentes de conflictos en el repositorio

El historial disponible incluye antecedentes de resolución de conflictos relacionados con el archivo `README.md`, entre ellos:

- `5710faa`: `merge: resolver conflictos entre develop y main` — verificar el mensaje y el contexto exacto del commit antes de atribuirle un conflicto específico.
- `da94043`: `merge: resolver conflicto en README al integrar feature/pedidos`.
- `b829d67`: `docs: agregar conflicto 3 resuelto al integrar develop en main`.

Estos antecedentes pertenecen al historial Git disponible. Para describir con precisión cada conflicto, debe consultarse el contenido del commit y sus padres.

## 3. Ejercicio controlado documentado

Una versión documental presentada en la rama de revisión `docs/evidencias-conflicto` describe un ejercicio controlado en `docs/prueba-conflicto-git.txt`.

Según ese documento, las ramas `evidencia/conflicto-a` y `evidencia/conflicto-b` modificaron la misma línea y requirieron una resolución manual.

La documentación de esa rama identifica los siguientes commits:

- Preparación: `82f49bd`.
- Primera variante: `685d535`.
- Segunda variante: `2e25c5f`.
- Resolución: `75f39c3`.
- Documentación: `283520c`.

**Limitación de verificación:** estos cinco identificadores no aparecen en el historial de las ramas disponibles en el clon revisado. Por tanto, se conservan como referencias declaradas por la documentación de revisión, pero no se consideran verificados en el historial actual.

## 4. Alcance de la evidencia

Los antecedentes descritos no deben presentarse como conflictos del código funcional de clientes, servicios o reservas sin evidencia que lo demuestre.

Tampoco se atribuyen revisiones, aprobaciones o contribuciones a integrantes sin registros verificables.

## 5. Verificaciones pendientes

- Confirmar el repositorio de origen de los cinco commits del ejercicio controlado.
- Verificar los commits y sus relaciones de parentesco en el repositorio correspondiente.
- Incorporar enlaces verificables o capturas de la reproducción y resolución.
- Confirmar si el ejercicio controlado debe mantenerse como evidencia histórica o si se reproducirá en el repositorio actual.

## 6. Criterio de cierre

La documentación de conflictos se considerará suficientemente respaldada cuando las referencias puedan verificarse en el repositorio de origen y se identifique con claridad qué evidencia pertenece al repositorio actual y cuál corresponde a antecedentes históricos.
