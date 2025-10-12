function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8)return true;
    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function interes(){
var valor = document.getElementById("cantidad").value;

    var parseo = parseFloat(valor);
alert(parseo);
    var interes = parseo * 0.085;
alert(interes);
    var total = parseo + interes;
alert(total);
    document.getElementById("saldoi").value = "$ " + total;
}