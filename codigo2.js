//Candela Lucena Reyes

var dia=prompt("Introduce un mes:","");
switch(dia){
    case "diciembre":
    case "enero":
    case "febrero":
    document.write("Es invierno");
break;
    case "marzo":
    case "abril":
    case "mayo":
    document.write("Es primavera");
break;
    case "julio":
    case "agosto":
    case "septiembre":
    document.write("Es verano");
break;
    case "octubre":
    case "noviembre":
    case "diciembre":
    document.write("Es otoño");
break;
    default:
    document.write("???");
break;
}