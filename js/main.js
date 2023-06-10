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

/*------ Keyword search ------*/
const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', function () {
  const keyValue = document.querySelector('.theme').value;
  location.href = `/panda_camping/pages/detail.html?keyword=${keyValue}`;
});
