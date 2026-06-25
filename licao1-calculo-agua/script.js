let ml = 35;
let form = document.getElementById("formulario");
let valorInputPeso = document.getElementById("peso");

form.addEventListener("submit", function (calcAgua) {
    calcAgua.preventDefault();

    let peso = Number(valorInputPeso.value);

    let resultado = ml * peso;
    return alert(`Você deve tomar ${resultado} ml por dia`);
});