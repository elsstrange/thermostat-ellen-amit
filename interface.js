$( document ).ready(function() {
  let thermostat = new Thermostat()
  updateTemperature()
  updatePowerSave()


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
  })
  function updateTemperature() {
    $("p#current-temperature").text(thermostat.targetTemperature)
  }

  function updatePowerSave() {
    $("button#powersave-switch").attr("class",`${thermostat.getPowerSaveStatus()}`)
    $("button#powersave-switch").text(`POWER SAVE: ${thermostat.getPowerSaveStatus().toUpperCase()}`)
  }
});
