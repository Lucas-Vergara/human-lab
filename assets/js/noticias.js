document.addEventListener("DOMContentLoaded", function () {
  const cargarMas = document.querySelector(".center-title");
  if (!cargarMas) {
    return;
  }
  cargarMas.addEventListener("click", function () {
    const hiddenCards = document.querySelectorAll(".noticias-card.hidden");
    for (let i = 0; i < hiddenCards.length && i < 4; i++) {
      hiddenCards[i].classList.remove("hidden");
    }
    // Si no hay más noticias ocultas, oculta el botón "Cargar más noticias"
    if (document.querySelectorAll(".noticias-card.hidden").length === 0) {
      cargarMas.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Seleccionar todos los elementos li con la clase 'noticias-card'
  const newsCards = document.querySelectorAll('.noticias-card');

  newsCards.forEach(card => {
    card.addEventListener('click', function (event) {
      // Prevenir que se dispare el evento si el clic ya es sobre el enlace
      if (event.target.tagName !== 'A') {
        // Buscar el elemento <a> dentro del <li> clickeado
        const link = card.querySelector('a');
        if (link) {
          // Redireccionar a la URL del enlace
          window.location.href = link.href;
        }
      }
    });
  });
});