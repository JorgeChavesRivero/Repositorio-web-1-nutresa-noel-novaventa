(function () {
  var recetarioMockData = {
    categoriasReceta: [
      { id: 1, nombre: "Desayunos", descripcion: "Recetas para iniciar el dia.", activa: true, idUsuarioCreador: 1 },
      { id: 2, nombre: "Almuerzos", descripcion: "Recetas principales del dia.", activa: true, idUsuarioCreador: 4 },
      { id: 3, nombre: "Postres", descripcion: "Recetas dulces.", activa: true, idUsuarioCreador: 4 },
      { id: 4, nombre: "Snacks", descripcion: "Preparaciones rapidas.", activa: true, idUsuarioCreador: 10 }
    ],
    recetas: [
      { id: 1, titulo: "Arepa rellena con queso", descripcion: "Arepa dorada con relleno cremoso.", tiempoPreparacionMin: 20, porciones: 2, idCategoriaReceta: 1, idUsuarioAutor: 3 },
      { id: 2, titulo: "Pasta con salsa casera", descripcion: "Pasta corta con salsa de tomate natural.", tiempoPreparacionMin: 35, porciones: 4, idCategoriaReceta: 2, idUsuarioAutor: 6 },
      { id: 3, titulo: "Postre frio de cafe", descripcion: "Postre rapido a base de cafe.", tiempoPreparacionMin: 25, porciones: 6, idCategoriaReceta: 3, idUsuarioAutor: 8 },
      { id: 4, titulo: "Brownie con chocolate", descripcion: "Brownie humedo con cobertura.", tiempoPreparacionMin: 45, porciones: 8, idCategoriaReceta: 3, idUsuarioAutor: 9 },
      { id: 5, titulo: "Perro caliente casero", descripcion: "Perro con salchicha y toppings.", tiempoPreparacionMin: 30, porciones: 4, idCategoriaReceta: 2, idUsuarioAutor: 5 },
      { id: 6, titulo: "Cheesecake de galletas", descripcion: "Postre frio con base de galleta.", tiempoPreparacionMin: 40, porciones: 8, idCategoriaReceta: 3, idUsuarioAutor: 7 },
      { id: 7, titulo: "Ensalada fria de pasta", descripcion: "Ensalada fresca con pasta tornillo.", tiempoPreparacionMin: 22, porciones: 3, idCategoriaReceta: 2, idUsuarioAutor: 2 },
      { id: 8, titulo: "Frappe de cappuccino", descripcion: "Bebida helada con cappuccino.", tiempoPreparacionMin: 12, porciones: 2, idCategoriaReceta: 4, idUsuarioAutor: 8 },
      { id: 9, titulo: "Galletas rellenas de chocolate", descripcion: "Snack de galleta con relleno.", tiempoPreparacionMin: 28, porciones: 5, idCategoriaReceta: 4, idUsuarioAutor: 3 },
      { id: 10, titulo: "Perro especial ranchero", descripcion: "Version especial con salchicha premium.", tiempoPreparacionMin: 27, porciones: 4, idCategoriaReceta: 2, idUsuarioAutor: 6 }
    ],
    pasosReceta: [
      { id: 1, numeroPaso: 1, instruccion: "Calienta la plancha y asa la arepa.", duracionMin: 8, idReceta: 1 },
      { id: 2, numeroPaso: 2, instruccion: "Abre la arepa, rellena con queso y termina de dorar.", duracionMin: 12, idReceta: 1 },
      { id: 3, numeroPaso: 1, instruccion: "Hierve agua y cocina la pasta.", duracionMin: 12, idReceta: 2 },
      { id: 4, numeroPaso: 2, instruccion: "Prepara salsa casera y mezcla con la pasta.", duracionMin: 23, idReceta: 2 },
      { id: 5, numeroPaso: 1, instruccion: "Disuelve el cafe en leche fria.", duracionMin: 7, idReceta: 3 },
      { id: 6, numeroPaso: 2, instruccion: "Refrigera y sirve con topping.", duracionMin: 18, idReceta: 3 }
    ],
    ingredientesReceta: [
      { id: 1, nombreIngrediente: "Galletas Noel Tradicional", cantidad: 4, unidadMedida: "unidad", idProducto: 1, idReceta: 6 },
      { id: 2, nombreIngrediente: "Pasta Doria Espagueti", cantidad: 300, unidadMedida: "g", idProducto: 2, idReceta: 2 },
      { id: 3, nombreIngrediente: "Cafe Colcafe Clasico", cantidad: 30, unidadMedida: "g", idProducto: 3, idReceta: 3 },
      { id: 4, nombreIngrediente: "Chocolate Jet", cantidad: 120, unidadMedida: "g", idProducto: 4, idReceta: 4 },
      { id: 5, nombreIngrediente: "Salchicha Ranchera", cantidad: 5, unidadMedida: "unidad", idProducto: 5, idReceta: 5 },
      { id: 6, nombreIngrediente: "Galletas Festival Vainilla", cantidad: 6, unidadMedida: "unidad", idProducto: 6, idReceta: 9 },
      { id: 7, nombreIngrediente: "Pasta Doria Tornillos", cantidad: 250, unidadMedida: "g", idProducto: 7, idReceta: 7 },
      { id: 8, nombreIngrediente: "Colcafe Cappuccino Vainilla", cantidad: 2, unidadMedida: "sobre", idProducto: 8, idReceta: 8 },
      { id: 9, nombreIngrediente: "Jet Leche Mani", cantidad: 80, unidadMedida: "g", idProducto: 9, idReceta: 9 },
      { id: 10, nombreIngrediente: "Ranchera Premium", cantidad: 4, unidadMedida: "unidad", idProducto: 10, idReceta: 10 }
    ],
    fotosReceta: [
      { id: 1, url: "https://picsum.photos/seed/receta-1/640/480", descripcion: "Arepa rellena emplatada.", esPortada: true, idReceta: 1 },
      { id: 2, url: "https://picsum.photos/seed/receta-2/640/480", descripcion: "Pasta con salsa casera.", esPortada: true, idReceta: 2 },
      { id: 3, url: "https://picsum.photos/seed/receta-3/640/480", descripcion: "Postre frio de cafe servido.", esPortada: true, idReceta: 3 },
      { id: 4, url: "https://picsum.photos/seed/receta-4/640/480", descripcion: "Brownie de chocolate.", esPortada: true, idReceta: 4 },
      { id: 5, url: "https://picsum.photos/seed/receta-5/640/480", descripcion: "Perro caliente casero.", esPortada: true, idReceta: 5 }
    ]
  };

  window.recetarioMockData = recetarioMockData;
  window.recetasData = recetarioMockData.recetas.map(function (receta) {
    var ingredientePrincipal = recetarioMockData.ingredientesReceta.find(function (ingrediente) {
      return ingrediente.idReceta === receta.id;
    });

    return {
      idReceta: receta.id,
      nombreReceta: receta.titulo,
      idProductoPrincipal: ingredientePrincipal ? ingredientePrincipal.idProducto : null,
      porciones: receta.porciones,
      minutos: receta.tiempoPreparacionMin
    };
  });
})();
