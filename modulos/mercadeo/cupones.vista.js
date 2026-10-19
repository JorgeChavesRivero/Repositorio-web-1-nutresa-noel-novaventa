(function () {
  const contenedor = document.querySelector("main") || document.body;

  const seccion = document.createElement("section");
  seccion.className = "cupones-card";
  seccion.innerHTML = `
    <h2>Cupones</h2>

    <form id="cupon-form" class="cupones-form">
      <input type="hidden" id="cupon-id">
      <label>Código
        <input id="cupon-codigo" required>
      </label>
      <label>Descuento (%)
        <input id="cupon-descuento" type="number" min="1" max="100" required>
      </label>
      <label>Fecha inicio
        <input id="cupon-inicio" type="date" required>
      </label>
      <label>Fecha fin
        <input id="cupon-fin" type="date" required>
      </label>
      <label>ID campaña
        <input id="cupon-campania" type="number" min="1" required>
      </label>
      <div class="cupones-acciones">
        <button type="submit" id="cupon-guardar" class="btn-primario">Guardar cupón</button>
        <button type="button" id="cupon-cancelar" class="btn-secundario" hidden>Cancelar</button>
      </div>
    </form>

    <div class="cupones-filtro">
      <input id="filtro-campania" type="number" min="1" placeholder="Filtrar por ID de campaña">
      <button type="button" id="filtro-aplicar" class="btn-secundario">Filtrar</button>
      <button type="button" id="filtro-limpiar" class="btn-secundario">Ver todos</button>
    </div>

    <table class="cupones-tabla">
      <thead>
        <tr>
          <th>ID</th>
          <th>Código</th>
          <th>Descuento</th>
          <th>Inicio</th>
          <th>Fin</th>
          <th>Campaña</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody id="cupones-cuerpo"></tbody>
    </table>
    <p id="cupones-vacio" class="cupones-vacio" hidden>No hay cupones para mostrar.</p>
  `;
  contenedor.appendChild(seccion);

  const formulario = seccion.querySelector("#cupon-form");
  const campoId = seccion.querySelector("#cupon-id");
  const campoCodigo = seccion.querySelector("#cupon-codigo");
  const campoDescuento = seccion.querySelector("#cupon-descuento");
  const campoInicio = seccion.querySelector("#cupon-inicio");
  const campoFin = seccion.querySelector("#cupon-fin");
  const campoCampania = seccion.querySelector("#cupon-campania");
  const botonGuardar = seccion.querySelector("#cupon-guardar");
  const botonCancelar = seccion.querySelector("#cupon-cancelar");
  const filtroCampania = seccion.querySelector("#filtro-campania");
  const cuerpo = seccion.querySelector("#cupones-cuerpo");
  const mensajeVacio = seccion.querySelector("#cupones-vacio");

  function crearBoton(texto, clase, accion) {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = texto;
    boton.className = clase;
    boton.addEventListener("click", accion);
    return boton;
  }

  function limpiarFormulario() {
    formulario.reset();
    campoId.value = "";
    botonGuardar.textContent = "Guardar cupón";
    botonCancelar.hidden = true;
  }

  function cargarEnFormulario(cupon) {
    campoId.value = cupon.id;
    campoCodigo.value = cupon.codigo;
    campoDescuento.value = cupon.descuento;
    campoInicio.value = cupon.fechaInicio;
    campoFin.value = cupon.fechaFin;
    campoCampania.value = cupon.idCampania;
    botonGuardar.textContent = "Actualizar cupón";
    botonCancelar.hidden = false;
    formulario.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function pintarTabla(lista) {
    cuerpo.innerHTML = "";
    mensajeVacio.hidden = lista.length > 0;

    lista.forEach(function (cupon) {
      const fila = document.createElement("tr");

      [
        cupon.id,
        cupon.codigo,
        cupon.descuento + "%",
        cupon.fechaInicio,
        cupon.fechaFin,
        cupon.idCampania
      ].forEach(function (valor) {
        const celda = document.createElement("td");
        celda.textContent = valor;
        fila.appendChild(celda);
      });

      const celdaAcciones = document.createElement("td");
      celdaAcciones.className = "cupones-celda-acciones";

      celdaAcciones.appendChild(
        crearBoton("Editar", "btn-secundario", function () {
          cargarEnFormulario(cupon);
        })
      );

      celdaAcciones.appendChild(
        crearBoton("Eliminar", "btn-peligro", async function () {
          if (!confirm("¿Eliminar el cupón " + cupon.codigo + "?")) return;
          await CuponServicio.eliminar(cupon.id);
          await refrescar();
        })
      );

      fila.appendChild(celdaAcciones);
      cuerpo.appendChild(fila);
    });
  }

  async function refrescar() {
    const idCampania = filtroCampania.value.trim();
    const lista = idCampania
      ? await CuponServicio.listarPorIdCampania(idCampania)
      : await CuponServicio.listarTodos();
    pintarTabla(lista);
  }

  formulario.addEventListener("submit", async function (evento) {
    evento.preventDefault();

    const cupon = {
      codigo: campoCodigo.value.trim(),
      descuento: Number(campoDescuento.value),
      fechaInicio: campoInicio.value,
      fechaFin: campoFin.value,
      idCampania: Number(campoCampania.value)
    };

    if (campoId.value) {
      await CuponServicio.actualizar(campoId.value, cupon);
    } else {
      await CuponServicio.crear(cupon);
    }

    limpiarFormulario();
    await refrescar();
  });

  botonCancelar.addEventListener("click", limpiarFormulario);

  seccion.querySelector("#filtro-aplicar").addEventListener("click", refrescar);

  seccion.querySelector("#filtro-limpiar").addEventListener("click", function () {
    filtroCampania.value = "";
    refrescar();
  });

  refrescar();
})();
