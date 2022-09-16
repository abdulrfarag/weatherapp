fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=b1bfaa8aef920555a5427b626bedb8c9")
.then(function(response){
    return response.json()
})

.then (function(data){
    console.log (data)
})