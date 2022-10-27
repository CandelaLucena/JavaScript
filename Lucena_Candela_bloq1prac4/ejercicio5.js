window.onload = function(){
  var input = document.getElementById("dni");
  input.addEventListener("keydown", comprobar);
}

function comprobar(evento){
  if(isNaN(evento.key)){
    evento.preventDefault();
  }else{
  }
}