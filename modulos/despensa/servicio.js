(function () {
  window.despensaServicio = {
    async listarTodos() {
      return Promise.resolve(
        window.despensaMockData || {
          despensas: [],
          itemsDespensa: [],
          sugerencias: [],
          historialConsumo: [],
          alertasVencimiento: []
        }
      );
    }
  };
})();
