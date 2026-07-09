let n1 = document.getElementById('numero1') as HTMLInputElement;
let n2 = document.getElementById('numero2') as HTMLInputElement;
let botao = document.getElementById('calculo') as HTMLButtonElement;
let result = document.getElementById('resultado') as HTMLParagraphElement;

function fazerCalculo(valor1: number, valor2: number) {
    return valor1 + valor2;
}

botao.addEventListener('click', function () {
    result.innerHTML = fazerCalculo(+n1.value, +n2.value).toString();
});