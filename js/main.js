$(document).ready(function(){

    $(".burger_menu").click(function() {
        $(".nav_mobile").slideToggle("slow");
        $(".burger_menu").hide();
        $(".burger_menu_close").show();
    });
    $(".burger_menu_close").click(function() {
        $(".nav_mobile").slideToggle("slow");
        $(".burger_menu").show();
        $(".burger_menu_close").hide();
    });
});


