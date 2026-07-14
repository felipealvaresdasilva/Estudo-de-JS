let botao = document.getElementById('gerar');

function gerarNumeroAleartorio() {
    let aleartorio = Math.floor(Math.random() * 10);
    return aleartorio;
}

botao.addEventListener('click', function () {
    alert(gerarNumeroAleartorio())
});