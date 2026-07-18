let lista = document.querySelectorAll('li');
const btnMiusculo = document.getElementById('maiusculo');
const btnMinusculo = document.getElementById('minusculo');

btnMiusculo.addEventListener('click', () => {
    lista.forEach(item => {
        const texto = item.innerText.toUpperCase();
        item.innerText = texto;
    });
});

btnMinusculo.addEventListener('click', () => {
    lista.forEach(item => {
        const texto = item.innerText.toLowerCase();
        item.innerText = texto;
    });
});