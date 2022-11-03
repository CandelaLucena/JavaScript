window.onload = function(){
  var formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", comprobar);
}
  
function comprobar(event){
  //Para hacerlo de forma general seria con TagName y asignar el evento a cada input
  var input1 = document.getElementById("stringNombre");
  var input2 = document.getElementById("stringApellido");
  var input3 = document.getElementById("integerDni");
  if(input1.value=="" || input2.value=="" || input3.value==""){
    alert("No envió");
    event.preventDefault();
  }else{
    alert("Envió");
  }
}