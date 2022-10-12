function onClick(){
var kolvo=document.getElementById("koltov").value;
var stoim=document.getElementById("cena").value;
var result=document.getElementById("result");
var x;
var y;
 result.innerHTML = "";
x = koltov;
y = cena;
if (x>0 && x!=NaN && y>0 && y!=NaN)
result.innerHTML=x*y;    
else result.innerText="Данные введены неверно";    
}
window.document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    var y = document.getElementById("btn");
    y.addEventListener("click", onClick);
});
