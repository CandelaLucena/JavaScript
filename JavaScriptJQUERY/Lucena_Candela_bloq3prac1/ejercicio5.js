$(document).ready(function(){
    $("p").mouseover(function(){
        $("p").addClass("clasecss");
    });

    $("p").mouseout(function(){
        $("p").removeClass("clasecss");
    });
})