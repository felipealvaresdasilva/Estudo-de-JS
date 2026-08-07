const h1 = document.createElement('h1');
h1.innerText = "Titulo criado com java script";
document.body.prepend(h1);

const h2 = document.createElement('h2');
h2.innerText = "Titulo 2 criado com java script";
document.body.appendChild(h2);

const listaCarros = ["ferrari", "lamborguini", "audi"];
const ul = document.querySelector('ul');

listaCarros.forEach(carro => {
    const li = document.createElement('li');
    li.innerText = carro;
    ul.appendChild(li);
})