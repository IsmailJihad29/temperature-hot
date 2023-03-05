const api_key = '22e21b9fdfe64fb4f6b5af7711b24ccb'

const loadTrempature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    fetch(url)
        .then(response => response.json())
    .then(data => dislplayTem(data))
}

const dislplayTem = data => {
    // const tempreture = document.getElementById('temp');
    // tempreture.innerHTML = data.main.temp
    console.log(data.weather[0].main)
    setInnerText('temp', data.main.temp)
    setInnerText('conditions', data.weather[0].main)
}

// set inner text by calling funtion 
const setInnerText = (id, text) => {
    const tempreture = document.getElementById(id);
    tempreture.innerHTML = text 
}


// add event handlers to the button to get the serch result into the disply field 

document.getElementById('search-btn').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
// set city name 
    document.getElementById('city-name').innerText = city;

    loadTrempature(city)

    
})

loadTrempature('Dhaka')




    

