window.addEventListener("hashchange", function (){
  var contentDiv = document.getElementById("app");
  contentDiv.innerHTML = location.hash;
});