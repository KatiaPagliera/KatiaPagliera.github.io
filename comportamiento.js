function detectarElementoPresionado() {
    //Funcion que detecta el elemento presionado y lo devuelve
    var salida;
    
    if (document.getElementById("radio1").checked) {
        salida = document.getElementById("radio1").value;
    }
    if (document.getElementById("radio2").checked) {
        salida = document.getElementById("radio2").value;
    }

    if (document.getElementById("radio3").checked) {
        salida = document.getElementById("radio3").value;
    }

    if (document.getElementById("radio4").checked) {
        salida = document.getElementById("radio4").value;
    }

    if (document.getElementById("radio5").checked) {
        salida = document.getElementById("radio5").value;
    }
    return salida;
}

function limpiarPantalla() {
    //Funcion para oculatr imagenes
    document.getElementById("perdon").style.display = "none";
    document.getElementById("gracias").style.display = "none";
}


function calificacion() {
    //Funcion que se encarga de el comportamiento de la calificacion
    var elemento = detectarElementoPresionado();
    limpiarPantalla();
    
    if (elemento < 3){
        //Si lo votado es menor a 3 muestro "perdon"
        document.getElementById("perdon").style.display = "flex";

    }else if (elemento >= 3 && elemento <= 5){
        //Sino significa que es positivo, entonces muestro "gracias"
        document.getElementById("gracias").style.display = "flex";
    }

}