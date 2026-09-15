document.addEventListener("DOMContentLoaded", function () {
    const estado = document.getElementById("estado");
    const perfilNombre = document.getElementById("perfilNombre");
    const perfilAvatar = document.getElementById("perfilAvatar");
    const perfilNivel = document.getElementById("perfilNivel");
    const perfilMonedas = document.getElementById("perfilMonedas");
    const nivelHero = document.getElementById("nivelHero");
    const mensajeSoporte = document.getElementById("mensajeSoporte");
    const contador = document.getElementById("contador");

    function mostrarEstado(resultado) {
        estado.textContent = resultado.mensaje;
        estado.className = `estado ${resultado.ok ? "exito" : "error"}`;
    }

    function actualizarPerfil() {
        const jugador = window.jugador || {};
        perfilNombre.textContent = jugador.nombre || "Sin registrar";
        perfilAvatar.textContent = jugador.avatar || "?";
        perfilNivel.textContent = jugador.nivel || 1;
        perfilMonedas.textContent = Number(jugador.monedas || 0).toLocaleString("es-MX");
        nivelHero.textContent = jugador.nivel || 1;
    }

    document.getElementById("btnRegistro").addEventListener("click", function () {
        const resultado = window.registrarJugador(
            document.getElementById("nombreRegistro").value,
            document.getElementById("correoRegistro").value,
            document.getElementById("passwordRegistro").value
        );
        mostrarEstado(resultado);
        actualizarPerfil();
    });

    document.getElementById("btnLogin").addEventListener("click", function () {
        const resultado = window.iniciarSesion(
            document.getElementById("correoLogin").value,
            document.getElementById("passwordLogin").value
        );
        mostrarEstado(resultado);
        actualizarPerfil();
    });

    document.getElementById("btnComprar").addEventListener("click", function () {
        const cantidad = Number(document.getElementById("cantidadMonedas").value);
        const resultado = window.comprarMonedas(cantidad);
        mostrarEstado(resultado);
        actualizarPerfil();
    });

    mensajeSoporte.addEventListener("input", function () {
        contador.textContent = `${mensajeSoporte.value.length} / 500`;
    });

    document.getElementById("btnEnviar").addEventListener("click", function () {
        const mensaje = mensajeSoporte.value.trim();
        if (!mensaje) {
            mostrarEstado({ ok: false, mensaje: "Escribe un mensaje para soporte." });
            return;
        }
        mensajeSoporte.value = "";
        contador.textContent = "0 / 500";
        mostrarEstado({ ok: true, mensaje: "Tu mensaje fue enviado a soporte correctamente." });
    });

    actualizarPerfil();
});
