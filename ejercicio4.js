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
window.onload =  function(){
    var seccion = document.getElementById("seccion");
    seccion.addEventListener("mouseover",resalta);
    seccion.addEventListener("mouseout", resalta);
}