//Candela Lucena Reyes
function fechaActual(){
    var hoy = fecha.getDate();
    var mesActual = fecha.getMonth() + 1; 
    var anyoActual = fecha.getFullYear();
    var dia = Date.prototype.getDay();
    
    document.write(hoy+" "+mesActual+" "+anyoActual);
}