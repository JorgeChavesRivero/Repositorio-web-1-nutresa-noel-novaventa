/**
 * Módulo: Mercadeo, Campañas y Fidelización
 * Célula: 7
 * Desarrollador: Andrés David
 * Historia de Usuario: HU-01 - Gestión de Cuentas de Fidelización (cuentas_fidelizacion)
 */

(function () {
    const INICIALES = [
        { id: 1, usuarioId: 101, puntos: 250, nivel: 'Bronce' },
        { id: 2, usuarioId: 102, puntos: 600, nivel: 'Plata' },
        { id: 3, usuarioId: 103, puntos: 1200, nivel: 'Oro' }
    ];

    const getCuentas = () => JSON.parse(localStorage.getItem('sazon_cuentas')) || INICIALES;
    const saveCuentas = (data) => localStorage.setItem('sazon_cuentas', JSON.stringify(data));
    const getNivel = (pts) => pts >= 1000 ? 'Oro' : pts >= 500 ? 'Plata' : 'Bronce';

    window.mercadeoServicio = {
        listarTodos: async () => getCuentas(),
        consultarCuentaPorUsuario: async (id) => getCuentas().find(c => c.usuarioId === id) || null,
        acumularPuntos: async (id, cantidad) => {
            let cuentas = getCuentas();
            let c = cuentas.find(x => x.usuarioId === id) || { id: cuentas.length + 1, usuarioId: id, puntos: 0 };
            if (!cuentas.includes(c)) cuentas.push(c);
            
            c.puntos += cantidad;
            c.nivel = getNivel(c.puntos);
            saveCuentas(cuentas);
            return c;
        },
        redimirPuntos: async (id, cantidad) => {
            let cuentas = getCuentas();
            let c = cuentas.find(x => x.usuarioId === id);
            if (!c) return { exito: false, mensaje: 'Cuenta no encontrada' };
            if (c.puntos < cantidad) return { exito: false, mensaje: 'Puntos insuficientes' };

            c.puntos -= cantidad;
            c.nivel = getNivel(c.puntos);
            saveCuentas(cuentas);
            return { exito: true, cuenta: c };
        }
    };
})();