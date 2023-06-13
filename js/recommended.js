const key =
  'zrXylF6VKWHWjriRP8ACOpQfzkIFRWKROWwEgn3DtXZSQYmjf%2FkBii%2FzKwKx%2FkVAMr4skXHZlxrDZGIlyuUKrA%3D%3D';

/*------ Recommended Slider API data ------*/

const campApi = document.querySelector('.camp-api');
const getCampData = async () => {
  await fetch(
    `https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=50&pageNo=1&MobileOS=ETC&MobileApp=panda%20camping&serviceKey=${key}&_type=json`
  )
    .then((response) => response.json())
    .then((json) => {
      let campData;

      json.response.body.items.item.map((d, i) => {
        campData = `
        <div class="swiper-slide">
          <a href="/panda_camping/pages/detail.html?keyword=${d.facltNm}&lon=${d.mapX}&lat=${d.mapY}">
            <div class="img-wrapper">
                <img src="${d.firstImageUrl}" alt="campsite" onerror="this.src='/panda_camping/images/onerror.png'">
            </div>
            <p>${d.facltNm}</p>
          </a>
        </div>
        `;
        campApi.insertAdjacentHTML('beforeend', campData);
      });
    })
    .catch((error) => console.log(error));
};

getCampData();

/*------ Recommended Slider ------*/
const recSwiper = new Swiper('.recommended-swiper', {
  loop: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesPerView: 3,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
