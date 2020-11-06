$( document ).ready(function() {
  let thermostat = new Thermostat()
  updateTemperature()
  updatePowerSave()
  
  $.get(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${weatherApiKey}&units=metric`, (weatherData) => {
    $('span#weather-description').text(weatherData.weather[0].description)
    $('span#weather-temperature').text(weatherData.main.temp)
    $('span#weather-feels-like').text(weatherData.main.feels_like)
    $('span#weather-windspeed').text(weatherData.wind.speed)
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

  function updateTemperature() {
    $("p#current-temperature").text(thermostat.targetTemperature)
  }

  function updatePowerSave() {
    $("button#powersave-switch").attr("class",`${thermostat.getPowerSaveStatus()}`)
    $("span#powersave-status").text(`${thermostat.getPowerSaveStatus().toUpperCase()}`)
  }

  function resetUsage() {
    $("button#usage-level").removeClass()
    $('button#usage-level').text("Usage Level")
  }
});
