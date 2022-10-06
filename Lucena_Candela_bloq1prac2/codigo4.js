//Candela Lucena Reyes
myExternalWindow = window.open("ejercicio4.html", "myWindowName", "resizable");
var es_explorer = navigator.userAgent.toLowerCase().indexOf('mozilla') > -1;
if(es_explorer){
myExternalWindow.resizeTo(500, 500);
}else{
alert('Operacion no permitida');
}
