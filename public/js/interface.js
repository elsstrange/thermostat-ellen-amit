let app

$( document ).ready(function() {
      // loading the app
      let appElement = $('#app')
      app = new thermostatApp(appElement)
      let weatherElement = $('#weather')
      let weatherForm = $('#change-location')
      weather = new Weather(weatherElement, weatherForm)
})

//   $.get('/api/thermostat', (data) => {
//     thermostat = new Thermostat(data.temperature)
//     updateTemperature()
//     updatePowerSave()
//     updateWeather()
//   })
//
//
// function postTemperature() {
//   $.post('/api/thermostat', {temperature: thermostat.targetTemperature} ,(data, status) => {
//   })
// }
//
// function updateTemperature() {
//   $("p#current-temperature").text(thermostat.targetTemperature)
//   postTemperature()
// }
//
// 
//   $("#change-location" ).submit(function( event ) {
//     event.preventDefault()
//     let newLocation = $( "input ").first().val()
//     let newCountry = $( "input ").eq(1).val()
//     updateWeather(newLocation, newCountry)
//
//   })
//
// function updateWeather(location='London', country='UK') {
//   $.get(`http://api.openweathermap.org/data/2.5/weather?q=${location},${country}&APPID=${weatherApiKey}&units=metric`, (weatherData) => {
//     $('span#location').text(`${weatherData.name}, ${weatherData.sys.country}`)
//     $('span#weather-description').text(weatherData.weather[0].description)
//     $('span#weather-temperature').text(weatherData.main.temp)
//     $('span#weather-feels-like').text(weatherData.main.feels_like)
//     $('span#weather-windspeed').text(weatherData.wind.speed)
//   })
//   .fail(() => {
//     alert(`${location} does not exist`)
//     spans = document.getElementById('weather-block').querySelectorAll('span')
//     spans.forEach(span => $(span).text(''))
//   })
// }
