'use strict';

class thermostatInterface {
  constructor(element, thermostat, client) {
    this._element = element
    this._thermostat = thermostat
    this._client = client
       
    this.downClick = this.downClick.bind(this)
    this.upClick = this.upClick.bind(this)
    this.resetClick = this.resetClick.bind(this)
    this.powerSaveClick = this.powerSaveClick.bind(this)

    this.setupControls()
    debugger;
    this._thermostat.targetTemperature = 
    this.renderState()
  }

  setupControls() {
    $(this._element).append("<div id='thermostat-state'>")
    this._element.append(`<button class='action-btn' onclick='app.interface.downClick()'>Down</button>`)
    // this._element.append(`<button class='action-btn' onclick='function thisNamer(){ console.log(this) }; thisNamer()'>This</button>`)
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
    this._thermostat.down()
    this.renderState()
    this._client.post(this._thermostat.targetTemperature)
  }

  upClick() {
    this._thermostat.up()
    this.renderState()
  }

  resetClick() {
    this._thermostat.reset()
    this.renderState()
  }

  powerSaveClick() {
    this._thermostat.switchPowerSave()
    this.renderState()
  }

  renderState() {
    let html = [
      `<p id='current-temperature' class='${this._thermostat.energyUsage().toLowerCase()}'>${this._thermostat.targetTemperature}</p>`,
      `<p>Energy usage: ${this._thermostat.energyUsage()}</p>`
    ].join('')
    $('.powersave-btn').text(`POWER SAVE ${this._thermostat.getPowerSaveStatus().toUpperCase()}`)
    $('#thermostat-state').html(html)
  }
}