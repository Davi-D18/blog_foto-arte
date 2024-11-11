import { albuns } from "../../../data/albuns.js";

// Variável para controlar o índice do próximo álbum a ser renderizado
let indiceAtual = 0;

// Função para renderizar um álbum por vez
function renderizarProximoAlbum() {
  const container = document.querySelector(".album-container");

  if (indiceAtual < albuns.length) {
    const album = albuns[indiceAtual];

    // Criação do card do álbum
    const albumCard = document.createElement("article");
    albumCard.classList.add("album-card");

    // Adicionando o conteúdo ao card do álbum
    albumCard.innerHTML = `
      <h3 class="album-title">${album.titulo}</h3>
      <p class="album-author">Autor: ${album.autor}</p>
      <div class="album-preview">
        ${album.imagens
          .map((img) => `<img src="${img}" alt="Foto do álbum" />`)
          .join("")}
      </div>
      <p class="album-description">${album.descricao}</p>
      <a href="${
        album.link
      }" target="_blank" class="view-album-btn">Ver álbum completo</a>
    `;

    // Adicionando o card do álbum ao container
    container.appendChild(albumCard);

    // Incrementando o índice para renderizar o próximo álbum
    indiceAtual++;

    // Chama a função novamente após um pequeno intervalo de tempo
    setTimeout(renderizarProximoAlbum, 700); // 500 ms entre cada álbum
  }
}

renderizarProximoAlbum();
