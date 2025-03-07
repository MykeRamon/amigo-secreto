//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos= []; 


function adicionarAmigo (){
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigos = document.querySelector('input').value;

    if (nomeAmigos === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nomeAmigos);

    atualizaLista();

    inputAmigo.value = '';
    inputAmigo.focus();
}

function atualizaLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo; 
        lista.appendChild(li);
    });
}

function sortearAmigo () {
    if (amigos.length === 0 ) {
        alert('Ainda não há amigos para sortear');
        return;
    }

    let indiceAleatorio = Math.floor (Math.random () * amigos.length);

    let amigosSoreados = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML =`<li> ${amigosSoreados}`;

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('button-add').addEventListener('click', adicionarAmigo);
        document.getElementById('button-draw').addEventListener('click', sortearAmigo);
    });
} 



