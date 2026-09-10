document.addEventListener("DOMContentLoaded", function () {
    const estado = document.getElementById("estado");
    const perfilNombre = document.getElementById("perfilNombre");
    const perfilAvatar = document.getElementById("perfilAvatar");
    const perfilNivel = document.getElementById("perfilNivel");
    const perfilMonedas = document.getElementById("perfilMonedas");

    function actualizarPerfil() {
        perfilNombre.textContent = window.jugador.nombre || "Sin registrar";
        perfilAvatar.textContent = window.jugador.avatar || "Sin avatar";
        perfilNivel.textContent = window.jugador.nivel || 1;
        perfilMonedas.textContent = window.jugador.monedas || 0;
    }

    document.getElementById("btnRegistro").addEventListener("click", function () {
        const nombre = document.getElementById("nombreRegistro").value;
        const correo = document.getElementById("correoRegistro").value;
        const password = document.getElementById("passwordRegistro").value;
        const resultado = window.registrarJugador(nombre, correo, password);
        estado.textContent = resultado.mensaje;
        actualizarPerfil();
    });

    document.getElementById("btnLogin").addEventListener("click", function () {
        const correo = document.getElementById("correoLogin").value;
        const password = document.getElementById("passwordLogin").value;
        const resultado = window.iniciarSesion(correo, password);
        estado.textContent = resultado.mensaje;
    });

    document.getElementById("btnComprar").addEventListener("click", function () {
        const cantidad = Number(document.getElementById("cantidadMonedas").value);
        const resultado = window.comprarMonedas(cantidad);
        estado.textContent = resultado.mensaje;
        actualizarPerfil();
    });

    document.getElementById("btnEnviar").addEventListener("click", function () {
        const mensaje = document.getElementById("mensajeSoporte").value;
        if (!mensaje.trim()) {
            estado.textContent = "Escribe un mensaje para soporte.";
            return;
        }
        estado.textContent = "El mensaje fue enviado a soporte.";
    });

    actualizarPerfil();
});
