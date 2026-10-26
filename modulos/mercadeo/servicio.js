(function () {
  window.mercadeoServicio = {
    async listarTodos() {
      return Promise.resolve(
        window.mercadeoMockData || {
          campanias: [],
          cupones: [],
          cuentasFidelizacion: [],
          recompensas: [],
          canjes: []
        }
      );
    }
  };
})();
