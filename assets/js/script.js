let click = document.getElementById("btn");
let temp = document.getElementById("temp");
let icon = document.getElementById("icon");
let description = document.getElementById("description");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");

click.addEventListener("click", function () {
  let cityName = document.getElementById("ctName").value;
  let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c7a2b33e4c6e7fff86368c2d79d8ce6f`;

  fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      temp.innerHTML = `${res.main.temp}°C`;
      icon.src = `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
      description.innerHTML = res.weather[0].description;
      humidity.innerHTML = `${res.main.humidity}%<br><small>Humidity</small>`;
      wind.innerHTML = `${res.wind.speed}Km/H<br><small>Wind Speed</small>`;
    });
});
