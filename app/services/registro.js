window.registrarJugador = function (nombre, correo, password) {
    nombre = nombre.trim();
    correo = correo.trim().toLowerCase();

    if (!nombre || !correo || !password) {
        return { ok: false, mensaje: "Completa todos los campos del registro." };
    }
    if (!correo.includes("@") || !correo.includes(".")) {
        return { ok: false, mensaje: "Ingresa un correo electrónico válido." };
    }
    if (password.length < 4) {
        return { ok: false, mensaje: "La contraseña debe tener al menos 4 caracteres." };
    }

    window.jugador = {
        nombre,
        correo,
        password,
        avatar: nombre.charAt(0).toUpperCase(),
        nivel: 1,
        monedas: 0,
        sesionActiva: true
    };
    window.guardarJugador();
    return { ok: true, mensaje: `¡Cuenta creada! Bienvenido, ${nombre}.` };
};
