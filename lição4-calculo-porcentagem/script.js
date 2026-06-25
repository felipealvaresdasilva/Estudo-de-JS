function calcPct(valor1, valor2) {
    let pct = (valor2 / valor1) * 100;
    return pct
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);