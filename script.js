const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ahmedabad';
const options = {
	method: 'GET',
	headers: {
        "content-type": "application/octet-stream",
		'X-RapidAPI-Key': '85b5fbc4f1msha2cec5b3112d906p17f48ejsnbe2b1a5b7eb5',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather =  (city)=>{
// cityName.innerHTML = city
cityName.innerHTML = city.charAt(0).toUpperCase() + city.slice(1);
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response => response.json())
.then(response => 
    {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
.catch(err => console.error(err));
}

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + "Tokyo", options)
.then(response => response.json())
.then(response => 
    {
        console.log(response)
        tcloud_pct.innerHTML = response.cloud_pct
        ttemp.innerHTML = response.temp
        tfeels_like.innerHTML = response.feels_like
        thumidity.innerHTML = response.humidity
        tmin_temp.innerHTML = response.min_temp
        tmax_temp.innerHTML = response.max_temp
        twind_speed.innerHTML = response.wind_speed
        twind_degrees.innerHTML = response.wind_degrees
        tsunrise.innerHTML = response.sunrise
        tsunset.innerHTML = response.sunset
    })
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + "Boston", options)
.then(response => response.json())
.then(response => 
    {
        console.log(response)
        bcloud_pct.innerHTML = response.cloud_pct
        btemp.innerHTML = response.temp
        bfeels_like.innerHTML = response.feels_like
        bhumidity.innerHTML = response.humidity
        bmin_temp.innerHTML = response.min_temp
        bmax_temp.innerHTML = response.max_temp
        bwind_speed.innerHTML = response.wind_speed
        bwind_degrees.innerHTML = response.wind_degrees
        bsunrise.innerHTML = response.sunrise
        bsunset.innerHTML = response.sunset
    })
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + "Amsterdam", options)
.then(response => response.json())
.then(response => 
    {
        console.log(response)
        acloud_pct.innerHTML = response.cloud_pct
        atemp.innerHTML = response.temp
        afeels_like.innerHTML = response.feels_like
        ahumidity.innerHTML = response.humidity
        amin_temp.innerHTML = response.min_temp
        amax_temp.innerHTML = response.max_temp
        awind_speed.innerHTML = response.wind_speed
        awind_degrees.innerHTML = response.wind_degrees
        asunrise.innerHTML = response.sunrise
        asunset.innerHTML = response.sunset
    })
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + "Ahmedabad", options)
.then(response => response.json())
.then(response => 
    {
        console.log(response)
        ahcloud_pct.innerHTML = response.cloud_pct
        ahtemp.innerHTML = response.temp
        ahfeels_like.innerHTML = response.feels_like
        ahhumidity.innerHTML = response.humidity
        ahmin_temp.innerHTML = response.min_temp
        ahmax_temp.innerHTML = response.max_temp
        ahwind_speed.innerHTML = response.wind_speed
        ahwind_degrees.innerHTML = response.wind_degrees
        ahsunrise.innerHTML = response.sunrise
        ahsunset.innerHTML = response.sunset
    })
.catch(err => console.error(err));

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("London")
