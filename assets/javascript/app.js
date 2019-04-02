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
                gifElem.className = 'gif'
                gifElem.setAttribute('src', gif.images.fixed_height.url)
                gifElem.setAttribute('data-isanimated', 'true')
                gifElem.setAttribute('data-animated', gif.images.fixed_height.url)
                gifElem.setAttribute('data-still', gif.images.fixed_height_still.url)
                // gifElem.onclick = ({ target }) => {
                //     console.log('ping')
                //     // let { animated, still } = target.dataset;
                //     // console.log(target.dataset)
                //     console.log(target.dataset)
                //     if (target.dataset.isAnimated === '1') {
                //         target.setAttribute('data-isAnimated', '0')
                //         target.setAttribute('src', target.dataset.animated)
                //     } else {
                //         target.setAttribute('data-isAnimated', '1')
                //         target.setAttribute('src', target.dataset.still)
                //     }
                // }
                document.querySelector('#gifList').append(gifElem)
            })
        })
        .catch(err => console.log(err))
}


document.addEventListener('click', ({ target}) => {
    if (target.className = 'gif') {
        console.log(target.dataset)
        if (target.dataset.isanimated === 'true') {
            target.setAttribute('data-isanimated', 'false')
            target.setAttribute('src', target.dataset.animated)
        } else {
            target.setAttribute('data-isanimated', 'true')
            target.setAttribute('src', target.dataset.still)
        }
    }
})
// Need to work on when new button is clicked, previous button gifs disappear and 

// Click event listener when gif is clicked
// document.querySelector('gifs').addEventListener('click', ({target}) => {
//     let {animated, still} = target.dataset
//     toggle = !toggle
//     target.setAttribute('src', toggle ? animated : still)
// })
// new button gifs appear


// everytime submit is clicked, the gifs will be pushed into the gifs array

// Get item I search for to appear on HTML

