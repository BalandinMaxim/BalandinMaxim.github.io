var document;
var alert;
var console;

function onClick() {
    var a;
    var x;
    var y;
    a = document.getElementById("result");
    a.innerHTML = "";
    x = document.getElementById("kol_tov").value;
    y = document.getElementById("price").value;
    if ((/\D/.test(x)) || (/\D/.test(y))) {
        alert("!!!Допускаются только цифры: 0-9!!!");
        return;
    }
    a.innerHTML = x * y;

}

document.addEventListener("DOMContentLoaded", function (event) {
    var b = document.getElementById("btn");
    console.log(event.type + " на " + event.currentTarget);
    b.addEventListener("click", onClick);

});
