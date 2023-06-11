/*------ Header Nav ------*/
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', function (e) {
  e.preventDefault();
  nav.classList.toggle('on');
  document.body.style.overflow = 'hidden';
});
