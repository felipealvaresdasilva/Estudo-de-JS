let input = document.querySelector('#senha');
let enviar = document.querySelector('#botao');
let form = document.querySelector('form');
let erro = document.querySelector('#erro');
let erro2 = document.querySelector('#erro2');

//verifica capslock
input.addEventListener('keyup', (event) => {

    if (event.getModifierState('CapsLock')) {
        erro2.innerText = 'CapsLock ligado!'
    } else {
        erro2.innerText = '';
    }
})

//verifica senha
function verificaSenha(senha) {
    if (/\d/.test(senha) && /[a-zA-Z]/.test(senha)) {
        console.log(senha);
    }
    else {
        erro.innerText = 'A senha deve conter letras e numeros!';
    }
}

//envia senha
form.addEventListener('submit', (event) => {
    event.preventDefault()
    verificaSenha(input.value)
    input.value = ''
    input.focus() 
})