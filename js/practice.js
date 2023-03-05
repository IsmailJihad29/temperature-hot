// setp 1 get the api key 
const apiKey = '22e21b9fdfe64fb4f6b5af7711b24ccb'

// set 2 load the weather data by set api and convert it into json 
const loadWeather = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
     fetch(url)
      .then(response => response.json())
      .then (data => console.log(data))
}


loadWeather() 
