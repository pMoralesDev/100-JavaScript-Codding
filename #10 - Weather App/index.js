const container = document.querySelector('.container')
const search = document.querySelector('.search-box button')
const weatherBox = document.querySelector('.weather-box')
const weatherDetails = document.querySelector('.weather-details')
const error404 = document.querySelector('.not-found')

search.addEventListener('click', () => {
    const APIKey = '50790a0571b057bf0d5f1d000bbd6d6e'
    const city = document.querySelector('.search-box input').value
    console.log(city)

    if(city === ''){
        return
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json()).then(json =>{
            if(json.cod === '404'){
                container.style.height = '400px'
                weatherBox.style.display = 'none'
                weatherDetails.style.display = 'none'
                error404.style.display = 'block'
                error404.classList.add('fadeIn')
                return
            }
            error404.style.display = 'none'
            error404.classList.remove('fadeIn')

            const image = document.querySelector('.weather-box img')
            const temperature = document.querySelector('.weather-box .temperature')
            const descripction = document.querySelector('.weather-box .description')
            const humidity = document.querySelector('.weather-details .humidity span')
            const wind = document.querySelector('.weather-details .wind span')

            switch(json.weather[0].main){
                case 'Clear':
                    image.src = 'images/clear.png'
                    break
                case 'Rain':
                    image.src = 'images/rain.png'
                    break
                case 'Snow':
                    image.src = 'images/snow.png'
                    break
                case 'Clouds':
                    image.src = 'images/cloud.png'
                    break
                case 'Haze':
                    image.src = 'images/mist.png'
                    break
                default:
                    image.src=''
            }

            temperature.innerHTML=`${parseInt(json.main.temp)}<span>ºC</span>`
            descripction.innerHTML=`${json.weather[0].descripction}`
            humidity.innerHTML=`${json.main.humidity}%`
            wind.innerHTML=`${parseInt(json.wind.speed)}km/h`

            weatherBox.style.display=''
            weatherDetails.style.display=''
            weatherDetails.classList.add('fadeIn')
            weatherBox.classList.add('fadeIn')
            container.style.height='590px'


        })
})