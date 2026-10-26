(function () {
  var despensaMockData = {
    despensas: [
      { id: 1, nombre: "Despensa Casa Ana", descripcion: "Despensa principal del hogar.", fechaCreacion: "2026-10-01", activa: true, idUsuario: 1 },
      { id: 2, nombre: "Despensa Oficina", descripcion: "Snacks y bebidas de oficina.", fechaCreacion: "2026-10-03", activa: true, idUsuario: 4 }
    ],
    itemsDespensa: [
      { id: 1, cantidad: 2, unidadMedida: "paquete", fechaVencimiento: "2026-12-10", idProducto: 1, idDespensa: 1 },
      { id: 2, cantidad: 1, unidadMedida: "frasco", fechaVencimiento: "2027-01-15", idProducto: 3, idDespensa: 1 },
      { id: 3, cantidad: 3, unidadMedida: "paquete", fechaVencimiento: "2026-11-18", idProducto: 5, idDespensa: 2 }
    ],
    sugerencias: [
      { id: 1, fechaGeneracion: "2026-10-18T08:00:00", porcentajeCoincidencia: 82.5, aceptada: false, idReceta: 2, idDespensa: 1 },
      { id: 2, fechaGeneracion: "2026-10-19T12:30:00", porcentajeCoincidencia: 75, aceptada: true, idReceta: 5, idDespensa: 2 }
    ],
    historialConsumo: [
      { id: 1, cantidadConsumida: 1, fechaConsumo: "2026-10-14", observacion: "Usado en postre familiar.", idItemDespensa: 2 },
      { id: 2, cantidadConsumida: 1, fechaConsumo: "2026-10-17", observacion: "Cena de fin de semana.", idItemDespensa: 3 }
    ],
    alertasVencimiento: [
      { id: 1, mensaje: "Producto proximo a vencer.", fechaAlerta: "2026-11-10", diasRestantes: 8, leida: false, idItemDespensa: 3 },
      { id: 2, mensaje: "Revisar estado del empaque.", fechaAlerta: "2026-12-03", diasRestantes: 7, leida: true, idItemDespensa: 1 }
    ]
  };

  var nutricionMockData = {
    informacionNutricional: [
      { id: 1, calorias: 145, proteinasG: 2.4, carbohidratosG: 23, grasasG: 4.8, sodioMg: 120, idProducto: 1 },
      { id: 2, calorias: 190, proteinasG: 6.5, carbohidratosG: 38, grasasG: 1.2, sodioMg: 8, idProducto: 2 },
      { id: 3, calorias: 65, proteinasG: 1.1, carbohidratosG: 12, grasasG: 1.3, sodioMg: 35, idProducto: 3 }
    ],
    perfilesAlimentarios: [
      { id: 1, tipoDieta: "Balanceada", caloriasDiarias: 2100, pesoKg: 68, estaturaCm: 170, idUsuario: 3 },
      { id: 2, tipoDieta: "Alta proteina", caloriasDiarias: 2400, pesoKg: 74, estaturaCm: 176, idUsuario: 6 }
    ],
    alergenos: [
      { id: 1, nombre: "Gluten", descripcion: "Sensibilidad al gluten.", nivelRiesgo: "medio", activo: true, idUsuarioCreador: 1 },
      { id: 2, nombre: "Frutos secos", descripcion: "Reaccion a mani y nueces.", nivelRiesgo: "alto", activo: true, idUsuarioCreador: 4 }
    ],
    restriccionesPerfil: [
      { id: 1, tipo: "Evitar", observacion: "Reducir harinas refinadas.", fechaRegistro: "2026-10-05", idAlergeno: 1, idPerfilAlimentario: 1 },
      { id: 2, tipo: "Prohibido", observacion: "No consumir mani.", fechaRegistro: "2026-10-07", idAlergeno: 2, idPerfilAlimentario: 2 }
    ],
    objetivosNutricionales: [
      { id: 1, descripcion: "Bajar porcentaje de grasa corporal.", metaCalorias: 1950, fechaInicio: "2026-10-10", fechaFin: "2026-12-10", idPerfilAlimentario: 1 },
      { id: 2, descripcion: "Aumentar masa muscular.", metaCalorias: 2500, fechaInicio: "2026-10-12", fechaFin: "2026-12-30", idPerfilAlimentario: 2 }
    ]
  };

  var planificadorMockData = {
    planesSemanales: [
      { id: 1, nombre: "Semana saludable", fechaInicio: "2026-10-20", fechaFin: "2026-10-26", activo: true, idUsuario: 3 },
      { id: 2, nombre: "Semana oficina", fechaInicio: "2026-10-20", fechaFin: "2026-10-26", activo: true, idUsuario: 6 }
    ],
    comidasPlanificadas: [
      { id: 1, diaSemana: "Lunes", tipoComida: "Almuerzo", porciones: 2, idReceta: 2, idPlanSemanal: 1 },
      { id: 2, diaSemana: "Miercoles", tipoComida: "Cena", porciones: 4, idReceta: 5, idPlanSemanal: 1 },
      { id: 3, diaSemana: "Viernes", tipoComida: "Snack", porciones: 2, idReceta: 8, idPlanSemanal: 2 }
    ],
    listasMercado: [
      { id: 1, nombre: "Compras semana saludable", fechaCreacion: "2026-10-19", presupuesto: 120000, completada: false, idPlanSemanal: 1 },
      { id: 2, nombre: "Compras oficina", fechaCreacion: "2026-10-19", presupuesto: 80000, completada: false, idPlanSemanal: 2 }
    ],
    itemsListaMercado: [
      { id: 1, cantidad: 2, unidadMedida: "paquete", comprado: false, idProducto: 2, idListaMercado: 1 },
      { id: 2, cantidad: 1, unidadMedida: "paquete", comprado: true, idProducto: 5, idListaMercado: 1 },
      { id: 3, cantidad: 3, unidadMedida: "sobre", comprado: false, idProducto: 8, idListaMercado: 2 }
    ],
    recordatoriosCompra: [
      { id: 1, mensaje: "Comprar ingredientes de pasta antes del martes.", fechaRecordatorio: "2026-10-21T08:00:00", enviado: false, idListaMercado: 1 },
      { id: 2, mensaje: "Validar stock de bebidas para oficina.", fechaRecordatorio: "2026-10-22T09:30:00", enviado: true, idListaMercado: 2 }
    ]
  };

  var comunidadMockData = {
    valoraciones: [
      { id: 1, puntuacion: 5, fecha: "2026-10-18T18:20:00", recomendaria: true, idReceta: 2, idUsuario: 3 },
      { id: 2, puntuacion: 4, fecha: "2026-10-19T14:10:00", recomendaria: true, idReceta: 5, idUsuario: 6 }
    ],
    comentarios: [
      { id: 1, contenido: "Excelente receta para toda la familia.", fechaPublicacion: "2026-10-18T18:25:00", editado: false, idReceta: 2, idUsuario: 3 },
      { id: 2, contenido: "Le agregue vegetales y quedo mejor.", fechaPublicacion: "2026-10-19T14:15:00", editado: true, idReceta: 5, idUsuario: 6 }
    ],
    favoritos: [
      { id: 1, fechaAgregado: "2026-10-17T09:00:00", nota: "Ideal para invitados.", idReceta: 4, idUsuario: 8 },
      { id: 2, fechaAgregado: "2026-10-18T11:40:00", nota: "Rapida para dias de trabajo.", idReceta: 8, idUsuario: 2 }
    ],
    colecciones: [
      { id: 1, nombre: "Postres favoritos", descripcion: "Recetas dulces para ocasiones especiales.", publica: true, fechaCreacion: "2026-10-01", idUsuario: 8 },
      { id: 2, nombre: "Recetas express", descripcion: "Recetas de menos de 30 minutos.", publica: false, fechaCreacion: "2026-10-05", idUsuario: 2 }
    ],
    reportesModeracion: [
      { id: 1, motivo: "Lenguaje ofensivo", descripcion: "Comentario fuera de contexto.", estado: "pendiente", fechaReporte: "2026-10-19T16:00:00", idComentario: 2 }
    ]
  };

  var mercadeoMockData = {
    campanias: [
      { id: 1, nombre: "Mes de recetas caseras", descripcion: "Promociones para recetas de hogar.", fechaInicio: "2026-10-01", fechaFin: "2026-10-31", activa: true, idUsuarioCreador: 1 },
      { id: 2, nombre: "Semana del cafe", descripcion: "Beneficios en linea de bebidas.", fechaInicio: "2026-10-15", fechaFin: "2026-10-25", activa: true, idUsuarioCreador: 4 }
    ],
    cupones: [
      { id: 1, codigo: "SAZON10", porcentajeDescuento: 10, fechaVencimiento: "2026-11-15", usosMaximos: 200, idCampania: 1 },
      { id: 2, codigo: "CAFE15", porcentajeDescuento: 15, fechaVencimiento: "2026-10-30", usosMaximos: 120, idCampania: 2 }
    ],
    cuentasFidelizacion: [
      { id: 1, puntosAcumulados: 1340, nivel: "oro", fechaAfiliacion: "2026-01-10", idUsuario: 3 },
      { id: 2, puntosAcumulados: 420, nivel: "plata", fechaAfiliacion: "2026-04-22", idUsuario: 6 }
    ],
    recompensas: [
      { id: 1, nombre: "Set de cocina", descripcion: "Set promocional de utensilios.", puntosRequeridos: 1000, stock: 25, idCampania: 1 },
      { id: 2, nombre: "Kit de cafe premium", descripcion: "Kit con productos Colcafe.", puntosRequeridos: 700, stock: 40, idCampania: 2 }
    ],
    canjes: [
      { id: 1, fechaCanje: "2026-10-16T10:00:00", puntosUsados: 700, estado: "aprobado", idRecompensa: 2, idCuentaFidelizacion: 1 },
      { id: 2, fechaCanje: "2026-10-19T12:45:00", puntosUsados: 1000, estado: "pendiente", idRecompensa: 1, idCuentaFidelizacion: 2 }
    ]
  };

  window.despensaMockData = despensaMockData;
  window.nutricionMockData = nutricionMockData;
  window.planificadorMockData = planificadorMockData;
  window.comunidadMockData = comunidadMockData;
  window.mercadeoMockData = mercadeoMockData;
})();
