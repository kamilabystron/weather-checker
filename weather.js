   // http://kursjs.pl/kurs/ajax/fetch.php
   // http://kursjs.pl/kurs/es6/template-strings.php
    
   const btn = document.querySelector(".submit");

   let key = "055e5e07b36fec4ad51ecbd7623f58f1";
   let city = document.getElementsByClassName("form-control")
   let wIcon = document.getElementById('wIcon');
btn.addEventListener("click", function() {
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city[0].value + "&APPID=" + key)
   .then(resp => {
       return resp.json();
   })
   .then((resp) => {
       console.log(resp)
       console.log(resp.main.temp)

       function toCelcius(temperature){
        return (temperature - 273.15).toFixed(0);
       }

       function checkTemp(temperature){
           if(temperature > 20) {
               return  `<i class="icofont-sunny-day-temp icofont-10x"></i>`;
            }
            if(temperature > 15 && temperature <=20) {
                return  `<i class="icofont-full-sunny icofont-10x"></i>`;
             }
             if(temperature > 10 && temperature <= 15) {
                return  `<i class="icofont-cloud icofont-10x"></i>`;
             }
             if(temperature >= 0 && temperature <=10) {
                return  `<i class="icofont-wind icofont-10x"></i>`;
             }
             if(temperature < 0) {
                return  `<i class="icofont-snow-temp icofont-10x"></i>`;
             }
        }

       return document.getElementById("showData").innerHTML = `
       <div class=\"container\">
       <div class="data">
           <div class="data-header">
               <h2 class="data-title">Details about weather in ${resp.name} </h2>
           </div>
           <div class="data-content">
               <div>Temperature: ${toCelcius(resp.main.temp)}°C</div>
               <div>Atmospheric pressure: ${resp.main.pressure}hPa</div>
               <div>Wind: ${resp.wind.speed}m/s</div>
               <div>Cloudiness: ${resp.clouds.all}%</div>
               <div>${checkTemp(toCelcius(resp.main.temp))}</div>
           </div>
       </div>
       </div>`;

   })
})