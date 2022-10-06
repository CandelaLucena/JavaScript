//Candela Lucena Reyes
var mes = prompt("Dime un mes","");
mes = mes.toLowerCase();
var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre"
, "octubre", "noviembre", "diciembre"];


    if  (mes==meses[11]||mes==meses[0]||mes==meses[1]){
        alert("invierno");
    }if (mes==meses[2]||mes==meses[3]||mes==meses[4]){
        alert("primavera");
    }if (mes==meses[5]||mes==meses[6]||mes==meses[7]){
        alert("verano");
    }if (mes==meses[8]||mes==meses[9]||mes==meses[10]){
        alert("otoño")
    }

