//Candela Lucena Reyes

var precio = parseInt (prompt("Dime un precio",""));
var calculoIva = precio * 0.21;
var precioTotal = precio + calculoIva;

alert(precioTotal.toFixed(2));
