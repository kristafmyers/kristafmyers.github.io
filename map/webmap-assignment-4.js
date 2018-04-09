
//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
//this is two different "functions" immediately one after another - called chaining
function map4 () { let webmap = L.map('webmap4').setView([63.843414, -150.405056],4)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(webmap)


//let JasonIsStylish = { color: 'green' }
//let JasonLikesOptions = { style: JasonIsStylish }
//L.geoJSON(geoJ, JasonLikesOptions).addTo(webmap)

function JasonsFashion (feature) {
  let age = feature.properties.MED_AGE // get the current state's Median Age attribute
  let stateColor = 'orange' // let the initial color be orange
  if ( age < 38 ) { stateColor = 'blue' } // if the state's median age is less than the average, color it blue
  let JasonIsStylish = {
    color: stateColor, //use the color variable above for the value
    weight: 3,
    fillOpacity: 0.4
  }
  return JasonIsStylish
}

function JasonsPopup (feature, layer) {
	 let name = feature.properties.STATE_NAME
	 let age = feature.properties.MED_AGE
	 layer.bindPopup('Hello, the median age of ' + name + ': ' + age + '<br>And the national average is: 38ish')
 }
 let JasonLikesOptions = {
	 style: JasonsFashion,
	 onEachFeature: JasonsPopup
 }
 L.geoJSON(geoJ, JasonLikesOptions).addTo(webmap)
}
map4()
