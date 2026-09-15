window.iniciarSesion = function (correo, password) {
    if (!window.loginConfig.loginHabilitado) {
        return { ok: false, mensaje: window.loginConfig.mensaje };
    }

    correo = correo.trim().toLowerCase();
    if (!correo || !password) {
        return { ok: false, mensaje: "Ingresa el correo y la contraseña." };
    }
    if (!window.jugador.correo) {
        return { ok: false, mensaje: "Primero debes registrar una cuenta." };
    }
    if (correo !== window.jugador.correo || password !== window.jugador.password) {
        return { ok: false, mensaje: "Correo o contraseña incorrectos." };
    }

    window.jugador.sesionActiva = true;
    window.guardarJugador();
    return { ok: true, mensaje: `Sesión iniciada. ¡Hola, ${window.jugador.nombre}!` };
};
