function formularioVacio() {
    
    //Obtener el DNI puesto
    var numerodeDNI = document.getElementById("dni").value;
    //Comprobar si el DNI esta vacio
    if (numerodeDNI.length == 0) {   
        //if(numero="")
        mensaje = "No has introducido un DNI"
        alert("No has introducido un DNI");
    }else{
        mensaje = "DNI detectado";
        document.getElementById("dni").submit;
        alert("Tu DNI es: " +numerodeDNI);
    }
    
    //Enviar si el DNI esta vacio o no
    document.getElementById("texto").innerHTML = mensaje;
}