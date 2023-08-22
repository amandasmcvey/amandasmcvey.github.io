$(document).ready(function () {
    navigate();

    $(".nav .nav-link").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).addClass("active");
    });
});

$(window).on('hashchange', navigate);

function navigate(){
    if(location.hash){
        var pageName = location.hash.substr(1);

        $("#body").load(pageName + ".html");
        $("#header").html(pageName.charAt(0).toUpperCase() + pageName.slice(1));
    }
}

