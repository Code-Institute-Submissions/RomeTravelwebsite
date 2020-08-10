function initMap() {
        var map= new google.maps.Map(document.getElementById("map"), {
            zoom:8,
            center: {
                lat:41.902149,
                lng:12.498789
            }
        });
    
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;

    var locations = [
        {lat:41.890354, lng: 12.492209},
        {lat:41.887958, lng: 12.490310},
        {lat:41.897779, lng: 12.498489},
        {lat:41.898680, lng: 12.476871},
        {lat:40.748286, lng: 14.482082},
        {lat:41.892511, lng: 12.485330},
        {lat:41.909713, lng: 12.476468},
        {lat:41.901107, lng: 12.483266},
        {lat:41.902357, lng: 12.456749},
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position:location,
            label:labels[ i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}