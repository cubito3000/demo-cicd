import { describe, it, expect, vi } from "vitest";
import request from "supertest";
import { crearApp } from "../../api/app.js";

describe("GET /api/estadisticas", () => {
  it("devuelve el total de mensajes", async () => {
    const pool = { query: vi.fn().mockResolvedValue({ rows: [{ total: 7 }] }) };
    const res = await request(crearApp({ pool })).get("/api/estadisticas");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ total: 7 });
    expect(pool.query).toHaveBeenCalledWith(expect.stringContaining("COUNT(*)"));
  });

  it("devuelve 500 si la base de datos falla", async () => {
    const pool = { query: vi.fn().mockRejectedValue(new Error("db caída")) };
    const res = await request(crearApp({ pool })).get("/api/estadisticas");
    expect(res.status).toBe(500);
    expect(res.body).toEqual({ error: "Error interno." });
  });
});
