window.comprarMonedas = function (cantidad) {
    if (!window.jugador.correo) {
        return { ok: false, mensaje: "Registra una cuenta antes de comprar monedas." };
    }
    if (!window.jugador.sesionActiva) {
        return { ok: false, mensaje: "Inicia sesión para comprar monedas." };
    }
    if (!Number.isInteger(cantidad) || cantidad < 1 || cantidad > 10000) {
        return { ok: false, mensaje: "Ingresa una cantidad entre 1 y 10,000 monedas." };
    }

    window.jugador.monedas += cantidad;
    window.guardarJugador();
    return { ok: true, mensaje: `Compra realizada: +${cantidad} monedas.` };
};
