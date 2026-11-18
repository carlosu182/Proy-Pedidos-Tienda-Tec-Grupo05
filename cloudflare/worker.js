
const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });

const error = (message, status = 400) =>
  json({ error: message }, status);

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Valida fechas y horas utilizando la zona horaria de Perú (UTC-5).
function isValidDateTime(value) {
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value)) {
    return false;
  }

  const [date, time] = value.split("T");
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);

  const calendarDate = new Date(Date.UTC(year, month - 1, day));

  if (
    calendarDate.getUTCFullYear() !== year ||
    calendarDate.getUTCMonth() !== month - 1 ||
    calendarDate.getUTCDate() !== day ||
    hour > 23 ||
    minute > 59
  ) {
    return false;
  }

  const peruDateTime = new Date(`${value}:00-05:00`);

  return (
    !Number.isNaN(peruDateTime.getTime()) &&
    peruDateTime.getTime() > Date.now()
  );
}

async function getServicios(env) {
  const result = await env.DB.prepare(`
    SELECT id, nombre, descripcion, precio,
           duracion_minutos, activo
    FROM servicios
    WHERE activo = 1
    ORDER BY id ASC
  `).all();

  return json(result.results);
}

async function createCliente(request, env) {
  let body;

  try {
    body = await request.json();
  } catch {
    return error("El cuerpo de la solicitud no contiene JSON válido.");
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return error("Los datos del cliente no son válidos.");
  }

  const nombre = String(body.nombre || "").trim();
  const documento = String(body.documento || "").trim();
  const correo = String(body.correo || "").trim();

  if (nombre.length < 3) {
    return error("El nombre debe tener al menos 3 caracteres.");
  }

  if (!/^\d{8}$/.test(documento)) {
    return error("El documento debe contener 8 dígitos.");
  }

  if (!isValidEmail(correo)) {
    return error("El correo electrónico no es válido.");
  }

  const existing = await env.DB.prepare(
    "SELECT id FROM clientes WHERE documento = ?"
  ).bind(documento).first();

  if (existing) {
    return error("El documento ya está registrado.", 409);
  }

  try {
    const result = await env.DB.prepare(`
      INSERT INTO clientes (nombre, documento, correo)
      VALUES (?, ?, ?)
    `).bind(nombre, documento, correo).run();

    const cliente = await env.DB.prepare(`
      SELECT id, nombre, documento, correo
      FROM clientes WHERE id = ?
    `).bind(result.meta.last_row_id).first();

    return json(cliente, 201);
  } catch (err) {
    if (String(err.message).toLowerCase().includes("unique")) {
      return error("El documento ya está registrado.", 409);
    }

    throw err;
  }
}

async function createReserva(request, env) {
  let body;

  try {
    body = await request.json();
  } catch {
    return error("El cuerpo de la solicitud no contiene JSON válido.");
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return error("Los datos de la reserva no son válidos.");
  }

  const clienteId = Number(body.cliente_id);
  const servicioId = Number(body.servicio_id);
  const fechaHora = String(body.fecha_hora || "").trim();
  const observaciones = String(body.observaciones || "").trim();

  if (!Number.isInteger(clienteId) || clienteId <= 0) {
    return error("El cliente seleccionado no es válido.");
  }

  if (!Number.isInteger(servicioId) || servicioId <= 0) {
    return error("El servicio seleccionado no es válido.");
  }

  if (!isValidDateTime(fechaHora)) {
    return error("La fecha y hora deben ser válidas y futuras.");
  }

  const cliente = await env.DB.prepare(
    "SELECT id FROM clientes WHERE id = ?"
  ).bind(clienteId).first();

  if (!cliente) {
    return error("El cliente no existe.", 404);
  }

  const servicio = await env.DB.prepare(
    "SELECT id FROM servicios WHERE id = ? AND activo = 1"
  ).bind(servicioId).first();

  if (!servicio) {
    return error("El servicio no existe o está inactivo.", 404);
  }

  const codigo = `RES-${Date.now()}-${crypto.randomUUID()
    .slice(0, 6).toUpperCase()}`;

  const result = await env.DB.prepare(`
    INSERT INTO reservas (
      codigo, cliente_id, servicio_id,
      fecha_hora, estado, observaciones
    )
    VALUES (?, ?, ?, ?, 'RESERVADA', ?)
  `).bind(
    codigo,
    clienteId,
    servicioId,
    fechaHora,
    observaciones
  ).run();

  const reserva = await env.DB.prepare(`
    SELECT
      r.id,
      r.codigo,
      r.cliente_id,
      r.servicio_id,
      r.fecha_hora,
      r.estado,
      r.observaciones,
      c.nombre AS cliente,
      s.nombre AS servicio
    FROM reservas r
    INNER JOIN clientes c ON c.id = r.cliente_id
    INNER JOIN servicios s ON s.id = r.servicio_id
    WHERE r.id = ?
  `).bind(result.meta.last_row_id).first();

  return json(reserva, 201);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    if (method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      });
    }

    try {
      if (path === "/api/health" && method === "GET") {
        await env.DB.prepare("SELECT 1").first();
        return json({
          status: "ok",
          database: "connected"
        });
      }

      if (path === "/api/servicios" && method === "GET") {
        return await getServicios(env);
      }

      if (path === "/api/clientes" && method === "POST") {
        return await createCliente(request, env);
      }

      if (path === "/api/reservas" && method === "POST") {
        return await createReserva(request, env);
      }

      return error("Endpoint no encontrado.", 404);
    } catch (err) {
      console.error("Worker error:", err);
      return error("Error interno del servidor.", 500);
    }
  }
};
