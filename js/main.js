//$( "#burger_menu" ).click(function() {
//    $("#burger_menu").hide()
//});

$(document).ready(function(){
    $("#burger_menu").click(function(){
        $(this).find("#burger_menu").hide();
    })
});

$("div").click(function () {
    $("div").slideToggle("slow");
});

