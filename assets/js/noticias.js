document.addEventListener("DOMContentLoaded", function () {
  const cargarMas = document.querySelector(".center-title");
  cargarMas.addEventListener("click", function () {
    const hiddenCards = document.querySelectorAll(".noticia-card.hidden");
    for (let i = 0; i < hiddenCards.length && i < 4; i++) {
      hiddenCards[i].classList.remove("hidden");
    }
    // Si no hay más noticias ocultas, oculta el botón "Cargar más noticias"
    if (document.querySelectorAll(".noticia-card.hidden").length === 0) {
      cargarMas.style.display = 'none';
    }
  });
});