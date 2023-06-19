const key =
  'zrXylF6VKWHWjriRP8ACOpQfzkIFRWKROWwEgn3DtXZSQYmjf%2FkBii%2FzKwKx%2FkVAMr4skXHZlxrDZGIlyuUKrA%3D%3D';
/*------ myLocation Slider API data ------*/

const myLocation = document.querySelector('.my-location');
const newURL1 = window.location.href;
const radius = newURL1.split('=')[1];

navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  initMap(lat, long);

  const getMyData = async () => {
    await fetch(
      `https://apis.data.go.kr/B551011/GoCamping/locationBasedList?numOfRows=30&pageNo=1&MobileOS=ETC&MobileApp=panda_camping&serviceKey=${key}&_type=json&mapX=${long}&mapY=${lat}&radius=${radius}`
    )
      .then((response) => response.json())
      .then((json) => {
        const itemJson = json.response.body.items.item;
        let myData;

        itemJson.forEach(function (d, i) {
          myData = `
        <div class="swiper-slide">
              <div class="img-wrapper">
                <a href="/panda_camping/pages/detail.html?keyword=${d.facltNm}">
                  <img src="${d.firstImageUrl}" alt="campsite" onerror="this.src='/panda_camping/images/panda_onerror.png'">
                </a>
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
              <div class="more-btn"><a href="/panda_camping/pages/detail.html?keyword=${d.facltNm}&lon=${d.mapX}&lat=${d.mapY}">상세보기</a></div>
            </div> 
            `;
          myLocation.insertAdjacentHTML('beforeend', myData);

          mapxy(itemJson[i].mapY, itemJson[i].mapX);
        });
        startHide();
      })
      .catch((error) => console.log(error));
  };

  getMyData();
});

/*------ Google Map ------*/

var map;

function initMap(la, lo) {
  var myLocation = { lat: la, lng: lo };
  map = new google.maps.Map(document.getElementById('map-location-wrapper'), {
    zoom: 10,
    center: myLocation,
  });
}

function mapxy(my, mx) {
  let arrX = new Array(mx);
  let arrY = new Array(my);
  for (let i = 0; i < arrX.length; i++) {
    new google.maps.Marker({
      position: new google.maps.LatLng(arrY[i], arrX[i]),
      map: map,
      icon: {
        url: '/panda_camping/images/panda-bear-map.png',
      },
    });
  }
}

/*------ Map page Slider ------*/
const mapSwiper = new Swiper('.map-swiper', {
  loop: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesPerView: 1,
});

function startHide() {
  const arrowes = document.querySelector('.arr-wrapper');
  const swiperHide = document.querySelector('.map-swiper');

  arrowes.addEventListener('click', function (e) {
    e.preventDefault();
    swiperHide.classList.toggle('active');
    arrowes.classList.toggle('on');
  });
}
