const key =
  'zrXylF6VKWHWjriRP8ACOpQfzkIFRWKROWwEgn3DtXZSQYmjf%2FkBii%2FzKwKx%2FkVAMr4skXHZlxrDZGIlyuUKrA%3D%3D';

/*------ Detail page API data ------*/

const detailApi = document.querySelector('.detail-wrapper');
const newURL2 = window.location.href;
const campName = new URLSearchParams(location.search).get('keyword');

const getDetailData = async () => {
  await fetch(
    `https://apis.data.go.kr/B551011/GoCamping/searchList?numOfRows=1&pageNo=1&MobileOS=etc&MobileApp=panda_camping&serviceKey=${key}&_type=json&keyword=${campName}`
  )
    .then((response) => response.json())
    .then((json) => {
      let detailData;
      let facltName = '';
      json.response.body.items.item.map((d, i) => {
        detailData = `
        <div class="detail-img">
          <img src="${d.firstImageUrl}" alt="campsite" onerror="this.src='/panda_camping/images/panda_onerror.png'">
        </div>
        <div class="detail-text">
          <div class="detail-keyword">
            <div class="detail-title">
              <p>${d.facltNm}</p>
            </div>
            <div class="detail-cate">
              <div class="cate-icon"><i class="ri-map-pin-2-line"></i></div>
              <span class="cateNull">${d.addr1}</span>
            </div>
            <div class="detail-cate">
              <div class="cate-icon"><i class="ri-phone-line"></i></div>
              <span class="cateNull">${d.tel}</span>
            </div>
            <div class="detail-cate">
              <div class="cate-icon"><i class="fa-solid fa-dog"></i></div>
              <span class="cateNull">${d.animalCmgCl}</span>
            </div>
            <div class="detail-cate">
              <div class="cate-icon"><i class="ri-information-line"></i></div>
              <span class="cateNull">${d.sbrsCl}${d.glampInnerFclty}</span>
            </div>
          </div>
          <div class="detail-intro">
            <div class="detail-title">
              <p>캠핑장 소개</p>
            </div>
            <div class="detail-info">
              <span id="intro" class="cateNull">${d.featureNm}</span>
            </div>
          </div>

          <div class="detail-map">
            <a href="/panda_camping/pages/detailMap.html?lon=${d.mapX}&lat=${d.mapY}">
            <div class="detail-title">
              <i class="ri-map-pin-2-line"></i>
              <p>캠핑장 위치 보기</p>
            </div>
            </a>
          </div>
            
        </div>
        `;
        detailApi.insertAdjacentHTML('beforeend', detailData);
        nullContent();
      });
    })
    .catch((error) => console.log(error));
};

getDetailData();

const nullContent = () => {
  const nullCate = document.querySelectorAll('.cateNull');
  const nullText = '데이터 없음';
  for (i = 0; i < nullCate.length; i++) {
    console.log(nullCate[i].innerHTML);

    if (nullCate[i].innerHTML == '') {
      nullCate[i].insertAdjacentHTML('beforeend', nullText);
    }
  }
};
