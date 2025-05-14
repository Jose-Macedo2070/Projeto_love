// const imagens = document.querySelectorAll('.imagem');
// const botaoAnterior = document.getElementById('anterior');
// const botaoProximo = document.getElementById('proximo');
// let indiceAtual = 0;

// function mostrarImagem(indice) {
//   imagens.forEach((img, i) => {
//     img.classList.toggle('ativa', i === indice);
//   });
// }

// botaoAnterior.addEventListener('click', () => {
//   indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
//   mostrarImagem(indiceAtual);
// });

// botaoProximo.addEventListener('click', () => {
//   indiceAtual = (indiceAtual + 1) % imagens.length;
//   mostrarImagem(indiceAtual);
// });






let indiceAtual = 0;
const imagens = document.querySelectorAll('.imagem');
const botaoAnterior = document.getElementById('anterior');
const botaoProximo = document.getElementById('proximo');

function mostrarImagem(indice) {
  imagens.forEach((img, i) => {
    img.classList.toggle('ativa', i === indice);
  });
}

function proximaImagem() {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  mostrarImagem(indiceAtual);
}

function imagemAnterior() {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  mostrarImagem(indiceAtual);
}

// Timer automático
let intervalo = setInterval(proximaImagem, 2000); // Troca a cada 4 segundos

// Reinicia o timer ao clicar manualmente (opcional)
function reiniciarIntervalo() {
  clearInterval(intervalo);
  intervalo = setInterval(proximaImagem, 2000);
}

// Eventos
botaoProximo.addEventListener('click', () => {
  proximaImagem();
  reiniciarIntervalo();
});

botaoAnterior.addEventListener('click', () => {
  imagemAnterior();
  reiniciarIntervalo();
});

// Exibe a primeira imagem no início
mostrarImagem(indiceAtual);
