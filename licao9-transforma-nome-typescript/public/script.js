"use strict";
let Nome = document.getElementById('nome');
let Botao = document.getElementById('transforma');
let Resultado = document.getElementById('resultado');
function primeiraLetraParaMaiusculo(valor) {
    let primeiraLetra = valor.charAt(0).toUpperCase();
    return primeiraLetra + valor.substring(1);
}
Botao.addEventListener('click', function () {
    Resultado.innerHTML = primeiraLetraParaMaiusculo(Nome.value);
});
