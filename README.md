# Agenda Clara — Gestión de clientes, servicios y reservas

Sistema web de primera versión para una empresa de servicios que necesita centralizar las reservas que actualmente administra por llamadas, WhatsApp y hojas de cálculo.

## Alcance de la V1

- **Clientes:** registrar, consultar, buscar y modificar datos.
- **Servicios:** registrar y consultar servicios, definir precio y duración, editar y activar/desactivar servicios.
- **Reservas:** registrar una reserva asociando cliente y servicio, indicar fecha y hora, consultar/buscar y cancelar.
- **Persistencia:** SQLite con claves foráneas e índices.
- **API REST:** endpoints separados por módulo.
- **Pruebas automatizadas:** `node --test`.

Quedan para versiones posteriores: recordatorios automáticos, reportes, dashboard de indicadores, pagos en línea e historial ampliado de clientes.

## Requisitos

- Node.js 20 o una versión compatible con las dependencias del proyecto.
- npm.

## Instalación y ejecución

```bash
npm install
npm test
npm start
```

Abrir `http://localhost:3000`. Estado de la API: `http://localhost:3000/api/health`.

> La base de datos por defecto se crea en `server/database/data/agenda-clara.db`. Para pruebas o un archivo alternativo, definir `DB_PATH` antes de iniciar Node.

## API principal

| Método | Ruta | Uso |
|---|---|---|
| GET / POST | `/api/clientes` | Consultar/buscar y registrar clientes |
| GET | `/api/clientes/:id` | Consultar un cliente |
| PUT | `/api/clientes/:id` | Modificar un cliente |
| GET / POST | `/api/servicios` | Consultar/buscar y registrar servicios |
| GET / PUT | `/api/servicios/:id` | Consultar y modificar servicios |
| PATCH | `/api/servicios/:id/estado` | Activar/desactivar un servicio |
| GET / POST | `/api/reservas` | Consultar/buscar y registrar reservas |
| GET | `/api/reservas/:id` | Consultar una reserva |
| PATCH | `/api/reservas/:id/cancelar` | Cancelar una reserva |
| GET | `/api/health` | Verificar API y base de datos |

## Organización colaborativa

La estrategia propuesta está documentada en `docs/estrategia-ramas.md`. El CSV de actividades de apoyo está en `docs/tablero-actividades.csv`. Requisitos y trazabilidad: `docs/requerimientos-trazabilidad.md` y `docs/matriz-trazabilidad.md`.

El tablero real debe mantenerse sincronizado con las actividades, responsables y estados. La documentación no sustituye la evidencia de revisión por pares, de un conflicto real de Git ni de la liberación final.

## Integrantes actuales

- Carlos Fernando Rivera Hipolito — U23216154
- Bruno Santiago Reyes Vicente — U19221035

## Contribuciones identificables en GitHub

- **Bruno Santiago Reyes Vicente — U19221035:** autor de la [PR #18](https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/pull/18), “docs: completar evidencias y trazabilidad del cierre de Agenda Clara V1”, en la rama `docs/cierre-final-agenda-clara-v1`. La PR está abierta y no tiene revisiones formales registradas en la consulta actual.
- **Carlos Fernando Rivera Hipolito — U23216154:** existe el commit [b6179e7](https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/commit/b6179e74f56f43ff73a88d1bd7c58e7cf2f9d5cd), “docs: agregar evidencias de participacion de carlos”, incorporado mediante el merge [8af4fa7](https://github.com/carlosu182/Proy-Pedidos-Tienda-Tec-Grupo05/commit/8af4fa713878cd2913699931712fe90c2edf3155).

El historial también contiene commits funcionales y de estilos, pero no se asignan a una persona en esta sección sin contrastar el autor individual del commit. La autoría de commits no demuestra por sí sola que la persona ejecutara pruebas manuales ni que revisara/aprobara una PR.

La asignación final de RF01–RF10 debe contrastarse con el autor de cada commit que modificó el código correspondiente y con el tablero real. No se atribuyen aprobaciones o revisiones que no aparezcan registradas.
