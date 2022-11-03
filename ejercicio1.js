window.onload = function(){
  document.getElementById("stringNombre").focus();

  var opciones = document.getElementById("opcionesAficcion");
  opciones.addEventListener("onchange", listar)

  var formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", comprobar);
}
function listar(event){
  //longitud de la lista,número del índice seleccionado y el valor del índice
  var lista = document.getElementsByTagName("option");

  alert("La lista mide: "+lista.length+
        "Has elegido la opcion: "+event+
        "El valor del indice es: "+event.value);
}

function comprobar(event){
  //DNI obligatorio y Teléfono debe estar formado por nueve dígitos consecutivos y sin espacios ni guiones entre las cifras.
  var input1 = document.getElementById("integerTelefono");
  var input2 = document.getElementById("integerDni");
  if(input1.value="^[1-9]\d{9}\." || input2.value==""){
    alert("No envió");
    event.preventDefault();
  }else{
    alert("Envió");
  }
}