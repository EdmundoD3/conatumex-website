// Initialize and add the map
function initMap() {
    // The location of Uluru
    const conatumex = { lat: 25.786763, lng: -100.377425 };
    // The map
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: conatumex,
    });
    // The marker
    const marker = new google.maps.Marker({
      position: conatumex,
      map: map,
    });
  }
  
  window.initMap = initMap;