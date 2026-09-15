window.jugador = JSON.parse(localStorage.getItem("gameplanetJugador")) || {
    nombre: "",
    correo: "",
    password: "",
    avatar: "?",
    nivel: 1,
    monedas: 0,
    sesionActiva: false
};

window.guardarJugador = function () {
    localStorage.setItem("gameplanetJugador", JSON.stringify(window.jugador));
};
