// const key =
//   'zrXylF6VKWHWjriRP8ACOpQfzkIFRWKROWwEgn3DtXZSQYmjf%2FkBii%2FzKwKx%2FkVAMr4skXHZlxrDZGIlyuUKrA%3D%3D';

// /*------ Detail page API data ------*/

// const detailApi = document.querySelector('.detail-wrapper');
// const newURL2 = window.location.href;
// const campName = new URLSearchParams(location.search).get('keyword');
// const mapx = new URLSearchParams(location.search).get('lon');
// const mapy = new URLSearchParams(location.search).get('lat');
// const numMapx = Number(mapx);
// const numMapy = Number(mapy);

// const getDetailData = async () => {
//   await fetch(
//     `https://apis.data.go.kr/B551011/GoCamping/searchList?numOfRows=1&pageNo=1&MobileOS=etc&MobileApp=panda_camping&serviceKey=${key}&_type=json&keyword=${campName}`
//   )
//     .then((response) => response.json())
//     .then((json) => {
//       let detailData;
//       json.response.body.items.item.map((d, i) => {
//         detailData = `
//         <div class="detail-img">
//           <img src="${d.firstImageUrl}" alt="campsite" onerror="this.src='/panda_camping/images/onerror.png'">
//         </div>
//         <div class="detail-text">
//           <div class="detail-keyword">
//             <div class="detail-title">
//               <p>${d.facltNm}</p>
//             </div>
//             <div class="detail-cate">
//               <div class="cate-icon"><i class="ri-map-pin-2-line"></i></div>
//               <span>${d.addr1}</span>
//             </div>
//             <div class="detail-cate">
//               <div class="cate-icon"><i class="ri-phone-line"></i></div>
//               <span>${d.tel}</span>
//             </div>
//             <div class="detail-cate">
//               <div class="cate-icon"><i class="fa-solid fa-dog"></i></div>
//               <span>${d.animalCmgCl}</span>
//             </div>
//             <div class="detail-cate">
//               <div class="cate-icon"><i class="ri-information-line"></i></div>
//               <span>${d.sbrsCl}<br>${d.glampInnerFclty}</span>
//             </div>
//           </div>
//           <div class="detail-intro">
//             <div class="detail-title">
//               <p>캠핑장 소개</p>
//             </div>
//             <div class="detail-info">
//               <span id="intro">${d.featureNm}</span>
//             </div>
//           </div>

//           <div class="detail-map">
//             <div class="detail-title">
//               <p>캠핑장 위치 지도</p>
//             </div>
//             <div class="map-wrapper">
//               <div class="map-content">
//                 <div id="map"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//         `;
//         detailApi.insertAdjacentHTML('beforeend', detailData);
//       });
//     })
//     .catch((error) => console.log(error));
// };

// getDetailData();
