const apiKey = "005d5dc8512fd2de7d6a20af5de1f471";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appId=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);
    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./assets/img/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./assets/img/clouds.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./assets/img/mist.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./assets/img/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./assets/img/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "./assets/img/snow.png";
    }
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
