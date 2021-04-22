$(document).ready(function () {
  navigate();
});

$(window).on('hashchange', navigate);

function navigate(){
  if(location.hash){
    var pageName = location.hash.substr(1);

    $("#body").load(pageName + ".html");
    $("#header").html(pageName);
  }
}