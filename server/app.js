const express = require("express");
const path = require("node:path");
const db = require("./database/connection");

const clientesRoutes = require("./routes/clientes");
const serviciosRoutes = require("./routes/servicios");
const reservasRoutes = require("./routes/reservas");

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Directorios de las interfaces web.
const angularDistPath = path.join(
    __dirname,
    "..",
    "angular-app",
    "dist",
    "angular-app",
    "browser"
);

const legacyPath = path.join(__dirname, "..", "src");

app.disable("x-powered-by");
app.use(express.json({ limit: "100kb" }));

// Manejo de solicitudes JSON malformadas.
app.use((error, req, res, next) => {
    const esJsonInvalido =
        error instanceof SyntaxError &&
        error.status === 400 &&
        Object.prototype.hasOwnProperty.call(error, "body");

    if (esJsonInvalido) {
        return res.status(400).json({
            error: "El cuerpo de la solicitud contiene JSON inv\u00e1lido"
        });
    }

    return next(error);
});

// Rutas de la API.
app.use("/api/clientes", clientesRoutes);
app.use("/api/servicios", serviciosRoutes);
app.use("/api/reservas", reservasRoutes);

// VerificaciÃ³n de API y base de datos.
app.get("/api/health", (req, res) => {
    try {
        const resultado = db.prepare("SELECT 1 AS operativo").get();

        res.status(200).json({
            estado: "correcto",
            mensaje: "API y base de datos operativas",
            baseDatos: resultado.operativo === 1
                ? "conectada"
                : "desconocida"
        });
    } catch (error) {
        console.error("Error al verificar la base de datos:", error);

        res.status(503).json({
            estado: "error",
            mensaje: "La base de datos no est\u00e1 disponible"
        });
    }
});

// Conserva la interfaz anterior.
app.use("/legacy", express.static(legacyPath));

// Archivos de Angular.
app.use(express.static(angularDistPath));

// Respuesta para rutas API inexistentes.
app.use("/api", (req, res) => {
    res.status(404).json({
        error: "Ruta API no encontrada"
    });
});

// Fallback de Angular: permite acceder directamente a /citas.
app.use((req, res, next) => {
    if (req.method !== "GET") {
        return next();
    }

    res.sendFile(
        path.join(angularDistPath, "index.html"),
        (error) => {
            if (error) {
                next(error);
            }
        }
    );
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor disponible en http://localhost:${PORT}`);
        console.log(`Aplicaci\u00f3n Angular: http://localhost:${PORT}/citas`);
        console.log(`API: http://localhost:${PORT}/api/health`);
    });
}

module.exports = app;
