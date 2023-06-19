const key =
  'zrXylF6VKWHWjriRP8ACOpQfzkIFRWKROWwEgn3DtXZSQYmjf%2FkBii%2FzKwKx%2FkVAMr4skXHZlxrDZGIlyuUKrA%3D%3D';

/*------ Keyword page API data ------*/

const keywordApi = document.querySelector('.keyword-wrapper');
// const newURL3 = window.location.href;
const keywords = new URLSearchParams(location.search).get('keyword');

const getkeywordData = async () => {
  await fetch(
    `https://apis.data.go.kr/B551011/GoCamping/searchList?numOfRows=15&pageNo=1&MobileOS=ETC&MobileApp=panda_camping&serviceKey=${key}&_type=json&keyword=${keywords}`
  )
    .then((response) => response.json())
    .then((json) => {
      let keywordData;
      json.response.body.items.item.map((d) => {
        keywordData = `
          <div class="item-card">
            <a href="/panda_camping/pages/detail.html?keyword=${d.facltNm}&lon=${d.mapX}&lat=${d.mapY}">
              <div class="img-wrapper">
                <img src="${d.firstImageUrl}" alt="camp-img" onerror="this.src='/panda_camping/images/panda_onerror.png'">
              </div>
            </a>
            <div class="text-wrapper">
              <h2 class="camp-name">${d.facltNm}</h2>
              <em class="camp-info">${d.featureNm}</em>
              <div class="camp-loca">
                <i class="ri-map-pin-2-line"></i> 
                <span>${d.addr1}</span>
              </div>
              <div class="camp-tel">
                <i class="ri-phone-line"></i>
                <span>${d.tel}</span>
              </div>
            </div>
          </div>
        `;
        keywordApi.insertAdjacentHTML('beforeend', keywordData);
      });
    })
    .catch((error) => keyError());
};

getkeywordData();

const keyError = () => {
  alert('검색 결과가 없습니다.');
  window.location.href = '/panda_camping/index.html';
};
