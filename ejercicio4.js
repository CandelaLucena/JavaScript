window.onload = function(){
    var opcionUno = document.getElementById("negrita");
    opcionUno.addEventListener("click", negrita);

    var opcionDos = document.getElementById("italica");
    opcionDos.addEventListener("click", italica);
}

function negrita(){
    var parrafo = document.getElementsByTagName("p");
    if (document.getElementById("negrita").checked) {
        parrafo[0].style.fontWeight = "bold";
    }else{
        parrafo[0].style.fontWeight = "";
    }
    
}
function italica(){
    var parrafo = document.getElementsByTagName("p");
    if (document.getElementById("italica").checked) {
        parrafo[0].style.fontStyle = "italic";
    }else{
        parrafo[0].style.fontStyle = "";
    }
}