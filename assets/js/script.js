let click = document.getElementById("btn")
let Answer  = document.getElementById("ans")

click.addEventListener("click",function(){
    let cityName = document.getElementById("ctName").value;

    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c7a2b33e4c6e7fff86368c2d79d8ce6f`;
    
    fetch(URL)
    .then((res)=> {
        return res.json();
    })
    .then((res) => {
        Answer.innerHTML = `${res.main.temp} <img src="https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png" alt="" id="icon"> `
        // console.log(res);  
    })

})
