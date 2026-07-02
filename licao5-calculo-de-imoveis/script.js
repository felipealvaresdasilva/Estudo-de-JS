function calcularImovel(valorM, valorQ) {
    let calcM = valorM * 1500;

    if (valorQ == 1) {
        return calcM;
    }
    else if (valorQ == 2) {
        return calcM * 1.2;
    } else if (valorQ == 3) {
        return calcM * 1.5;
    }
}

let metragem = 100;
let quartos = 2;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa tem ${metragem}m² e tem ${quartos} quartos. Portanto, a casa custa R$ ${preco}`);