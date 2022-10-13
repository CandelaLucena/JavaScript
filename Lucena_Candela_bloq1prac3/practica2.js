function anyadirParrafo(){
    var parrafo = document.createElement('li');
    var texto = document.createTextNode("gato añadido");
    parrafo.appendChild(texto);
    document.getElementById('listaelemen').appendChild(parrafo);
}

function insertarParrafo(){
    var parrafo = document.createElement('li');
    var texto = document.createTextNode('gato insertado');
    parrafo.appendChild(texto);
    var posicion = document.getElementById('listaelemen').getElementsByTagName('li')[1];
    document.getElementById("listaelemen").insertBefore(parrafo, posicion);
}

function reemplazarParrafo(){
    //posicion.innerHTML = "Parrafo reemplazado"
    var parrafo = document.createElement('li');
    var texto = document.createTextNode('gato reemplazado');
    parrafo.appendChild(texto);
    var posicion = document.getElementById("listaelemen").getElementsByTagName('li')[1];
    document.getElementById("listaelemen").replaceChild(parrafo,posicion);
}

function borrarParrafo(){
    var posicion = document.getElementsByTagName("li")[1];  
    document.getElementById('listaelemen').removeChild(posicion);
}

function clonar(){
    var clon = document.getElementById('listaelemen').cloneNode(true);
    //document.getElementById('listaelemen').appendChild(clon);
    document.body.appendChild(clon);
}

function sublistaDom(){
    var parrafo = document.createElement('ul');
    var texto = document.createTextNode('gato insertado con DOM');
    parrafo.appendChild(texto);
    var posicion = document.getElementById("listaelemen").getElementsByTagName('li')[1];
    document.getElementById("listaelemen").insertBefore(parrafo, posicion);
}

function sublistaHtml(){
    document.getElementById("listaelemen").getElementsByTagName("li")[0].innerHTML+="<ul>gato insertado con HTML</ul>";
    
}