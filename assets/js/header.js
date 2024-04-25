document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger-icon');
  const navMenu = document.querySelector('.mobile-nav');

  hamburger.addEventListener('click', function () {
    const isDisplayed = navMenu.style.display === 'block';
    navMenu.style.display = isDisplayed ? 'none' : 'block';
    navMenu.style.width = isDisplayed ? '0' : '100%';
    navMenu.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(function (dropdown) {
    dropdown.querySelector('.dropbtn').addEventListener('click', function (event) {
      event.preventDefault(); // Evita que el navegador siga el href
      var currentDropdown = dropdown.querySelector('.dropdown-content');
      // Cierra todos los dropdowns que estén abiertos
      document.querySelectorAll('.dropdown-content').forEach(function (drop) {
        if (drop !== currentDropdown) {
          drop.style.display = 'none';
        }
      });
      // Alterna el estado visible del dropdown actual
      currentDropdown.style.display = currentDropdown.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Cierra el dropdown si se hace clic en cualquier lugar fuera de él
  window.addEventListener('click', function (event) {
    if (!event.target.matches('.dropbtn')) {
      document.querySelectorAll('.dropdown-content').forEach(function (dropdown) {
        dropdown.style.display = 'none';
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var dropdownDivs = document.querySelectorAll('.dropdown-content div');
  dropdownDivs.forEach(function (div) {
    div.addEventListener('click', function () {
      window.location.href = div.getAttribute('data-href'); // Redirige a la URL almacenada en data-href
    });
  });
});
