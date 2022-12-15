window.onload =  function(){
    var enlace = document.getElementById("enlace1");
    enlace.addEventListener("mouseover",resalta);
    enlace.addEventListener("mouseout", resalta);
}
 
function resalta(evento){
    switch(evento.type) {
        case "mouseover":
            this.style.fontSize = "20pt";
            var enlace2 = document.getElementById("enlace2");
            enlace2.style.fontSize = "20pt";
            var enlace3 = document.getElementById("enlace3");
            enlace3.style.fontSize = "20pt";
            break;
        case "mouseout":
            this.style.fontSize = "12pt";
            var enlace2 = document.getElementById("enlace2");
            enlace2.style.fontSize = "12pt";
            var enlace3 = document.getElementById("enlace3");
            enlace3.style.fontSize = "12pt";
            break;
    }
}