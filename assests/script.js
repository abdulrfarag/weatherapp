window.addEventListener('load', () => {
let long;
let lat;
let tempDescription = document.querySelector('.temp-description');
let tempDegree = document.querySelector ('.temp-degree');
let loctionTimezone = document.querySelector ('.location-timezone');
let icon = document.querySelector ('.icon');

if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;

        const api = "https://api.openweathermap.org/data/3.0/onecall?lat=41.885&lon=-87.626&units=imperial&exclude=currently,daily&appid=b1bfaa8aef920555a5427b626bedb8c9"
        fetch (api)
        .then (response => {
            return response.json();
        })

        .then (data => {
            console.log (data);
            const { temp} = data.current;
            const loctionTimezone
            // const {timezone } = data;
            //set some elements from the api
            var iconImg = `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;
            tempDegree.textContent= temp;
            icon.setAttribute("src", iconImg)
            tempDescription.textContent= data.current.weather[0].main
            loctionTimezone.textContent= data.timezone;
            function setWeatherData 


            
        });

        });
    }
});



// `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;

// &units=imperial&exclude=minutely,hourly&


// fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.885&lon=-87.626&appid=b1bfaa8aef920555a5427b626bedb8c9")
// .then(function(response){
//     return response.json()
// })

// .then (function(data){
//     console.log (data)
// })