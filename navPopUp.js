
var btn = document.getElementsByTagName("button")[0];
  btn.addEventListener("click", function() {
    var addInner = document.getElementById("menu").innerHTML;
    if(document.getElementById("showNav").innerHTML == ""){
    document.getElementById("showNav").innerHTML = addInner;
    }else{
    document.getElementById("showNav").innerHTML = "";
    }
  });