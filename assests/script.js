window.addEventListener('load', ()=> {
let long;
let lat;

if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        console.log (position)
    })
}
});







// fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.885&lon=-87.626&appid=b1bfaa8aef920555a5427b626bedb8c9")
// .then(function(response){
//     return response.json()
// })

// .then (function(data){
//     console.log (data)
// })