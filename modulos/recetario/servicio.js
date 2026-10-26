(function () {
  window.recetarioServicio = {
    async listarTodos() {
      return Promise.resolve(
        window.recetarioMockData || {
          categoriasReceta: [],
          recetas: [],
          pasosReceta: [],
          ingredientesReceta: [],
          fotosReceta: []
        }
      );
    }
  };
})();
