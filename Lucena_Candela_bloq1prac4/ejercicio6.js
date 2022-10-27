window.onload = function(){
    var botones = document.querySelectorAll('[type="button"]');
    botones.forEach(element => {
        element.addEventListener("click", alerta);
    });
}
  
function alerta(){
    alert("Has pulsado sobre un botón");
}
  