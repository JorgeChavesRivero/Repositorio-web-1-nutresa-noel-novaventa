window.mercadeoServicio = {
  listarTodos: async function() {
    return [
      { id: 1, nombre: "Galleta Noel x6 Festival", puntos: 500, stock: 20, tipo: "Noel" },
      { id: 2, nombre: "Descuento Novaventa $10.000", puntos: 1000, stock: 15, tipo: "Novaventa" },
      { id: 3, nombre: "Combo Ancheta Sazón Noel", puntos: 2000, stock: 5, tipo: "Premium" },
      { id: 4, nombre: "Salchichón Zenú + Noel", puntos: 800, stock: 10, tipo: "Noel" }
    ];
  },
  canjearRecompensa: function(puntosUsuario, puntosRequeridos, stock) {
    if (stock <= 0) {
      return { exito: false, mensaje: "Sin stock" };
    }
    if (puntosUsuario >= puntosRequeridos) {
      let restantes = puntosUsuario - puntosRequeridos;
      return { exito: true, mensaje: `¡Canje exitoso! Te quedan ${restantes} puntos` };
    } else {
      let faltan = puntosRequeridos - puntosUsuario;
      return { exito: false, mensaje: `Te faltan ${faltan} puntos` };
    }
  }
};