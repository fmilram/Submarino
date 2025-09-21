<<<<<<< HEAD
const dimension = parseInt(prompt('Introduzca la dimensión del tablero: '));
const dificultad = parseInt(prompt('Introduzca la dificultad: '));

// Crear tablero
var tablero = [];

// Posición inicial del submarino
var fila = Math.floor(Math.random() * dimension);
var columna = Math.floor(Math.random() * dimension);

// Inicializar tablero
for (var i = 0; i < dimension; i++) {
    tablero[i] = [];
    for (var j = 0; j < dimension; j++) {
        tablero[i][j] = 0;
    }
}

// Función para colocar el submarino en cada turno
function actualizarTablero() {
    // Reiniciar tablero
    for (var i = 0; i < dimension; i++) {
        for (var j = 0; j < dimension; j++) {
            tablero[i][j] = 0;
        }
    }

    // Colocar submarino
    tablero[fila][columna] = 1;

    // Indicar casillas según la dificultad
    for (let d = 1; d <= dificultad; d++) {
        if (fila - d >= 0) tablero[fila - d][columna] = 2;
        if (fila + d < dimension) tablero[fila + d][columna] = 2;
        if (columna - d >= 0) tablero[fila][columna - d] = 2;
        if (columna + d < dimension) tablero[fila][columna + d] = 2;
    }
}

// Función para mover el submarino
function moverSubmarino() {
    let direccion = Math.floor(Math.random() * 4);
    let nuevaFila = fila;
    let nuevaColumna = columna;

    if (direccion === 0 && fila > 0) nuevaFila--;
    else if (direccion === 1 && fila < dimension - 1) nuevaFila++;
    else if (direccion === 2 && columna > 0) nuevaColumna--;
    else if (direccion === 3 && columna < dimension - 1) nuevaColumna++;

    fila = nuevaFila;
    columna = nuevaColumna;
}

// Preparar tablero inicial
actualizarTablero();

// Juego principal
let encontrado = false;
do {
    let filaElegida = parseInt(prompt('Introduce la fila: '));
    let columnaElegida = parseInt(prompt('Introduce la columna: '));

    if (filaElegida >= 0 && filaElegida < dimension && columnaElegida >= 0 && columnaElegida < dimension) {
        let valor = tablero[filaElegida][columnaElegida];
        console.log("Resultado en esa casilla:", valor);

        if (valor === 1) {
            console.log("Submarino encontrado.");
            encontrado = true;
        } else {
            console.log("Prueba otra vez.");
            moverSubmarino();
            actualizarTablero();
        }
    } else {
        console.log("Coordenadas fuera del tablero.");
    }

} while (!encontrado);

console.log("Juego terminado.");
//Mostrar tablero
//console.log(tablero);
=======
linea de prueba
>>>>>>> 901f6077dca8f78eaac4ca910caabe5418c3eeef
