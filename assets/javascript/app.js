// Function to create button with every new search
function createButton(buttonText) {
    console.log(buttonText)
    // Create a variable for new button
    const newButton = document.createElement('button')
    // Setting the new button to inner HTML
    // inner HTML basically just gives a text value
    newButton.innerHTML = buttonText
    newButton.onclick = () => {
        getGif(buttonText)
    }
    // button has been created and is saved in computer memory under
    // variable newButton but the computer doesn't know where to put that button yet
    document.getElementById('button-container').append(newButton)

}


    // Click event listener whenver submit is clicked
    document.querySelector('#submit').addEventListener('click', e => {
        // to prevent page from refreshing every time we submit
        e.preventDefault()
        // Obtain information from input
        let item = document.querySelector('#search').value
        console.log(item)
        // Create a button
        createButton(item)
        // Set item to empty string so text input clears
        document.querySelector('#search').value = ''
    })



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
            console.log(gif)
            gifElem.setAttribute('src', gif.images.fixed_height.url)
            document.querySelector('#gifList').append(gifElem)
        })
    })
    .catch(err => console.log(err))
}


// everytime submit is clicked, the gifs will be pushed into the gifs array

// Get item I search for to appear on HTML

