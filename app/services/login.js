window.iniciarSesion = function (correo, password) {
    if (!window.loginConfig.loginHabilitado) {
        return {
            ok: false,
            mensaje: window.loginConfig.mensaje
        };
    }

    if (!correo || !password) {
        return {
            ok: false,
            mensaje: "Ingresa el correo y la contraseña"
        };
    }

    return {
        ok: true,
        mensaje: "Inicio de sesión correcto"
    };
};
