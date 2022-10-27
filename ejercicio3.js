window.onload = function(){
    var boton = document.getElementById("boton");
    var div = document.getElementById("div");
    boton.addEventListener("click", llamada);
    div.addEventListener("click", llamada);
}
      
function llamada(){
    alert("Clickeaste");
    event.stopPropagation();
}
  