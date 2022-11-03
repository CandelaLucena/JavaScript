window.onload = function(){
    var boton = document.getElementById("botonID");
    var div = document.getElementById("divID");
    boton.addEventListener("click", llamada);
    div.addEventListener("click", llamada);
}
      
function llamada(event){
    alert("Clickeaste");
    event.stopPropagation();
}
  