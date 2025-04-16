let click = document.getElementById("btn");
let temp = document.getElementById("temp");
let loc = document.getElementById("location");
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
      if(res.cod !== 200){
        Swal.fire({
          position: "top",
          text: "City Not Found!",
        });
        document.getElementById("ctName").value = "";
        return;
      }

      console.log(res);
      temp.innerHTML = `${res.main.temp}°C`;
      icon.src = `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
      description.innerHTML = res.weather[0].description;  
      loc.innerHTML = `<i class="bi bi-geo-alt-fill fs-6"></i> ${res.name}`;
      humidity.innerHTML = `${res.main.humidity}%`;
      wind.innerHTML = `${res.wind.speed}km/h`;
    });
});
