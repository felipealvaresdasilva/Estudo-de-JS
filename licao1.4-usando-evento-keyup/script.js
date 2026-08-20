const input = document.getElementById('senha');
const textoAviso = document.getElementById('aviso');

textoAviso.style.display = 'none';

input.addEventListener('keyup', (event) => {
    if (event.key.toLowerCase() == 'capslock') {

        if (textoAviso.style.display == 'none') {

            textoAviso.style.display = 'block';
        }

        else {
            textoAviso.style.display = 'none';
        }
    }
});