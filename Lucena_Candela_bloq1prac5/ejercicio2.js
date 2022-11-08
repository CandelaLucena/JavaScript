window.onload = function(){
    var opciones = document.getElementById("opcionesColor");
    opciones.addEventListener("change", cambiar);
}

function cambiar(){
    //Con tag name hay que utilizar []
    var parrafo = document.getElementsByTagName("p");
    if(this.value=="green"){    
        parrafo[0].style.backgroundColor = "green";
    }else if(this.value=="red"){
        parrafo[0].style.backgroundColor = "red";
    }else if(this.value=="blue"){
        parrafo[0].style.backgroundColor = "blue";
    }
}