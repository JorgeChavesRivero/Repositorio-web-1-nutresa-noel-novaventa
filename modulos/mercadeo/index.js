(function () {
  async function iniciarMercadeo() {
    var estado = document.getElementById("mercadeo-estado");
    var catalogo = document.getElementById("catalogoRecompensas");
    if (!estado || !catalogo) return;
    try {
      const recompensas = await window.mercadeoServicio.listarTodos();
      let misPuntos = 1200;
      let html = `<div style="background:#E30613;color:white;padding:10px;border-radius:8px;"><h2>Mis Puntos Noel: ${misPuntos} pts</h2></div>`;
      recompensas.forEach(r => {
        let res = window.mercadeoServicio.canjearRecompensa(misPuntos, r.puntos, r.stock);
        html += `<div style="border:1px solid #ddd;padding:12px;margin:10px 0;border-radius:8px;display:flex;justify-content:space-between;">
          <div><b>${r.nombre}</b> - ${r.puntos} pts (Stock: ${r.stock})</div>
          <button onclick="alert('${res.mensaje}')" ${!res.exito ? 'disabled' : ''}>${res.exito ? 'Canjear Ahora' : res.mensaje}</button>
        </div>`;
      });
      estado.textContent = "HU-04 Lista";
      catalogo.innerHTML = html;
    } catch (e) {
      estado.textContent = "Error cargando";
    }
  }
  document.addEventListener("DOMContentLoaded", iniciarMercadeo);
})();