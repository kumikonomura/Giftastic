// Whenever add button is clicked
document.querySelector('#add').addEventListener('click', e => {
    // make sure the page does not refresh when we get our item
    e.preventDefault()
    // Get information from input
    let item = document.querySelector('#search').value
    // set item to empty string so text input clears
    // everytime add is clicked the gifs will be pushed into the gifs array
    document.querySelector('#search').value = ''
    console.log(item)
})

// Get item I search for to appear on HTML

// Array of Gifs
let gifs = []

// Need to make a function that will get gifs from the API
function getGif(search) {
    document.querySelector('#gifDiv').innerHTML = ''
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&limit=10`)
    .then(r => r.json())
    .then(gifs => {
      gifs.data.forEach(gif => {
        let gifElem = document.createElement('img')
        gifElem.setAttribute('src', gif.images.fixed_height.url)
        document.querySelector('#gifList').append(gifElem)
      })
    })
    }

// Create button everytime I hit search



