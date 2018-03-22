
//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
//this is two different "functions" immediately one after another - called chaining
let webmap = L.map('mapmeta').setView([-77.739897, 163.109794], 6)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(webmap)

let marker = L.marker([-77.60582, 163.12549]).addTo(webmap)

let polygon = L.polygon([
  [-77.478645, 163.689102],
  [-77.629187, 163.621913],
  [-77.816041, 162.122662],
  [-77.704653, 161.987424]
]).addTo(webmap);

polygon.bindPopup('Taylor Valley')
marker.bindPopup('Lake Fryxell Camp')

webmap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
