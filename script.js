/* usamos let para variables que pueden cambiar de valor*/
let intervalo;
let rojo = 0;
let amarillo = 0;
let verde = 0;

function cambiarColor(color) {
/*Le quitamos el color encendido a todas las luces y le ponemos el color encendido a la luz que se le pasa como parámetro*/
    document.getElementById("rojo").classList.remove("encendida");
    document.getElementById("amarillo").classList.remove("encendida");
    document.getElementById("verde").classList.remove("encendida");

    document.getElementById(color).classList.add("encendida");

    document.getElementById("estado").textContent = color;
/* Aqui solo el contador hara su magia y contará cada vez que se encienda un color, y se mostrará en el span correspondiente*/
    if (color == "rojo") {
        rojo++;
        document.getElementById("contadorRojo").textContent = rojo;
    }

    if (color == "amarillo") {
        amarillo++;
        document.getElementById("contadorAmarillo").textContent = amarillo;
    }

    if (color == "verde") {
        verde++;
        document.getElementById("contadorVerde").textContent = verde;
    }
}

function automatico() {
/*Antes de todo, apagamos el semáforo por si acaso*/
    apagar();
/*Creamos los colores. Como es una lista, la estamos iniciando desde 0 "verde" y la declaramos en posicion, desde comenzara el semaforo*/
    let colores = ["verde", "amarillo", "rojo"];
    let posicion = 0;

    cambiarColor(colores[posicion]);
    /*Es una funcion que se ejecutara cada cierto tiempo, en este caso 1500 milisegundos*/
    intervalo = setInterval(function() {
        /*Cambiara la posicion*/
        posicion++;
        /*Si llegamos a la posicion 3(que no existe, solo tenemos hasta el 2) vuelve a 0*/
        if (posicion == 3) {
            posicion = 0;
        }
        /*Finalmente, volvemos a encender el color*/
        cambiarColor(colores[posicion]);
        /*cambiara cada 1500 milisegundos, es decir, 1.5 segundos*/
    }, 1500);
}

function apagar() {
    /*Detenemos el intervalo para que deje de cambiar de color*/
    clearInterval(intervalo);
    /*Le quita el css de encendido a todas las luces y cambia el texto del estado a apagado*/
    document.getElementById("rojo").classList.remove("encendida");
    document.getElementById("amarillo").classList.remove("encendida");
    document.getElementById("verde").classList.remove("encendida");

    document.getElementById("estado").textContent = "Apagado";
}
