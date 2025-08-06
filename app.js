let amigos = [];
let i = 0;
function adicionarAmigo(){
    nome = document.getElementById('amigo').value;

    if(nome.trim() == '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nome);
        document.getElementById('amigo').value = '';
        exibirAmigos(amigos);
    }
}

function exibirAmigos(amigos){
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){
        document.getElementById('listaAmigos').innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert('Adicione amigos para conseguir realizar o sorteio!');
    } else if(amigos.length == 1){
        alert('Adicione mais de uma pessoa para conseguir realizar o sorteio!');
    } else {
        amigoSorteado = Math.floor(Math.random() * amigos.length); 
        document.getElementById('resultado').innerHTML = `<li>O amigo secreto sorteado é: ${amigos[amigoSorteado]}</li>`;
    }
}