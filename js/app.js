const API_KEY = `f569f29a7d0c32239c1f56eb0d7b0b91
`
const searchTemperature = () => {
    const city = document.getElementById('city-name').value
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperatur(data))
}

const setInnerText = (id , text) => {
    document.getElementById(id).innerText = text
}


const displayTemperatur = temperature =>{
    setInnerText('city' , temperature.name )
    setInnerText('temperature' , temperature.main.temp)
    setInnerText('condition' , temperature.weather[0].main)
    // set icon
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon')
    imgIcon.setAttribute('src', url)

}