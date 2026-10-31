import { describe, it, expect } from "vitest";

const APP_URL = process.env.APP_URL ?? "http://localhost:8080";

describe("GET /api/estadisticas (integración)", () => {
  it("coincide con los mensajes insertados", async () => {
    const leer = async () => (await fetch(`${APP_URL}/api/estadisticas`)).json();
    const antes = await leer();
    expect(typeof antes.total).toBe("number");

    const post = await fetch(`${APP_URL}/api/mensajes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre: "CI", mensaje: "prueba de estadísticas" }),
    });
    expect(post.status).toBe(201);

    const despues = await leer();
    expect(despues.total).toBe(antes.total + 1);
  });
});
