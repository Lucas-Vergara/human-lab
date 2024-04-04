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
