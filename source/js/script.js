// Бургерное меню

const mainNav = document.querySelector('.main-nav');
const menuButtonOpen = document.querySelector('.main-nav__toggle');

menuButtonOpen.addEventListener('click', function () {
  mainNav.classList.toggle('main-nav--closed');
 });


// Форма отзыва

const form = document.querySelector('.review__form');
const nameInput = form.querySelector('#name');
const surnameInput = form.querySelector('#surname');
const patronymicInput = form.querySelector('#patronymic');
const numberInput = form.querySelector('#number');
const emailInput = form.querySelector('#email');
const reviewTextInput = form.querySelector('#review-text');
const formButton = form.querySelector('.form__button');

function clearInput (evt) {
  evt.target.value = '';
  evt.target.placeholder = '';
}

form.addEventListener('click', clearInput);


