/*------ Header Nav ------*/
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', function (e) {
  e.preventDefault();
  nav.classList.toggle('on');
  document.body.style.overflow = 'hidden';
});

/*------- LOADER EFFECT -------*/
$(function () {
  const isPreloader = $('.preloader');
  if (isPreloader.length > 0) {
    $('.js-preloader').preloadinator({
      minTime: 1500,
      animation: 'fadeOut',
      animationDuration: 400,
    });
  }
});
