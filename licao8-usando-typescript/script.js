"use strict";
let Nome = document.getElementById('nome');
let Sobrenome = document.getElementById('sobrenome');
let botao = document.getElementById('juntar');
let result = document.getElementById('resultado');
function juntaNomes(valor1, valor2) {
    return `O nome da pessoa é ${valor1} ${valor2}`;
}
botao.addEventListener('click', function () {
    result.innerHTML = juntaNomes(Nome.value, Sobrenome.value);
});
