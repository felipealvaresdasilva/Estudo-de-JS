ListaCarros = ['Ferrari', 'Lamborguini', 'Audi', 'Mercedes','Fiat'];

const CarrosMaiusculo = ListaCarros.map((carros)=> carros.toUpperCase());
const CarrosMenos4Caracteres = ListaCarros.filter((carros)=> carros.length >= 5);

console.log(CarrosMaiusculo);
console.log(CarrosMenos4Caracteres);