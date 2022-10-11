var document;
var alert;
var console;

function onClick() {
    var r;
    var a;
    var b;
    r = document.getElementById("result");
    r.innerHTML = "";
    a = document.getElementById("price").value;
    b = document.getElementById("kol_tov").value;
    if ((/\D/.test(a)) || (/\D/.test(b))) {
        alert("!!!Допускаются только цифры: 0-9!!!");
        return;
    }
    r.innerHTML = a * b;

}

document.addEventListener("DOMContentLoaded", function (event) {
    var b = document.getElementById("btn");
    console.log(event.type + " на " + event.currentTarget);
    b.addEventListener("click", onClick);

});
