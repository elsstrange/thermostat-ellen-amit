class Thermostat {
  constructor() {
    const defaultTarget = 20
    this.targetTemperature = defaultTarget
  }

  up() {
    return ++ this.targetTemperature
  }

  down() {
    const minimumTarget = 10
    
    if(this.targetTemperature > minimumTarget) {
      this.targetTemperature --
    }
    return this.targetTemperature
  }
}