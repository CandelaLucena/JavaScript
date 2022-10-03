//Candela Lucena
//var x = Math.floor(Math.random()*(max-min+1)+min);
var numero = Math.floor(Math.random()*(10-0+1)+0);
alert(numero);

function comprobar(){
    if(numero == document.getElementById("numero").value ){
        alert("Es correcto");
    }else{
        alert("Es incorrecto");
    }
}