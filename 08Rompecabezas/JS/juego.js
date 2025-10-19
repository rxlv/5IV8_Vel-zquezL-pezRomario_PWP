var instrucciones = [
    "UTILIZA LAS FLECHAS DE NAVEGACION PARA MOVER LAS PIEZAS",
    "ORDENA LAS PIEZAS HASTA FORMAR LA IMAGEN COMPLETA"
]

var movimientos = [];

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var rompecorrecta = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];  

var rompe = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var filaVacia = 2;
var columnaVacia = 2;

function mostrarInstrucciones(instrucciones) {
    for (var i = 0; i < instrucciones.length; i++) {
        mostrarInstruccionEnLista(instrucciones[i], "lista-instrucciones");
    }
}

function mostrarInstruccionEnLista(instruccion, idLista) {
    var ul = document.getElementById(idLista);
    var li = document.createElement("li");
    li.innerHTML = instruccion;
    ul.appendChild(li);
}

mostrarInstrucciones(instrucciones);

function checarSiGano() {
    for (var i = 0; i < rompe.length; i++) {
        for (var j = 0; j < rompe[i].length; j++) {
            var rompeActual = rompe[i][j];
            if (rompeActual !== rompecorrecta[i][j]) {
                return false;
            }
        }
    }
    return true;
}

function mostrarcarteldeganador() {
    if (checarSiGano()) {
        alert("FELICIDADES, GANASTE EL JUEGO");
    }
    return false;
}

function intercambiarPosiciones(fila1, columna1, fila2, columna2) {
    var pos1 = rompe[fila1,columna1]
    var pos2 = rompe[fila2,columna2]

    rompe[filapos1, columnapos1] = pos2
    rompe[filapos2, columnapos2] = pos1


}

function iniciar() {
}