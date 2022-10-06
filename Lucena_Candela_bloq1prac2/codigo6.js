//Candela Lucena
function horaActual(){
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    if(minutos<10){
        var minutos = "0"+minutos;
    }

    if((hora >= 6) && (hora <= 14)){
        document.write("Buenos dias, son las: "+hora+":"+minutos);
    }else if((hora > 14) && (hora <= 20)){
        document.write("Buenas tardes, son las: "+hora+":"+minutos);
    }else{
        document.write("Buenas noches, son las: "+hora+":"+minutos);
    }
}