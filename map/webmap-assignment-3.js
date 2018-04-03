
//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
//this is two different "functions" immediately one after another - called chaining
let webmap = L.map('webmap3').setView([-77.739897, 163.109794], 6)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(webmap)

//changing icon to custom png
let penguinIcon = L.icon({
  iconUrl: 'penguin.png',
  iconSize: [16, 20], // size of the icon
  iconAnchor: [8, 10], // point of the icon which will correspond to marker's location
  popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
})

let markerCoordinates = [-77.60582, 163.12549]
let markerStyle = {icon: penguinIcon}
let marker = L.marker([-77.60582, 163.12549], {icon: penguinIcon}).addTo(webmap)

let polyCoords = [
  [-77.478645, 163.689102],
  [-77.629187, 163.621913],
  [-77.816041, 162.122662],
  [-77.704653, 161.987424]
];

let polyStyle = {
  color: 'green',
  fillColor: 'green',
	weight: 3
}

let polygon = L.polygon(polyCoords, polyStyle).addTo(webmap);

var pointA = new L.LatLng(-77.530414, 163.559562);
var pointB = new L.LatLng(-77.566768, 163.413217);
var pointC = new L.LatLng(-77.607842, 163.437426);
var pointD = new L.LatLng(-77.613866, 163.584584);
var pointList = [pointA, pointB, pointC, pointD];

var firstpolyline = new L.polyline(pointList, {
    color: 'red',
    weight: 3,
    opacity: 0.5,
    smoothFactor: 1
});
firstpolyline.addTo(webmap);

polygon.bindPopup('Taylor Valley')
marker.bindPopup('Lake Fryxell Camp')
firstpolyline.bindPopup('Ross Ice Sheet extent during Last Glacial Maximum')

webmap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
