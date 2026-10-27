(function(){
  const campanias = [
    { id: 1, titulo: "Semana de la pasta italiana", imagen: "../../assets/img/pasta.jpg", descripcion: "Descubre nuestras pastas con 20% descuento" },
    { id: 2, titulo: "Festival del arroz", imagen: "../../assets/img/arroz.jpg", descripcion: "Las mejores recetas con arroz" },
    { id: 3, titulo: "Temporada de asados", imagen: "../../assets/img/asado.jpg", descripcion: "Todo para tu parrillada" },
    { id: 4, titulo: "Postres de verano", imagen: "../../assets/img/postres.jpg", descripcion: "Postres frescos y deliciosos" },
    { id: 5, titulo: "Cocina saludable", imagen: "../../assets/img/saludable.jpg", descripcion: "Recetas saludables para tu día a día" }
  ];

  function listarCampanas(){
    return Promise.resolve(campanias);
  }

  window.mercadeoServicio = { listarCampanas };

})();