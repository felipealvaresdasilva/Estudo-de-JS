let Nome = document.getElementById('nome') as HTMLInputElement;
let Botao = document.getElementById('transforma') as HTMLButtonElement;
let Resultado = document.getElementById('resultado') as HTMLParagraphElement;

function primeiraLetraParaMaiusculo (valor: string): string {
    let primeiraLetra = valor.charAt(0).toUpperCase();
    return primeiraLetra+valor.substring(1);
}

Botao.addEventListener('click', function () {
Resultado.innerHTML = primeiraLetraParaMaiusculo(Nome.value);
});