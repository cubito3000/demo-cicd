async function cargarTotal() {
  const el = document.getElementById("total-mensajes");
  if (!el) return;
  try {
    const res = await fetch("/api/estadisticas");
    if (!res.ok) throw new Error("respuesta no válida");
    const { total } = await res.json();
    el.textContent = `Total de mensajes: ${total}`;
  } catch {
    el.textContent = "";
  }
}

cargarTotal();
document.getElementById("form-mensaje")?.addEventListener("submit", () => {
  setTimeout(cargarTotal, 800);
});
