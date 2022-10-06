//Candela Lucena Reyes

var numero = 0;
var numerosArray = [5];
var numeroTotal = 0;

for (var i = 0; i < 5; i++) {
    numero= parseInt (prompt("Introduce un numero:",""));
    numerosArray[i]=numero;

    if (numerosArray[i]>100) {
        document.write(numerosArray[i]+" es mayor que 100"+"<BR>");
    } else {
        document.write(numerosArray[i]+" no es mayor que 100"+"<BR>");
    }
    numeroTotal=numerosArray[i]+numeroTotal;
}

document.write("En total da: "+numeroTotal+"<BR>");