// assign values to a set of variables representing a project's metadata


//array of projects (As objects)

let projects = [ {
  id: 1,
  url: 'https://www.arcgis.com/apps/MapTour/index.html?appid=32357dc8934040dc90b8581adcafa21a',
  title: 'Tour McMurdo and Surrounding Areas (Book 1)',
  description: 'Interactive story map tour of Ross Island and the McMurdo Dry Valleys. Created by Krista Myers 2018-01-23',
  hasThumbnail: true,
  keywords: ['McMurdo','Story map']
},
{
  id: 2,
  url: 'https://www.arcgis.com/apps/Minimalist/index.html?appid=22073ad7d34240b3acf80f0b1ec00929',
  title: 'McMurdo LTER Meterological Station Network (Book 2)',
  description: 'Map of active meterological stations and established camps throughout the Dry Valleys. Meteorological stations are color coded by January 2014 average air temperature. Click on each station for site specific information such as location, average air temperatures, data sources, and photographs. Created by Krista Myers 2018-01-31',
  hasThumbnail: true,
  keywords: ['McMurdo LTER','Meterological stations','Dry Valleys']
}]


for (let i = 0; i < projects.length; i++) {
  console.log('Index position: ' + i + ', Title: ' + projects[i].title) // log the current project's title
  if (projects[i].hasThumbnail === true) {
    console.log('images/ss-project-' + projects[i].id + '.png') // build and log an image file name based on the project ID
  } else {
    console.log('images/no-preview.png')
  }
}
