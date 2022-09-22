//Candela Lucena Reyes
function fechaActual(){
    var fecha = new Date();
    var hoy = fecha.getDate();
    var mesActual = fecha.getMonth() + 1; 
    var anyoActual = fecha.getFullYear();
    var dia = fecha.getDay();
    
    document.write(hoy+" "+mesActual+" "+anyoActual);
}