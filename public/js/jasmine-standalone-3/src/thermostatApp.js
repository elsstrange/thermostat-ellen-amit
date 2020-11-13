'use strict';

class thermostatApp {
  constructor(element, thermostat = new Thermostat()) { //, thermostatInterfaceClass = thermostatInterface) {
    this.element = element
    this.thermostatFromArg = thermostat
    this.thermostat = new Thermostat()
    this.client = new Client($)
    this.interface = new thermostatInterface(this.element, this.thermostat, this.client)
  }
}