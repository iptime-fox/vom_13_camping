/*------ Header Nav ------*/
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', function (e) {
  e.preventDefault();
  nav.classList.toggle('on');
  document.body.style.overflow = 'hidden';
});

/*------ Keyword search ------*/
const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', function () {
  const keyValue = document.querySelector('.theme').value;
  if (keyValue == '' || null || undefined) {
    alert('키워드를 입력하세요');
  } else {
    location.href = `/panda_camping/pages/keyword.html?keyword=${keyValue}`;
  }
});

const searchMe = document.querySelector('.search-me');

searchMe.addEventListener('click', function () {
  location.href = '/panda_camping/pages/myLocation.html?radius=30000';
});
