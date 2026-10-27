(function(){
  const API_URL = "https://6ada65b37512f497b3ffea62.mockapi.io/api/v1/banners";

  async function listarCampanas(){
    const res = await fetch(API_URL);
    const datos = await res.json();
    return datos;
  }

  window.mercadeoServicio = { listarCampanas };
})();