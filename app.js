let amigos = [];
let i = 0;
function adicionarAmigo(){
    nome = document.getElementById('amigo').value;

    if(nome.trim() == '') {
        alert('Por favor, insira um nome.');
    } 
    
    amigos.push(nome);
    document.getElementById('amigo').value = '';

    exibirAmigos(amigos);
}

function exibirAmigos(amigos){
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){
        document.getElementById('listaAmigos').innerHTML += `<li>${amigos[i]}</li>`;
    }
}