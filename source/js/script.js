const mainNav = document.querySelector('.main-nav');
const menuButtonOpen = document.querySelector('.main-nav__toggle');

menuButtonOpen.addEventListener('click', function () {
  mainNav.classList.toggle('main-nav--closed');
 });



