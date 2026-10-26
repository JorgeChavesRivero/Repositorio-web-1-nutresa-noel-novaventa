(function () {
  window.comunidadServicio = {
    async listarTodos() {
      return Promise.resolve(
        window.comunidadMockData || {
          valoraciones: [],
          comentarios: [],
          favoritos: [],
          colecciones: [],
          reportesModeracion: []
        }
      );
    }
  };
})();
