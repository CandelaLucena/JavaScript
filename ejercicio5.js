window.onlodad = function(){
  var input = document.getElementById("dni");
  input.addEventListener("Keypress", comprobar);
}
function comprobar(evento){
  if(evento.key){

  }else{
    evento.preventDefault();
  }
}