const btnMudaCor = document.getElementById('mudaCor');
const quadrado = document.querySelector('.quadrado');

btnMudaCor.addEventListener('click', ()=> {
    quadrado.style.backgroundColor = 'red';
});

const btnGirar = document.getElementById('girar');
const quadrado2 = document.querySelector('.quadrado2');

btnGirar.addEventListener('click', ()=> {
    quadrado2.classList.toggle('ativo');
});