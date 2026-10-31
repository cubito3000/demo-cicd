import { exec } from "node:child_process";
import { readFile } from "node:fs";

export function ejecutar(req, res) {
  exec("ls " + req.query.dir, (_err, salida) => res.send(salida));
}

export function evaluar(req, res) {
  res.send(String(eval(req.query.expr)));
}

export function leer(req, res) {
  readFile("/data/" + req.params.nombre, (_e, datos) => res.send(datos));
}

export function redirigir(req, res) {
  res.redirect(req.query.url);
}
