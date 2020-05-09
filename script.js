var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("body");
var h3=document.getElementsByTagName("h3")[0];
function generate(){
body.style.background="linear-gradient(to right,"
+color1.value+","+color2.value+")";
h3.innerHTML = body.style.background+";";
}