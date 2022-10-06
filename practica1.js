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
    document.getElementsByTagName('p')[0].appendChild(parrafo);
}
/*replaceChild
function reemplazarParrafo(){
    var parrafo = document.createElement('p');
    var texto = document.createTextNode('Párrafo reemplazado');
    parrafo.appendChild(texto);
    document.getElementsByTagName('p')[1].appendChild(parrafo);
}
/*
function borrarParrafo(){
    var parrafo = document.createElement('p');
    var texto = document.createTextNode('Párrafo añadido.');
    parrafo.appendChild(texto);
    document.getElementById('ej-aCh').appendChild(parrafo)
}

function clonar(){
    var parrafo = document.createElement('p');
    var texto = document.createTextNode('Párrafo añadido.');
    parrafo.appendChild(texto);
    document.getElementById('ej-aCh').appendChild(parrafo)
}
*/