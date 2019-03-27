// Function to create button with every new search
function createButton() {
    // Click event listener whenver submit is clicked
    document.querySelector('#submit').addEventListener('click', e => {
        // to prevent page from refreshing every time we submit
        e.preventDefault()
        // Obtain information from input
        let item = document.querySelector('#search').value
        console.log(item)
        // Set item to empty string so text input clears
        document.querySelector('#search').value = ''
    })
}

// Array of Gifs
let gifs = []

// Function to get gifs on HTML
function getGif(gifs) {
    document.querySelector('#gifList').innerHTMl = ''
    fetch(`https://api.giphy.com/v1/gifs/search?q=${gifs}&api_key=dc6zaTOxFJmzC&limit=10`)
    .then(r => r.json())
    .then(gifs => {
        gifs.data.forEach(gif => {
            let gifElem = document.createElement('img')
            gifElem.setAttribute('src', gif.images.fixed.height.url)
            document.querySelector('gifList').append(gifElem)
        })
    })
    .catch(errors => console.log(e))
}


// everytime submit is clicked, the gifs will be pushed into the gifs array

// Get item I search for to appear on HTML

