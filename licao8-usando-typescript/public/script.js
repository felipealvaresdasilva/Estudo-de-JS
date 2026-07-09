"use strict";
let n1 = document.getElementById('numero1');
let n2 = document.getElementById('numero2');
let botao = document.getElementById('calculo');
let result = document.getElementById('resultado');
function fazerCalculo(valor1, valor2) {
    return valor1 + valor2;
}
botao.addEventListener('click', function () {
    result.innerHTML = fazerCalculo(+n1.value, +n2.value).toString();
});
