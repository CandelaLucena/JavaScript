function anyadirParrafo(){
    var parrafo = document.createElement('p');
    var texto = document.createTextNode("Parrafo añadido");
    parrafo.appendChild(texto);
    document.getElementById('divisor').appendChild(parrafo);
}

function insertarParrafo(){
    var parrafo = document.createElement('p');
    var texto = document.createTextNode('Párrafo insertado');
    parrafo.appendChild(texto);
    var posicion = document.getElementById('divisor').getElementsByTagName('p')[1];
    document.getElementById("divisor").insertBefore(parrafo, posicion);
}

function reemplazarParrafo(){
    //posicion.innerHTML = "Parrafo reemplazado"
    var parrafo = document.createElement('p');
    var texto = document.createTextNode('Párrafo reemplazado');
    parrafo.appendChild(texto);
    var posicion = document.getElementById("divisor").getElementsByTagName('p')[1];
    document.getElementById("divisor").replaceChild(parrafo,posicion);
}

function borrarParrafo(){
    var posicion = document.getElementsByTagName("p")[1];  
    document.getElementById('divisor').removeChild(posicion);
}

function clonar(){
    var clon = document.getElementById('divisor').cloneNode(true);
    document.getElementById('divisor').appendChild(clon);
}