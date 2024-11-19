import { fotos } from "../data/imagens.js";

document.addEventListener("DOMContentLoaded", () => {
  const galeriaContainer = document.getElementById("galeriaFotos");

  fotos.forEach((foto) => {
    const img = document.createElement("img");
    img.src = foto.src;
    img.alt = foto.alt;
    img.loading = "lazy";
    img.classList.add("gallery-img");

    // Adiciona evento de clique para abrir o modal com a imagem e informações
    img.addEventListener("click", () => {
      abrirModal(foto);
    });

    galeriaContainer.appendChild(img);
  });

  // Função para abrir o modal com a imagem e informações
  function abrirModal(foto) {
    const modalContent = document.querySelector(".modal-content");

    setTimeout(() => {
      modalContent.style.transform = "translateY(0)";
    }, 10);

    const modal = document.querySelector(".modal");
    const modalImg = document.querySelector(".modal-image");
    const modalCaption = document.querySelector(".modal-caption");

    modal.style.display = "flex";
    modalImg.src = foto.src;
    modalImg.alt = foto.alt;
    modalCaption.innerHTML = `
    <p class="modal-info">${foto.descricao}</p>
    <p class="modal-author">${foto.autor}</p>`;
  }

  // Fecha o modal ao clicar no "X" ou fora da imagem
  const modal = document.querySelector("#myModal");
  const closeModal = document.querySelector(".close");

  closeModal.addEventListener("click", () => {
    const modalContent = document.querySelector(".modal-content");

    modalContent.style.transform = "translateY(100%)";

    setTimeout(() => {
      modal.style.display = "none";
    }, 280);
  });

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
