// Importa os artigos (simule a importação em um ambiente real)
import { artigos } from "../data/artigos.js";

// Variável para controlar o índice do próximo artigo a ser renderizado
let indiceAtual = 0;

// Função para renderizar um artigo por vez
function renderizarProximoArtigo() {
  const container = document.querySelector(".artigos-container");

  if (indiceAtual < artigos.length) {
    const artigo = artigos[indiceAtual];

    const artigoCard = document.createElement("article");
    artigoCard.classList.add("artigo-card");

    const titulo = document.createElement("h3");
    titulo.textContent = artigo.titulo;

    const descricao = document.createElement("p");
    descricao.textContent = artigo.descricao;

    const imagem = document.createElement("img");
    imagem.src = artigo.img;

    const button = document.createElement("a");
    button.classList.add("button-artigo");
    button.textContent = "Saiba mais";

    // Adiciona os elementos criados ao card
    artigoCard.appendChild(imagem);
    artigoCard.appendChild(titulo);
    artigoCard.appendChild(descricao);
    artigoCard.appendChild(button);
    container.appendChild(artigoCard);

    // Incrementa o índice para renderizar o próximo artigo
    indiceAtual++;

    // Chama a função novamente após um pequeno intervalo de tempo
    setTimeout(renderizarProximoArtigo, 500);
  }
}

// Configuração do IntersectionObserver
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        renderizarProximoArtigo();
        observer.disconnect(); // Desconecta após iniciar a renderização
      }
    });
  },
  {
    root: null, // Usa o viewport como root
    rootMargin: "100px", // Gatilho antes de o elemento estar visível
    threshold: 0, // Quando qualquer parte do elemento entra na viewport
  }
);

// Observa o elemento alvo
const target = document.querySelector(".artigos-trigger");
observer.observe(target);
