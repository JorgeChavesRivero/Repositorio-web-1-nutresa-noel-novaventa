(function () {
  async function iniciarMercadeo() {
    var estado = document.getElementById("mercadeo-estado");
    var cuponContenedor = document.getElementById("mercadeo-cupon-contenedor");
    if (!estado) {
      return;
    }
    try {
      await window.mercadeoServicio.listarTodos();
      estado.textContent = "Estructura base del módulo mercadeo cargada.";
      if (cuponContenedor && typeof window.mercadeoServicio.obtenerCuponActivo === "function") {
        var cupon = await window.mercadeoServicio.obtenerCuponActivo();
        if (cupon) {
          cuponContenedor.innerHTML = `
            <article class="mercadeo-cupon-card">
              <header class="mercadeo-cupon-header">
              <img src="https://img.icons8.com/?size=100&id=ltOiHQjpa582&format=png&color=000000" alt="cupon imagen">
                <h3 class="mercadeo-cupon-titulo">Cupón: ${cupon.codigo}</h3>
                <span class="mercadeo-cupon-badge" role="status">${cupon.estado}</span>
              </header>
              <div class="mercadeo-cupon-body">
                <p class="mercadeo-cupon-descripcion">${cupon.descripcion}</p>
              </div>
            </article>
          `;
        } else {
          cuponContenedor.innerHTML = `<p class="mercadeo-texto-vacio">No hay ningún cupón activo en este momento.</p>`;
        }
      }
    } catch (error) {
      estado.setAttribute("role", "alert");
      estado.textContent = "No fue posible cargar el cupón activo de mercadeo.";
      console.error(error);
    }
  }

  document.addEventListener("DOMContentLoaded", iniciarMercadeo);
})();
