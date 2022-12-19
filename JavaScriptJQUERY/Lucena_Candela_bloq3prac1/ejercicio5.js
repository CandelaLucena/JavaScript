$(document).ready(function(){
    $("p").mouseout(function(){
        $("p").addClass("clasecss");
    });

    $("p").mouseover(function(){
        $("p").removeClass("clasecss");
    });
})