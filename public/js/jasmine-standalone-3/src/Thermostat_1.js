'use strict';

class Thermostat1 {

  constructor(temperature = 20) {
    // this.temperature = temperature
    // const defaultTarget = 20
    this.powerSave = true
    this.targetTemperature = temperature
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
