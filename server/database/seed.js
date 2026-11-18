const db = require("./connection");

const serviciosIniciales = [
    {
        nombre: "Medicina general",
        descripcion: "Consulta médica general",
        precio: 50,
        duracion_minutos: 30
    },
    {
        nombre: "Odontologia",
        descripcion: "Atención odontológica",
        precio: 80,
        duracion_minutos: 45
    },
    {
        nombre: "Pediatria",
        descripcion: "Atención médica pediátrica",
        precio: 60,
        duracion_minutos: 30
    },
    {
        nombre: "Psicologia",
        descripcion: "Atención psicológica",
        precio: 70,
        duracion_minutos: 50
    }
];

const insertarServicio = db.prepare(`
    INSERT OR IGNORE INTO servicios
    (nombre, descripcion, precio, duracion_minutos)
    VALUES (@nombre, @descripcion, @precio, @duracion_minutos)
`);

const inicializarCatalogo = db.transaction(() => {
    for (const servicio of serviciosIniciales) {
        insertarServicio.run(servicio);
    }
});

try {
    inicializarCatalogo();

    const total = db.prepare(
        "SELECT COUNT(*) AS total FROM servicios"
    ).get();

    console.log(`Catalogo inicializado. Servicios disponibles: ${total.total}`);
} finally {
    db.close();
}
