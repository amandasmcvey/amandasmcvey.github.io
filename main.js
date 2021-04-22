$(document).ready(function () {
  window.addEventListener("hashchange", function (){
    if(!location.hash) {
      location.hash = "#home";
    }
  
    var pageName = location.hash.substr(1);
  
    $("#body").load(pageName + ".html");
    $("#header").html(pageName);
  });
});
