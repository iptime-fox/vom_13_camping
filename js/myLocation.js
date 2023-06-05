const key =
  'zrXylF6VKWHWjriRP8ACOpQfzkIFRWKROWwEgn3DtXZSQYmjf%2FkBii%2FzKwKx%2FkVAMr4skXHZlxrDZGIlyuUKrA%3D%3D';
/*------ myLocation Slider API data ------*/

const myLocation = document.querySelector('.my-location');
const newURL1 = window.location.href;
const radius = newURL1.split('=')[1];

navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  abc(lat, long);

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
                  <img src="${d.firstImageUrl}" alt="campsite" onerror="this.src='/panda_camping/images/onerror.png'">
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
/*------ Google Map ------*/

function abc(la, lo) {
  console.log(la, lo);
}

var map;

function initMap() {
  var myLocation = { lat: 37.48049694689978, lng: 127.8240705696189 };
  map = new google.maps.Map(document.getElementById('map-location-wrapper'), {
    zoom: 10,
    center: myLocation,
  });

  // for (let i = 0; i < item.length; i++) {
  //   new google.maps.Marker({
  //     position: new google.maps.LatLng(
  //       Number(item[i].mapY),
  //       Number(item[i].mapX)
  //     ),
  //     map: map,
  //     icon: {
  //       url: '/panda_camping/images/panda-bear-map.png',
  //     },
  //   });
  // }
}