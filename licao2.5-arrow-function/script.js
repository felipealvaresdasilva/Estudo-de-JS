ItemCampo = document.getElementById('campo-item');
BotaoCriar = document.getElementById('criar');
Paragrafo = document.getElementById('itens');

function recebeCampo () {
return ItemCampo.value;
} 

BotaoCriar.addEventListener('click', () => {
    Paragrafo.innerHTML += '- ' + recebeCampo() + '<br>';
});