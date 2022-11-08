window.onload = function(){
    var opciones = document.getElementById("formulario");
    opciones.addEventListener("change", cambiar);
}

function cambiar(){
    for (let index = 0; index <= document.getElementsByName('color').length; index++) {
        var valor = document.getElementsByName('color')[index]
        if(valor.checked == true) {
            var parrafo = document.getElementsByTagName("p");
            parrafo[0].style.backgroundColor = valor.value
        }
    }
}