// assign values to a set of variables representing a project's metadata
let projectId = 1
let projectUrl = 'https://www.arcgis.com/apps/MapTour/index.html?appid=32357dc8934040dc90b8581adcafa21a'
let projectTitle = 'Tour McMurdo and Surrounding Areas (Book 1)'
let projectDesc = 'Interactive story map tour of Ross Island and the McMurdo Dry Valleys. Created by Krista Myers 2018-01-23'
let projectThumb = true
let projectMapExtent = [48.51, -28.37, 2.63, -132.34]


let projectId = 2
let projectUrl = 'https://www.arcgis.com/apps/Minimalist/index.html?appid=22073ad7d34240b3acf80f0b1ec00929'
let projectTitle = 'McMurdo LTER Meterological Station Network (Book 2)'
let projectDesc = 'Map of active meterological stations and established camps throughout the Dry Valleys. Meteorological stations are color coded by January 2014 average air temperature. Click on each station for site specific information such as location, average air temperatures, data sources, and photographs. Created by Krista Myers 2018-01-31'
let projectThumb = true
let projectMapExtent = [48.51, -28.37, 2.63, -132.34]


let projectId = 3
let projectUrl = 'https://web-gis-kfm.maps.arcgis.com/apps/GeoForm/index.html?appid=48d838a0c57d431bb1173b86ea8fb409'
let projectTitle = 'Alaska Weather - Citizen Science Based Web Map'
let projectDesc = 'Crowd sourced meterological data from across the state of Alaska'
let projectThumb = true
let projectMapExtent = [48.51, -28.37, 2.63, -132.34]


// display messages in the browser's developer console, combining the values with text
console.log('ID: ' + projectId)
console.log('URL: ' + projectUrl)
console.log('Title: ' + projectTitle)
console.log('Description: ' + projectDesc)
console.log('Has thumbnail? ' + projectThumb)
console.log('Map extent: ' + projectMapExtent)
