const title = document.getElementById("movie-title")
const time = document.getElementById("movie-min")
const button = document.getElementById("converter")


button.addEventListener('click', (event) => {
    event.preventDefault();

    let hourMins = time.value / 60
    document.getElementById('message').innerHTML = `${title.value} e ${hourMins}` 

})

