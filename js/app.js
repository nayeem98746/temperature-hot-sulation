const API_KEY = `f569f29a7d0c32239c1f56eb0d7b0b91
`
const searchTemperature = () => {
    const city = document.getElementById('city-name').value
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperatur(data))
}

const displayTemperatur = temperature =>{
    console.log(temperature)
}