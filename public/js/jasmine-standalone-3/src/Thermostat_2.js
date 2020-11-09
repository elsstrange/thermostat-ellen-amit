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

    this._downButton = document.createElement('button') // add it to the html tree.
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

    console.log('Before setting down button listener')

    $(this._downButton).click((event) => {
      console.log('start of down button callback')
      this.down()
      this.render()
      console.log('end of down button callback')
    })
    console.log('After setting down button listener')

    $(this._resetButton).click((event) => {
      this.reset()
      this.render()
    })

    $(this._powerSaveButton).click((event) => {
      this.switchPowerSave()
      this.render()
    })

  }

  render() {
    let html = [
      `<p id='current-temperature'>${this.targetTemperature}</p>`,
      `<p>Energy usage: ${this.energyUsage()}</p>`
    ].join('')
    $(this._powerSaveButton).text(`Power save: ${this.getPowerSaveStatus()}`)
    $(this._element).html(html)
    this._element.append(this._downButton)
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
