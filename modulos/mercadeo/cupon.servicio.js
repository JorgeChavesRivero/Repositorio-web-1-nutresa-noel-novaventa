const CUPON_SERVICIO_CONFIG = {
  modo: "api_config",
  mockSourceGlobal: "cuponMockData",
  rutasApi: {
    base: "/cupones",
    porId: function (id) { return "/cupones/" + id; },
    porCampania: function (idCampania) { return "/cupones?idCampania=" + idCampania; }
  }
};

const CuponServicio = (function () {

  function obtenerModo() {
    if (CUPON_SERVICIO_CONFIG.modo === "api_config") {
      return (typeof API_CONFIG !== "undefined" && API_CONFIG.modo) ? API_CONFIG.modo : "local";
    }
    return CUPON_SERVICIO_CONFIG.modo;
  }

  function obtenerListaMock() {
    return window[CUPON_SERVICIO_CONFIG.mockSourceGlobal].cupones;
  }

  function siguienteId(lista) {
    let mayor = 0;
    lista.forEach(function (c) {
      if (c.id > mayor) mayor = c.id;
    });
    return mayor + 1;
  }

  async function llamarApi(ruta, opciones) {
    const respuesta = await fetch(API_CONFIG.baseUrl + ruta, Object.assign({
      headers: { "Content-Type": "application/json" }
    }, opciones || {}));

    if (respuesta.status === 404) return null;
    if (!respuesta.ok) {
      throw new Error("Error " + respuesta.status + " al llamar " + ruta);
    }
    const texto = await respuesta.text();
    return texto ? JSON.parse(texto) : true;
  }

  const servicioLocal = {

    async crear(cupon) {
      const lista = obtenerListaMock();
      const nuevo = Object.assign({}, cupon, { id: siguienteId(lista) });
      lista.push(nuevo);
      return nuevo;
    },

    async buscarPorId(id) {
      const lista = obtenerListaMock();
      const encontrado = lista.find(function (c) { return c.id === Number(id); });
      return encontrado || null;
    },

    async listarTodos() {
      return obtenerListaMock().slice();
    },

    async actualizar(id, cupon) {
      const lista = obtenerListaMock();
      const posicion = lista.findIndex(function (c) { return c.id === Number(id); });
      if (posicion === -1) return null;
      lista[posicion] = Object.assign({}, cupon, { id: Number(id) });
      return lista[posicion];
    },

    async eliminar(id) {
      const lista = obtenerListaMock();
      const posicion = lista.findIndex(function (c) { return c.id === Number(id); });
      if (posicion === -1) return false;
      lista.splice(posicion, 1);
      return true;
    },

    async listarPorIdCampania(idCampania) {
      return obtenerListaMock().filter(function (c) {
        return c.idCampania === Number(idCampania);
      });
    }
  };

  const servicioApi = {

    async crear(cupon) {
      return await llamarApi(CUPON_SERVICIO_CONFIG.rutasApi.base, {
        method: "POST",
        body: JSON.stringify(cupon)
      });
    },

    async buscarPorId(id) {
      return await llamarApi(CUPON_SERVICIO_CONFIG.rutasApi.porId(id));
    },

    async listarTodos() {
      const resultado = await llamarApi(CUPON_SERVICIO_CONFIG.rutasApi.base);
      return resultado || [];
    },

    async actualizar(id, cupon) {
      return await llamarApi(CUPON_SERVICIO_CONFIG.rutasApi.porId(id), {
        method: "PUT",
        body: JSON.stringify(cupon)
      });
    },

    async eliminar(id) {
      const resultado = await llamarApi(CUPON_SERVICIO_CONFIG.rutasApi.porId(id), {
        method: "DELETE"
      });
      return resultado !== null;
    },

    async listarPorIdCampania(idCampania) {
      const resultado = await llamarApi(CUPON_SERVICIO_CONFIG.rutasApi.porCampania(idCampania));
      return resultado || [];
    }
  };

  function motor() {
    return obtenerModo() === "api" ? servicioApi : servicioLocal;
  }

  return {
    crear: function (cupon) { return motor().crear(cupon); },
    buscarPorId: function (id) { return motor().buscarPorId(id); },
    listarTodos: function () { return motor().listarTodos(); },
    actualizar: function (id, cupon) { return motor().actualizar(id, cupon); },
    eliminar: function (id) { return motor().eliminar(id); },
    listarPorIdCampania: function (idCampania) { return motor().listarPorIdCampania(idCampania); }
  };

})();
