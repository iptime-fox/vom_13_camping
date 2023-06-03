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
          <a href="/panda_camping/pages/detail.html?keyword=${d.facltNm}&lon=${d.mapX}&lat=${d.mapY}">
            <div class="img-wrapper">
                <img src="${d.firstImageUrl}" alt="">
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

/*------ myLocation Slider API data ------*/

const myLocation = document.querySelector('.my-location');
const newURL1 = window.location.href;
const radius = newURL1.split('=')[1];

navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  const getMyData = async () => {
    await fetch(
      `https://apis.data.go.kr/B551011/GoCamping/locationBasedList?numOfRows=30&pageNo=1&MobileOS=ETC&MobileApp=panda_camping&serviceKey=${key}&_type=json&mapX=${long}&mapY=${lat}&radius=${radius}`
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
                <a href="/panda_camping/pages/detail.html?keyword=${d.facltNm}">
                  <img src="${d.firstImageUrl}" alt="">
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
        });
      })
      .catch((error) => console.log(error));
  };

  getMyData();
});
/*------ Detail page API data ------*/

const detailApi = document.querySelector('.detail-wrapper');
console.log(detailApi);
const newURL2 = window.location.href;
const campName = new URLSearchParams(location.search).get('keyword');
const mapx = new URLSearchParams(location.search).get('lon');
const mapy = new URLSearchParams(location.search).get('lat');
const numMapx = Number(mapx);
const numMapy = Number(mapy);

const getDetailData = async () => {
  await fetch(
    `https://apis.data.go.kr/B551011/GoCamping/searchList?numOfRows=1&pageNo=1&MobileOS=etc&MobileApp=panda_camping&serviceKey=${key}&_type=json&keyword=${campName}`
  )
    .then((response) => response.json())
    .then((json) => {
      let detailData;
      json.response.body.items.item.map((d, i) => {
        detailData = `
        <div class="detail-img">
          <img src="${d.firstImageUrl}" alt="">
        </div>
        <div class="detail-text">
          <div class="detail-keyword">
            <div class="detail-title">
              <p>${d.facltNm}</p>
            </div>
            <div class="detail-cate">
              <div class="cate-icon"><i class="ri-map-pin-2-line"></i></div>
              <span>${d.addr1}</span>
            </div>
            <div class="detail-cate">
              <div class="cate-icon"><i class="ri-phone-line"></i></div>
              <span>${d.tel}</span>
            </div>
            <div class="detail-cate">
              <div class="cate-icon"><i class="fa-solid fa-dog"></i></div>
              <span>${d.animalCmgCl}</span>
            </div>
            <div class="detail-cate">
              <div class="cate-icon"><i class="ri-information-line"></i></div>
              <span>${d.glampInnerFclty}, ${d.sbrsCl}</span>
            </div>
          </div>
          <div class="detail-intro">
            <div class="detail-title">
              <p>캠핑장 소개</p>
            </div>
            <div class="detail-info">
              <span>${d.intro}</span>
            </div>
          </div>

          <div class="detail-map">
            <div class="detail-title">
              <p>캠핑장 위치 지도</p>
            </div>
            <div class="map-wrapper">
              <div class="map-content">
                <div id="map"></div>
              </div>
            </div>
          </div>
        </div>
        `;
        detailApi.insertAdjacentHTML('beforeend', detailData);
      });
    })
    .catch((error) => console.log(error));
};

getDetailData();

var map;

function initMap() {
  var campLocation = { lat: numMapy, lng: numMapx };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: campLocation,
  });

  var subMarker = new google.maps.Marker({
    position: campLocation,
    map: map,
    icon: {
      url: '/panda_camping/images/panda-bear-map.png',
    },
  });
}

// var map2;

// function initMap() {
//   var campLocation = { lat: numMapy, lng: numMapx };
//   map2 = new google.maps.Map(document.getElementById('my-location'), {
//     zoom: 15,
//     center: campLocation,
//   });

//   var subMarker = new google.maps.Marker({
//     position: campLocation,
//     map: map,
//     icon: {
//       url: '/panda_camping/images/panda-bear-map.png',
//     },
//   });
// }
