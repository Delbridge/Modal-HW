var model = document.getElementById("model");
var modelPop = document.getElementsByClassName("modelPop");
var close = document.getElementsByClassName("close");

setTimeout(function(){
    model.style.display="block";
},3000)

    close.onclick=function(){
    model.style.display="none";
}