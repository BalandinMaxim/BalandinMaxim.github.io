var document;
var alert;
var console;

function onClick() {
    var a;
    var f1;
    var f2;
    a = document.getElementById("result");
    a.innerHTML = "";
    f1 = document.getElementById("kol_tov").value;
    f2 = document.getElementById("price").value;
    if ((/\D/.test(f1)) || (/\D/.test(f2))) {
        alert("!!!Допускаются только цифры: 0-9!!!");
        return;
    }
    a.innerHTML = f1 * f2;

}

document.addEventListener("DOMContentLoaded", function (event) {
    var b = document.getElementById("btn");
    console.log(event.type + " на " + event.currentTarget);
    b.addEventListener("click", onClick);

});
