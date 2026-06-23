
function separadorDeFrutas(fruta) {
    if (fruta == 'Banana') {
        return ('A fruta é uma banana');
    }
    else {
        return ('A fruta não é uma banana');
    }
}

let verificaSeparacao = separadorDeFrutas('Maçã');
let verificaSeparacao2 = separadorDeFrutas('Banana');
console.log(verificaSeparacao);
console.log(verificaSeparacao2);