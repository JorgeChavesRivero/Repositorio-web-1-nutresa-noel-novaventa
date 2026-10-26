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
    },
    async obtenerCuponActivo() {
      try {
        return await new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              codigo: "SAZON15",
              descripcion: "15% en productos Noel",
              estado: "Válido"
            });
          }, 200);
        });
      } catch (error) {
        console.error("Error al obtener el cupón activo:", error);
        throw error;
      }
    }
  };
})();
