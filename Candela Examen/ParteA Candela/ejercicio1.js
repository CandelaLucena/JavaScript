window.onload = function(){
    var boton = document.getElementById("validarClave");
    boton.addEventListener("click", crearValidacionClave);   
}
 
function crearValidacionClave(){
    document.getElementById("formulario").innerHTML+='<input type="text" name="claveValidada" id="clave">';
    document.getElementById("formulario").innerHTML+='<button id="validarClaveDos">Validar Clave</button>';

    var botonDos = document.getElementById("validarClaveDos");
    botonDos.addEventListener("click", comprobar);
}

function comprobar(){
    var input1 = document.getElementById("clave");
    
    if((/^\d{9}$/.test(input1.value))){
        alert("La clave es correcta");
        document.getElementById("formulario").submit();
    }else{
        alert("La clave es incorrecta")  
        document.getElementById("clave").reset();
        document.getElementById("clave").focus();
    }
}