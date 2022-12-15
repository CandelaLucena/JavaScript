$(document).ready(function(){
    $("input").click(function(){
        $("p").css("color", $(this).val());
    });
})