(function () {
  window.nutricionServicio = {
    async listarTodos() {
      return Promise.resolve(
        window.nutricionMockData || {
          informacionNutricional: [],
          perfilesAlimentarios: [],
          alergenos: [],
          restriccionesPerfil: [],
          objetivosNutricionales: []
        }
      );
    }
  };
})();
