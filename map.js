
var zoom = 5.9;
var map = new google.maps.Map(d3.select("#map").node(), {
  zoom: 5.9,
  minZoom: zoom - 3,
  gestureHandling: 'none',
  maxZoom: zoom + 3,
  center: new google.maps.LatLng(54.499998, -3.249999),
  mapTypeId: google.maps.MapTypeId.TERRAIN,
  styles:[
  {
    featureType: "all",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]},
    {
            featureType: 'poi',
            stylers: [{ visibility: 'off' }]
        },
        {
            featureType: 'road',
            stylers: [{ visibility: 'off' }]
        },
]
});
