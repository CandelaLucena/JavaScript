function resaltaGrande(){
    this.style.fontSize = "20pt";
}
function resaltaPequenyo(){
    this.style.fontSize = "10pt";
}

window.onload =  function(){
    document.getElementById("seccion").onmouseover = resaltaGrande;
    document.getElementById("seccion").onmouseout = resaltaPequenyo;
}
/*
function resalta(){
    var evento = this.event || window.event;
    switch(evento.type) {
        case "mouseover":
            this.style.fontSize = "20pt";
            break;
        case "mouseout":
            this.style.fontSize = "10pt";
            break;
    }
}
*/