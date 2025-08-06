let amigos = [];

function adicionarAmigo(){
    nome = document.getElementById('amigo').value;

    if(nome.trim() == '') {
        alert('Por favor, insira um nome.');
    } 
    
    amigos.push(nome);
    document.getElementById('amigo').value = '';
}
