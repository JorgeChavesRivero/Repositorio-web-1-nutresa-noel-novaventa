(function () {
  async function iniciarMercadeo() {
    const estado = document.getElementById("mercadeo-estado");
    if (!estado) return;

    try {
      await window.mercadeoServicio.listarTodos();
      estado.textContent = "Estructura base del módulo mercadeo cargada.";
    } catch (e) {
      estado.textContent = "Error al cargar módulo.";
    }

    const getVal = (id) => parseInt(document.getElementById(id).value);
    const tarjeta = document.getElementById('tarjetaCuenta');

    async function renderTabla() {
      const cuentas = await window.mercadeoServicio.listarTodos();
      document.getElementById('tablaCuentasBody').innerHTML = cuentas.map(c =>
        `<tr><td>${c.id}</td><td>${c.usuarioId}</td><td>${c.puntos}</td><td><b>${c.nivel}</b></td></tr>`
      ).join('');
    }

    function mostrarTarjeta(cuenta) {
      if (!cuenta) {
        tarjeta.style.display = 'none';
        return alert('Cuenta no encontrada');
      }
      document.getElementById('lblUsuario').textContent = cuenta.usuarioId;
      document.getElementById('lblPuntos').textContent = cuenta.puntos;
      document.getElementById('lblNivel').textContent = cuenta.nivel;
      tarjeta.style.display = 'block';
    }

    document.getElementById('btnConsultar')?.addEventListener('click', async () => {
      const id = getVal('inputUsuarioId');
      if (!id) return alert('Ingresa ID válido');
      mostrarTarjeta(await window.mercadeoServicio.consultarCuentaPorUsuario(id));
    });

    document.getElementById('btnAcumular')?.addEventListener('click', async () => {
      const id = getVal('inputUsuarioId'), pts = getVal('inputPuntos');
      if (!id || isNaN(pts) || pts <= 0) return alert('Ingresa datos válidos');

      const res = await window.mercadeoServicio.acumularPuntos(id, pts);
      mostrarTarjeta(res);
      renderTabla();
    });

    document.getElementById('btnRedimir')?.addEventListener('click', async () => {
      const id = getVal('inputUsuarioId'), pts = getVal('inputPuntos');
      if (!id || isNaN(pts) || pts <= 0) return alert('Ingresa datos válidos');

      const res = await window.mercadeoServicio.redimirPuntos(id, pts);
      if (res.exito) {
        mostrarTarjeta(res.cuenta);
        renderTabla();
      } else {
        alert(res.mensaje);
      }
    });

    renderTabla();
  }

  document.addEventListener("DOMContentLoaded", iniciarMercadeo);
})();