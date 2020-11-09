'use strict';

class Thermostat {

  constructor(element, upButton, downButton, resetButton,
    powerSaveButton, temperature = 20) {
    this.powerSave = true
    this.targetTemperature = temperature
    this._element = element
    // this.callThermostatApi()
    // this.prepareControls()
    // this.render()
    this.setupControls = this.setupControls.bind(this)
    this.setupControls()
    this.render()


     // add it to the html tree.
    // debugger;
    // this._element.append(this._downButton)
    // this._element.addChild()


    // this._downButton = $.add('button').addClass('down')





    this._upButton = upButton
    this._resetButton = resetButton
    this._powerSaveButton = powerSaveButton
    this.up = this.up.bind(this)
    this.down = this.down.bind(this)
    this.reset = this.reset.bind(this)
    this.energyUsage = this.energyUsage.bind(this)
    this.getPowerSaveStatus = this.getPowerSaveStatus.bind(this)
    this.switchPowerSave = this.switchPowerSave.bind(this)
    this.render = this.render.bind(this)

    $(this._upButton).click((event) => {
      this.up()
      this.render()
    })





    $(this._resetButton).click((event) => {
      this.reset()
      this.render()
    })

    $(this._powerSaveButton).click((event) => {
      this.switchPowerSave()
      this.render()
    })

  }

  setupControls() {
    // this._downButton = document.createElement('button')

    // $(this._downButton).addClass('action-btn').text('down')

    // this._stateDiv = document.createElement('div')
    $(this._element).append("<div id='thermostat-state'>")

    // this._downButton = $('<button>').addClass('action-btn').text('down')
    // this._element.append(this._downButton)
    this._element.append(this.getDownButton())
    // $(this._downButton).click((event) => {
    //   this.down()
    //   this.render()
    // })
  }

  getDownButton() {
    let downButton = $('<button>').addClass('action-btn').text('down')
    $(downButton).click((event) => {
      this.down()
      this.render()
    })
    return downButton
  }

  render() {
    let html = [
      `<p id='current-temperature'>${this.targetTemperature}</p>`,
      `<p>Energy usage: ${this.energyUsage()}</p>`
    ].join('')
    $(this._powerSaveButton).text(`Power save: ${this.getPowerSaveStatus()}`)
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
