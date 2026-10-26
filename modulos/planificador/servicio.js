(function () {
  window.planificadorServicio = {
    async listarTodos() {
      return Promise.resolve(
        window.planificadorMockData || {
          planesSemanales: [],
          comidasPlanificadas: [],
          listasMercado: [],
          itemsListaMercado: [],
          recordatoriosCompra: []
        }
      );
    }
  };
})();
