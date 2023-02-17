// Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  if (url.includes(link.href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar Itens do orçamento

const parameteros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parameteros.forEach(ativarProduto);

// Peguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const resposta = document.getElementById(
    pergunta.getAttribute("aria-controls")
  );
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
  resposta.classList.toggle("ativo");
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de Bicicletas

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImage(event) {
  const img = event.currentTarget;
  if(matchMedia('(min-width: 1000px)').matches) {
  galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click",trocarImage)
}

galeria.forEach(eventosGaleria);

// Animação
if(window.SimpleAnime) {
new SimpleAnime();
}
