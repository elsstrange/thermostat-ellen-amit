$( document ).ready(function() {
  let thermostat
  $.get('/api/thermostat', (data) => {
    thermostat = new Thermostat(data.temperature)
    updateTemperature()
    updatePowerSave()
    updateWeather()
  })
  // let thermostat = new Thermostat()
  // updateTemperature()
  // updatePowerSave()
  // updateWeather()

  $("#change-location" ).submit(function( event ) {
    event.preventDefault()
    let newLocation = $( "input ").first().val()
    let newCountry = $( "input ").eq(1).val()
    updateWeather(newLocation, newCountry)

  })

  $( "button#down" ).click(function( event ) {
    thermostat.down()
    updateTemperature()
  });

  $( "button#up" ).click(function( event ) {
    thermostat.up()
    updateTemperature()
  });

  $( "button#reset" ).click(function( event ) {
    thermostat.reset()
    updateTemperature()
  });

  $( "button#powersave-switch" ).click(function( event ) {
    thermostat.switchPowerSave()
    updatePowerSave()
    updateTemperature()
  });

  $('button#usage-level').click(function( event ) {
    $("button#usage-level").attr("class",`${thermostat.energyUsage()}`)
    $('button#usage-level').text(thermostat.energyUsage())
    setTimeout( resetUsage, 2000)
  })

  function postTemperature() {
    $.post('/api/thermostat', {temperature: thermostat.targetTemperature} ,(data, status) => {
      console.log(data)
      console.log(status);
    })
  }

  function updateTemperature() {
    $("p#current-temperature").text(thermostat.targetTemperature)
    postTemperature()
  }

  function updatePowerSave() {
    $("button#powersave-switch").attr("class",`${thermostat.getPowerSaveStatus()}`)
    $("span#powersave-status").text(`${thermostat.getPowerSaveStatus().toUpperCase()}`)
  }

  function resetUsage() {
    $("button#usage-level").removeClass()
    $('button#usage-level').text("Usage Level")
  }

  function updateWeather(location='London', country='UK') {
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${location},${country}&APPID=${weatherApiKey}&units=metric`, (weatherData) => {
      console.log(weatherData)
      $('span#location').text(`${weatherData.name}, ${weatherData.sys.country}`)
      $('span#weather-description').text(weatherData.weather[0].description)
      $('span#weather-temperature').text(weatherData.main.temp)
      $('span#weather-feels-like').text(weatherData.main.feels_like)
      $('span#weather-windspeed').text(weatherData.wind.speed)
    })
    .fail(() => {
      alert(`${location} does not exist`)
      $('span#location').text("")
      $('span#weather-description').text("")
      $('span#weather-temperature').text("")
      $('span#weather-feels-like').text("")
      $('span#weather-windspeed').text("")
    })
  }
});
