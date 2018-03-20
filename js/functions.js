/*title is now just a dummy variable which is equal to projects[i].title in the function above */
function createTitle (title) {
  console.log('Title: ' + title)
}

/*
  Build a file path for a project thumbnail image based on the project ID to be
  used as the value for the src attribute of an img tag.
  thumb and id are both dummy variables now
 */
function createThumbnail (thumb,id) {
  if (thumb === true) {
    console.log('images/ss-project-' + id + '.png')
  } else {
  console.log('images/no-preview.png')
}
}
