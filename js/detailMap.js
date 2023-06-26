const mapx = new URLSearchParams(location.search).get('lon');
const mapy = new URLSearchParams(location.search).get('lat');
const numMapx = Number(mapx);
const numMapy = Number(mapy);
const loading = document.querySelector('.preloader');

var map;

function initMap() {
  var campLocation = { lat: numMapy, lng: numMapx };
  map = new google.maps.Map(
    document.getElementById('detail-map-location-wrapper'),
    {
      zoom: 15,
      center: campLocation,
    }
  );

  var subMarker = new google.maps.Marker({
    position: campLocation,
    map: map,
    icon: {
      url: '/panda_camping/images/panda-bear-map.png',
    },
  });

  loading.style.visibility = 'hidden';
  loading.style.opacity = '0';
  loading.style.zIndex = '-999';
}
