function validar (dado1, dado2) {
    if (dado1 == 'felipe' && dado2 == 1234) {
        return true;
    } else {
        return false;
    }
}

let usuario = 'felipe';
let senha = '1234';
let validacao = validar(usuario, senha);

if (validacao) {
    console.log('acesso concedido.');
} else {
    console.log('acesso negado!');
}