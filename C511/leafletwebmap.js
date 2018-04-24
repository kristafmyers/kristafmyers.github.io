
//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
//this is two different "functions" immediately one after another - called chaining
function addtomap () {
let webmap = L.map('leafletmap').setView([-77.739897, 163.109794], 6)
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

L.control.layers(myThreeBasemaps).addTo(webmap)




// create an object with a list of options to style the circle marker
// see http://leafletjs.com/reference-1.3.0.html#path for additional options
function myStyle (feature) {
	let type = feature.properties.TYPE // met, BB, or camp
	let color = 'Orange'
	if (type == "Met") {
		color = 'Yellow'
	}
	if (type== "LakeBB"){
		color = 'Blue'
	}
	let myStyle = {
  	color: color,
  	radius: 5
	}
	return myStyle
}



// add all of the GeoJSON data to the empty layer we created
function createCircles (feature, latlng) {
  return L.circleMarker(latlng, myStyle)
}


function C511popups (feature, layer) {
	 let name = feature.properties.NAME
	 let valley = feature.properties.LOC
	 layer.bindPopup(name + '<br>Location: ' + valley )
	 let type = feature.properties.TYPE // met, BB, or camp
	 if (type=="Met"){
		layer.bindPopup(name + ' Met Station' + '<br>Location: ' + valley)
	 }
 }

 let styleOptions = {
	 style: myStyle,
	 onEachFeature: C511popups,
	 pointToLayer: createCircles
 }

 L.geoJSON(MetBBCamps, styleOptions).addTo(webmap)
}

addtomap()
