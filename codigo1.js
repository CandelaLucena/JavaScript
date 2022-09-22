//Candela Lucena Reyes

function calculoIva(precio){
    var calculoIva = precio * 0.21;
    var precioTotal = precio + calculoIva;
    alert(precioTotal.toFixed(2));
}

precio = parseInt (prompt("Introduce un precio: ",""));
calculoIva(precio);