/*------ Google Map ------*/

var map;

function initMap() {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    var campLocation = { lat: Number(lat), lng: Number(lon) };
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
  });
}
