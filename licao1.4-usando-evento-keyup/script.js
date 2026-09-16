const input = document.getElementById('senha');
const submit = document.getElementById('botao');

function mandaMensagem(texto) {
    let sanitizaTexto = texto.trim()
    if (sanitizaTexto.length > 0) {
        console.log(sanitizaTexto);
    }
}

input.addEventListener('keyup', (event) => {

    if (event.key == 'CapsLock') {
        alert('CapsLock apertado!!!');
    }

    if (event.key.toLowerCase() == 'enter') {
        mandaMensagem(input.value);
        input.value = '';
    }
});

submit.addEventListener('click', () => {
    mandaMensagem(input.value);
    input.value = '';
})
