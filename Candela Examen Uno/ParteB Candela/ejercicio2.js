window.onload = function(){
    var boton = document.getElementById("menuSeleccionado");
    boton.addEventListener("click", precio);

    var boton = document.getElementById("nuevoMenu");
    boton.addEventListener("click", nuevo);
}
  
function precio(){
    var precio = 0;
    var entrantes = 0;
    var segundos = 0;
    var postre = 5;
    var platos = ""
    if(document.getElementById("entrante1").checked){
        precio += 5;
        entrantes += 1;
        platos += "ensalada especial, "
    }
    if(document.getElementById("entrante2").checked){
        precio += 5;
        entrantes += 1;
        platos += "jamon Iberico, "
    }
    if(document.getElementById("pregunta_pavo").checked){
        precio += 10;
        segundos += 1;
        platos += "pavo trufado, "
    }
    if(document.getElementById("pregunta_salmon").checked){
        precio += 10;
        segundos += 1;
        platos += "salmon al cava, "
    }
    precio += postre;
    platos += "postre incluido. "
    alert("Tienes seleccionados: "+entrantes+"entrantes y "+segundos+"segundos. Precio final es de: "+precio+
    "Los platos seleccionados son: "+platos);
}

function nuevo(){
    document.getElementById("formulario").reset();
}
  
