const ul = document.querySelector('ul');
const Carros = ['Ferrari', 'Camaro', 'Limosine'];

Carros.forEach(carro => {
    const li = document.createElement('li');
    li.innerText = carro;
    ul.appendChild(li);
});