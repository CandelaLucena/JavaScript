window.onload = function(){
    var boton = document.getElementById("menuSeleccionado");
    boton.addEventListener("click", precio);
}
  
function precio(){
    var precio = 0;
    var entrantes = 0;
    var segundos = 0;
    var postre = 5;

    if(document.getElementById("entrante1").checked){
        precio += 5;
        entrantes += 1;
    }
    if(document.getElementById("entrante2").checked){
        precio += 5;
        entrantes += 1;
    }
    if(document.getElementById("pregunta_pavo").checked){
        precio += 10;
        segundos += 1;
    }
    if(document.getElementById("pregunta_salmon").checked){
        precio += 10;
        segundos += 1;
    }
    precio += postre;

    alert("Tienes seleccionados: "+entrantes+"entrantes y "+segundos+"segundos. Precio final es de: "+precio);
}
  
