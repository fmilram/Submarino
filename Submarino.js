<<<<<<< HEAD
const dimension = prompt('Introduzca la dimnesion del tablero: ')

//Crear tablero
var tablero = [];

//Crear posición inicial del submarino
    var fila = Math.floor(Math.random() * dimension);
    var columna = Math.floor(Math.random() * dimension);

//Iniciar tabblero
    for (var i = 0; i < dimension; i++){
        tablero[i] = [];
        for (var j = 0; j< dimension; j++){
            if (i === fila && j === columna) {
             //Colocar submarino
                tablero[i][j] = 1;
            } else if (i === fila || j === columna) {
            //Localizar submarino
                tablero[i][j] = 2;
            } else {
                //Casilla vacía
                tablero[i][j] = 0;
            }
        }
    }

var filaElegida = prompt('Introduce la fila: ');
let columnaElegida = prompt('Introduce la columna: ');

//Comprobar coordenadas introducidas
if (filaElegida >= 0 && filaElegida < dimension && columnaElegida >= 0 && columnaElegida < dimension) {
  console.log(tablero[filaElegida][columnaElegida]);
} else {
  console.log('Coordenadas fuera del tablero.');
}

//Comrpobar intento
if (filaElegida === fila && columnaElegida === columna) {
    console.log('Has encontrado el submarino.');
} else {
    console.log('Inténtalo de nuevo.');
    moverSubmarino();
}

//Mover el submarino hacia una dirección dentro del tablero
function moverSubmarino() {
    
    //Generar una dirección aleatoria entre las cuatro opciones posibles
    let direccion = Math.floor(Math.random() * 4);

    let nuevaFila = fila;
    let nuevaColumna = columna;

    //Arriba
    if (direccion === 0 && filaSub > 0) nuevaFila--;
    //Abajo
    else if (direccion === 1 && filaSub < dimension - 1) nuevaFila++;
    //Izquierda
    else if (direccion === 2 && columnaSub > 0) nuevaColumna--;
    //Derecha
    else if (direccion === 3 && columnaSub < dimension - 1) nuevaColumna++;
}

//Mostrar tablero
//console.log(tablero);
=======
linea de prueba
>>>>>>> 901f6077dca8f78eaac4ca910caabe5418c3eeef
