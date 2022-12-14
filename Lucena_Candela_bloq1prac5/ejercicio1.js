window.onload = function(){
  document.getElementById("stringNombre").focus();

  var opciones = document.getElementById("opcionesAficcion");
  opciones.addEventListener("change", listar)

  var formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", comprobar);

  var reseteo = document.getElementById("botonReseteo");
  reseteo.addEventListener("click", resetear);

  var texto = document.getElementById("parrafo");
  texto.addEventListener("keydown",limite)
}

function listar(event){
  //longitud de la lista,número del índice seleccionado y el valor del índice
  var lista = document.getElementsByTagName("option");

  alert("La lista mide: "+lista.length+
        "Has elegido la opcion: "+this.value+
        "El valor del indice es: "+event.target.selectedIndex);
}

function comprobar(event){
  //DNI obligatorio y Teléfono debe estar formado por nueve dígitos consecutivos y sin espacios ni guiones entre las cifras.
  var input1 = document.getElementById("integerTelefono");
  var input2 = document.getElementById("integerDni");
  //comprobar si la expresion esta bien o mal
  if( !(/^\d{9}$/.test(input1.value)) || input2.value==""){
    alert("No envió");
    event.preventDefault();
  }else{
    alert("Envió");
  }
}

function resetear(event){
  //resetea el formulario, necesita getelementbyid del formulario
  document.getElementById("formulario").reset();
}

function limite(event){
  //comprueba el limite de caracteres
  if((this.value.length)<151 || event.keyCode==8 || event.keyCode==46){

  }else{
    event.preventDefault();
  }
}