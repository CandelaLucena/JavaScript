var cadena = prompt("Dime una frase","");
var cadena1 = cadena;
var cadena2 = cadena;
var cadena3 = cadena;
var contarCadena = cadena3.length;

document.write("La cadena mide: "+contarCadena+"<br>");

document.write("La cadena en minuscula: "+cadena1.toLowerCase()+"<br>");

document.write("La cadena en mayuscula: "+cadena1.toUpperCase()+"<br>");

var arrayCadena = cadena2.split(" ");
document.write("La cadena normal: <br>");
for (i in arrayCadena){
    document.write(arrayCadena[i]+"<br>");
}

var arrayCadena = arrayCadena.reverse();
document.write("La cadena al reves: <br>");
for(i in arrayCadena){
    document.write(arrayCadena[i]+"<br>");
}