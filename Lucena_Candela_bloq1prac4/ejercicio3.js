function resalta(evento){
    //var evento = this.event || window.event;
    switch(evento.type) {
        case "mouseover":
            this.style.fontSize = "20pt";
            break;
        case "mouseout":
            this.style.fontSize = "10pt";
            break;
    }
}
window.onload =  function(){
    document.getElementById("seccion").onmouseover = resalta;
    document.getElementById("seccion").onmouseout = resalta;
}