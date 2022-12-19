$(document).ready(function(){
    $("#revisar").on("click",function(){
        if($("#revisar").is(':checked')){
            var resultado = Number($("#numeroUno").val())+Number($("#numeroDos").val());
            $('#estoEsDiv').append("<p id='resul'>"+resultado+"</p>");
        }else{
            $('#resul').remove();
        };
    });
})