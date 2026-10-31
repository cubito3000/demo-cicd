import { describe, it, expect } from "vitest";

const APP_URL = process.env.APP_URL ?? "http://localhost:8080";

// Solo lectura: no inserta mensajes, para no interferir con api.test.js,
// que corre en paralelo contra la misma base de datos.
describe("GET /api/estadisticas (integración)", () => {
  it("responde 200 con un total entero no negativo", async () => {
    const res = await fetch(`${APP_URL}/api/estadisticas`);
    expect(res.status).toBe(200);
    const cuerpo = await res.json();
    expect(Number.isInteger(cuerpo.total)).toBe(true);
    expect(cuerpo.total).toBeGreaterThanOrEqual(0);
  });
});
