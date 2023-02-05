window.addEventListener("load",()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            let lon= position.coords.longitude; 
            let lat= position.coords.latitude;
            const url= `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + `lon=${lon}&appid=b1bfaa8aef920555a5427b626bedb8c9`;
            

            fetch(url).then((res)=>{
                return res.json();
            }).then((data)=>{
                console.log(data);
                console.log(new Date().getTime())
                var dat= new Date(data.dt)
                console.log(dat.toLocaleString(undefined,'Chicago/IL'))
                console.log(new Date().getMinutes())
                // weatherReport(data);
            })
        })
    }
})

function getInputValue() {  // A method is used to get input value
    let value = document.getElementById("city").value;
    console.log(value);     // Display the value
   let city = value
   console.log(city)

    let tempDescription = document.querySelector('.temp-description');
    let tempDegree = document.querySelector ('.temp-degree');
    let loctionTimezone = document.querySelector ('.location-timezone');
    let icon = document.querySelector ('.icon');
    // let chosenCity = document.querySelector ('#city')

        // const api = "https://api.openweathermap.org/data/2.5/forecast?q=chicago&units=imperial&appid=b1bfaa8aef920555a5427b626bedb8c9"//

        // const api = "https://api.openweathermap.org/data/2.5/weather?q= + value + &units=imperial&exclude=currently,daily&appid=b1bfaa8aef920555a5427b626bedb8c9"
        
        var api= `http://api.openweathermap.org/data/2.5/weather?q=${city}&` + `appid=b1bfaa8aef920555a5427b626bedb8c9`;

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

    };


// `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;

// &units=imperial&exclude=minutely,hourly&


// fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.885&lon=-87.626&appid=b1bfaa8aef920555a5427b626bedb8c9")
// .then(function(response){
//     return response.json()
// })

// .then (function(data){
//     console.log (data)
// })