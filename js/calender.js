const hamburgerMenu = document.querySelector('.hamburger-menu');
const dropdownContent = document.querySelector('.dropdown-content');

hamburgerMenu.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});
