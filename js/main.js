const key =
  'zrXylF6VKWHWjriRP8ACOpQfzkIFRWKROWwEgn3DtXZSQYmjf%2FkBii%2FzKwKx%2FkVAMr4skXHZlxrDZGIlyuUKrA%3D%3D';
/*------ Recommended Slider API data ------*/

const campApi = document.querySelector('.camp-api');

const getCampData = async () => {
  await fetch(
    `https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=30&pageNo=1&MobileOS=ETC&MobileApp=panda%20camping&serviceKey=${key}&_type=json`
  )
    .then((response) => response.json())
    .then((json) => {
      let campData;
      json.response.body.items.item.map((d, i) => {
        campData = `
        <div class="swiper-slide">
          <div class="img-wrapper">
              <img src="${d.firstImageUrl}" alt="">
          </div>
          <p>${d.facltNm}</p>
        </div>
        `;
        campApi.innerHTML += campData;
      });
    })
    .catch((error) => console.log(error));
};

getCampData();

/*------ Recommended Slider API data ------*/
const mapSwiper = new Swiper('.map-swiper', {
  loop: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesPerView: 1,
});

const myLocation = document.querySelector('.my-location');

const getMyData = async () => {
  await fetch(
    `https://apis.data.go.kr/B551011/GoCamping/locationBasedList?numOfRows=30&pageNo=1&MobileOS=ETC&MobileApp=panda_camping&serviceKey=${key}&_type=json&mapX=127.097295&mapY=37.201274&radius=20000`
  )
    .then((response) => response.json())
    .then((json) => {
      let myData;
      json.response.body.items.item.map((d, i) => {
        myData = `
        <div class="swiper-slide my-location">
              <div class="arr-wrapper">
                <i class="ri-arrow-down-s-line"></i>
              </div>
              <div class="img-wrapper">
                <img src="${d.firstImageUrl}" alt="">
              </div>
              <div class="text-wrapper">
                <p>${d.facltNm}</p>
                <div class="adr-wrapper">
                  <i class="ri-map-pin-2-line"></i>
                  <span>${d.addr1}</span>
                </div>
                <div class="tel-wrapper">
                  <i class="ri-phone-line"></i>
                  <span>${d.tel}</span>
                </div>
              </div>
              <div class="more-btn"><a href="#">상세보기</a></div>
            </div> 
        `;
        myLocation.innerHTML += myData;
      });
    })
    .catch((error) => console.log(error));
};

getMyData();

/*------ Recommended Slider ------*/

const recSwiper = new Swiper('.recommended-swiper', {
  loop: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesPerView: 3,
  spaceBetween: 10,
});
