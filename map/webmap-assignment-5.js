
//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
//this is two different "functions" immediately one after another - called chaining
function map5 () {
let webmap = L.map('webmap5').setView([63.843414, -150.405056],4)
let satelliteBase= L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(webmap)

let topoBase=L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
})

let boringMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})

let myThreeBasemaps = {
	'Satellite imagery basemap': satelliteBase,
	'Topography basemap': topoBase,
	'Street basemap': boringMap
}

let anchorage =L.marker([61.2181, 149.9003]).addTo(webmap)

L.control.layers(myThreeBasemaps).addTo(webmap)

function JasonsFashion (feature) {
  let pop = feature.properties.POPULATION // get the current state's Median Age attribute
  let stateColor = 'orange' // let the initial color be orange
  if ( pop < 1000000 ) { stateColor = 'blue' } // if the state's median age is less than the average, color it blue
  let JasonIsStylish = {
    color: stateColor, //use the color variable above for the value
    weight: 3,
    fillOpacity: 0.4
  }
  return JasonIsStylish
}

function JasonsPopup (feature, layer) {
	 let name = feature.properties.STATE_NAME
	 let subregion = feature.properties.SUB_REGION
	 let pop = feature.properties.POPULATION
	 layer.bindPopup(name + ' is within the subregion of ' + subregion + '<br>And the population is: ' + pop)
 }
 let JasonLikesOptions = {
	 style: JasonsFashion,
	 onEachFeature: JasonsPopup
 }
 L.geoJSON(geoJ, JasonLikesOptions).addTo(webmap)
}




map5()
