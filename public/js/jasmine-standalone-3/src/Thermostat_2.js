'use strict';

class Thermostat {

  constructor(element, temperature = 20) {
    this.powerSave = true
    this.targetTemperature = temperature
    this._element = element
       
    this.downClick = this.downClick.bind(this)
    this.upClick = this.upClick.bind(this)
    this.resetClick = this.resetClick.bind(this)
    this.powerSaveClick = this.powerSaveClick.bind(this)

    // this.callThermostatApi()  // Future work!
    this.setupControls()
    this.renderState()
  }

  setupControls() {
    $(this._element).append("<div id='thermostat-state'>")
    this._element.append(this.getButton('action-btn','Down',this.downClick))
    this._element.append(this.getButton('action-btn','Reset',this.resetClick))
    this._element.append(this.getButton('action-btn','Up',this.upClick))
    this._element.append(this.getButton('powersave-btn','Power Save',this.powerSaveClick))
  }

  getButton(klass, text, callback) {
    let Button = $('<button>').addClass(klass).text(text)
    $(Button).click(callback)
    return Button
  }

  downClick() {
    this.down()
    this.renderState()
  }

  upClick() {
    this.up()
    this.renderState()
  }

  resetClick() {
    this.reset()
    this.renderState()
  }

  powerSaveClick() {
    this.switchPowerSave()
    this.renderState()
  }

  renderState() {
    let html = [
      `<p id='current-temperature' class='${this.energyUsage().toLowerCase()}'>${this.targetTemperature}</p>`,
      `<p>Energy usage: ${this.energyUsage()}</p>`
    ].join('')
    $('.powersave-btn').text(`POWER SAVE ${this.getPowerSaveStatus().toUpperCase()}`)
    $('#thermostat-state').html(html)
  }

  up() {
    if(this.isMaxTemperature() === false) {
      this.targetTemperature ++
    }
    return this.targetTemperature
  }

  down() {
    const minimumTarget = 10

    if(this.targetTemperature > minimumTarget) {
      this.targetTemperature --
    }
    return this.targetTemperature
  }

  switchPowerSave() {
    this.powerSave = !this.powerSave
    this.reset()
  }

  getPowerSaveStatus() {
    if (this.powerSave) {
      return 'on'
    } else {
      return 'off'
    }
  }

  reset() {
    return this.targetTemperature = 20
  }

  energyUsage() {
    if(this.targetTemperature < 18) {
      return 'Low'
    } else if(this.targetTemperature < 26) {
      return 'Medium'
    } else {
      return 'High'
    }
  }

  isMaxTemperature() {
    return (this.powerSave && this.targetTemperature >= 25) || (!this.powerSave && this.targetTemperature >= 32)
  }
}
