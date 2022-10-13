var valor = 0;

function sumar(){
   valor = valor + 10;
   var parrafo = document.createElement('p');
   var texto = document.createTextNode(valor);
   parrafo.appendChild(texto);
   var posicion = document.getElementById("primerDiv").getElementsByTagName('p')[0];
   document.getElementById("primerDiv").replaceChild(parrafo,posicion);
}
function ponerValorCero(){
    valor = 0;
    var parrafo = document.createElement('p');
    var texto = document.createTextNode(valor);
    parrafo.appendChild(texto);
    var posicion = document.getElementById("primerDiv").getElementsByTagName('p')[0];
    document.getElementById("primerDiv").replaceChild(parrafo,posicion);
}
