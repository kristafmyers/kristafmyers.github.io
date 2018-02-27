// assign values to a set of variables representing a project's metadata



let projectArray = [
  1,
  'https://www.arcgis.com/apps/MapTour/index.html?appid=32357dc8934040dc90b8581adcafa21a',
  'Tour McMurdo and Surrounding Areas (Book 1)',
  'Interactive story map tour of Ross Island and the McMurdo Dry Valleys. Created by Krista Myers 2018-01-23',
  true,
  ['McMurdo','Story map']
]

let projectObject = {
  id: 1,
  url: 'https://www.arcgis.com/apps/MapTour/index.html?appid=32357dc8934040dc90b8581adcafa21a',
  title: 'Tour McMurdo and Surrounding Areas (Book 1)',
  description: 'Interactive story map tour of Ross Island and the McMurdo Dry Valleys. Created by Krista Myers 2018-01-23',
  hasThumbnail: true,
  keywords: ['McMurdo','Story map']
}

console.log(projectArray[2])
console.log(projectObject.title)
console.log(projectObject["title"])



//as objects
//let project1 = {
  //id: 1,
  //url: 'https://www.arcgis.com/apps/MapTour/index.html?appid=32357dc8934040dc90b8581adcafa21a',
  //title: 'Tour McMurdo and Surrounding Areas (Book 1)',
  //description: 'Interactive story map tour of Ross Island and the McMurdo Dry Valleys. Created by Krista Myers 2018-01-23',
  //hasThumbnail: true,
  //keywords: ['McMurdo','Story map']
//}

//let project2 = {
  //id: 2,
  //url: 'https://www.arcgis.com/apps/Minimalist/index.html?appid=22073ad7d34240b3acf80f0b1ec00929',
  //title: 'McMurdo LTER Meterological Station Network (Book 2)',
  //description: 'Map of active meterological stations and established camps throughout the Dry Valleys. Meteorological stations are color coded by January 2014 average air temperature. Click on each station for site specific information such as location, average air temperatures, data sources, and photographs. Created by Krista Myers 2018-01-31',
  //hasThumbnail: true,
  //keywords: ['McMurdo LTER','Meterological stations','Dry Valleys']
//}

//as array
//let projectarray = [project1, project2]

//let projects = [ {
  //id: 1,
  //url: 'https://www.arcgis.com/apps/MapTour/index.html?appid=32357dc8934040dc90b8581adcafa21a',
  //title: 'Tour McMurdo and Surrounding Areas (Book 1)',
  //description: 'Interactive story map tour of Ross Island and the McMurdo Dry Valleys. Created by Krista Myers 2018-01-23',
  //hasThumbnail: true,
  //keywords: ['McMurdo','Story map']
//},
//{
  //id: 2,
  //url: 'https://www.arcgis.com/apps/Minimalist/index.html?appid=22073ad7d34240b3acf80f0b1ec00929',
  //title: 'McMurdo LTER Meterological Station Network (Book 2)',
  //description: 'Map of active meterological stations and established camps throughout the Dry Valleys. Meteorological stations are color coded by January 2014 average air temperature. Click on each station for site specific information such as location, average air temperatures, data sources, and photographs. Created by Krista Myers 2018-01-31',
  //hasThumbnail: true,
  //keywords: ['McMurdo LTER','Meterological stations','Dry Valleys']
//}]

//console.log(projectarray)





// let projectId = 3
// let projectUrl = 'https://web-gis-kfm.maps.arcgis.com/apps/GeoForm/index.html?appid=48d838a0c57d431bb1173b86ea8fb409'
// let projectTitle = 'Alaska Weather - Citizen Science Based Web Map'
// let projectDesc = 'Crowd sourced meterological data from across the state of Alaska'
// let projectThumb = true
// let projectMapExtent = [48.51, -28.37, 2.63, -132.34]
//
