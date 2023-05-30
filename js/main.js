/*------ Recommended Slider ------*/
const recSwiper = new Swiper('.recommended-swiper', {
  loop: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesPerView: 3,
  spaceBetween: 10,
});

/*------ Map page Slider ------*/
const mapSwiper = new Swiper('.map-swiper', {
  loop: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesPerView: 1,
});

/*------ 페이지 이동 ------*/
// const searchMe = document.querySelector('.search-me');
// searchMe.addEventListener('click', function () {
//   Window.location = '/panda_camping/pages/map.html';
// });
