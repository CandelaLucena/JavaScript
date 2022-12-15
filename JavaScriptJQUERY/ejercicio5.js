$(document).ready(function(){
    $("p").mouseout(function(){
        $("p").css("font-size", "12pt");
    });

    $("p").mouseover(function(){
        $("p").css("font-size", "16pt");
    });
})