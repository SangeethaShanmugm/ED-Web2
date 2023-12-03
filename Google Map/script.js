let map;

function initMap() {

    const centerCoordinates = { lat: -34.397, lng: 150.644 }
    map = new google.maps.Map(document.getElementById("map"), {
        center: centerCoordinates,
        zoom: 12,
    })
    //add marker to the map 
    const marker = new google.maps.Marker({
        position: centerCoordinates,
        map: map,
        title: "Google Map"
    })

} 