document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("mercadeo-banners");
  const estado = document.getElementById("mercadeo-estado");

  try {
    estado.textContent = "Cargando campañas...";
    const campanias = await window.mercadeoServicio.listarCampanas();
    estado.textContent = "";
    contenedor.innerHTML = campanias.map(c => `
      <article class="mercadeo-banner-card">
        <figure>
          <img src="${c.imagen}" alt="${c.titulo}">
        </figure>
        <h3>${c.titulo}</h3>
        <p>${c.descripcion}</p>
      </article>
    `).join("");
  } catch (error) {
    estado.textContent = "Error al cargar las campañas";
  }
});
