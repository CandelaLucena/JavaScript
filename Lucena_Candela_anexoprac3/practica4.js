function contarEnlaces(){
    var enlaces = document.getElementsByTagName("a");  
    var numero = enlaces.length;
    alert(numero);
}

function referenciaEnlaces(){
    var enlaces = document.getElementsByTagName("a");
    var conjuntoEnlaces = "";
    for(var i = 0; i<enlaces.length;i++){
      conjuntoEnlaces  = conjuntoEnlaces + "" + enlaces[i].getAttribute("href") + " ";
    }
    alert(conjuntoEnlaces);
}

function referenciaEnlacesParrafo(){
    var parrafo = document.getElementsByTagName("p");
    for (var i=0 ;i<parrafo.length;i++){
        var enlaces = document.getElementsByTagName("p")[i].getElementsByTagName("a");
        var conjuntoEnlaces = "";
        for(var x = 0; x<enlaces.length;x++){
            conjuntoEnlaces  = conjuntoEnlaces + "" + enlaces[x].getAttribute("href") + " ";
        }
        alert(conjuntoEnlaces);
    }
}

function verde(){
    var parrafo = document.getElementsByTagName("p");
    for (var i=0 ;i<parrafo.length;i++){
        parrafo[i].style.backgroundColor = "green";
    }
}

function defecto(){
    var parrafo = document.getElementsByTagName("p");
    for (var i=0 ;i<parrafo.length;i++){
        parrafo[i].style.backgroundColor = "white";
    }
}