//Candela Lucena Reyes

var numerosArray = [7,8,2,9,10];
var numeroTotal = 0;

for (i in numerosArray) {
    
    if (numerosArray[i]>8) {
        numeroTotal=numerosArray[i]+numeroTotal;   
    }    
}

alert("En total da: "+numeroTotal);
