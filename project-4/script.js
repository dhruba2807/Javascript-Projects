const apikey = "2aa205ca2f68e9b2df07cf385c898ffe";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");

async function chechkweather(city){
    const response = await fetch(`${apiurl}${city}&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error p").innerHTML = "Invalid City Name";
        document.querySelector(".weather").style.display = "none";
        return;
    }else{
    // generate data from the city 
    var data = await response.json();

const weathericn = document.querySelector(".weather-icon")
    document.querySelector(".city").innerHTML = data.name;
    // document.querySelector(".temp").innerHTML = data.temp;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+ "Km/h";



    if(data.weather[0].main == "clouds"){
        
        weathericn.src = "images/clouds.png";
    }else if(data.weather[0].main == "rain"){
        weathericn.src = "images/rain.png";
    }else if(data.weather[0].main == "sun"){
        weathericn.src = "images/sun.png";
    }
    else if(data.weather[0].main == "snow"){
        weathericn.src = "images/snow.png";
    }
    else if(data.weather[0].main == "clear"){
        weathericn.src = "images/clear.png";
    
    }
    else if(data.weather[0].main == "thunderstorm"){
        weathericn.src = "images/thunderstorm.png";
    }
    else if(data.weather[0].main == "drizzle"){
        weathericn.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "mist"){
        weathericn.src = "images/mist.png";
    }
  
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}
btn.addEventListener("click", ()=>{
    chechkweather(search.value);

})