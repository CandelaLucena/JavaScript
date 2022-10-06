//Candela Lucena Reyes
function fechaActual(){
    var fecha = new Date();
    var hoy = fecha.getDate();
    var mesActual = fecha.getMonth() + 1; 
    var anyoActual = fecha.getFullYear();
    var dia = fecha.getDay();
    var arrayDia = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    var arrayMes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

    document.write(arrayDia[dia]+", "+hoy+" de "+arrayMes[mesActual-1]+" de "+anyoActual);
}
