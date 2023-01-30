navigator.geolocation.getCurrentPosition(positionSuccess, positionError)
let searchbtn= document. querySelector ("#btn")
searchbtn.addEventListener('click', () => {
    let long;
    let lat;
    let tempDescription = document.querySelector('.temp-description');
    let tempDegree = document.querySelector ('.temp-degree');
    let loctionTimezone = document.querySelector ('.location-timezone');
    let icon = document.querySelector ('.icon');
    let chosenCity = document.querySelector ('#city')

        const api = "https://api.openweathermap.org/data/2.5/forecast?q=chicago&units=imperial&appid=b1bfaa8aef920555a5427b626bedb8c9"//

        // const api = "https://api.openweathermap.org/data/2.5/weather?q=+ city + &units=imperial&exclude=currently,daily&appid=b1bfaa8aef920555a5427b626bedb8c9"
        fetch (api)
        .then (response => {
            return response.json();
        })

        .then (data => {
            console.log (data);
            // forecast of 5 days
            for (let i = 0; i < 5; i++){
                
            }


            const temp = data.list[0].main.temp ;
            console.log(temp)
            // const {timezone } = data;
            //set some elements from the api
            // var iconImg = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            tempDegree.textContent= temp;
            // icon.setAttribute("src", iconImg)
            tempDescription.textContent= data.weather[0].main
            loctionTimezone.textContent= data.name;
        });

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