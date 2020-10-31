'use strict';

describe("Thermostat", () => {
  let thermostat

  beforeEach(() => {
    thermostat = new Thermostat()
  })

  it("shows current target temperature (default is 20)", () => {
    expect(thermostat.targetTemperature).toEqual(20)
  })

  it("increases the temperature by 1", () => {
    expect(thermostat.up()).toEqual(21)
    expect(thermostat.up()).toEqual(22)
  })

  it("decreases the temperature by 1", () => {
    expect(thermostat.down()).toEqual(19)
    expect(thermostat.down()).toEqual(18)
  })

  it("has a minimum temperature of 10 degrees", () => {
    for(let i = 1; i<=15; i++) {
      thermostat.down()
    }
    expect(thermostat.down()).toEqual(10)
  })

  it('resets the temperature to 20', () => {
    thermostat.up()
    thermostat.up()
    expect(thermostat.reset()).toEqual(20)
  })

  describe("Power Save", () => {
    it("limits the max temperature to 25 when on", () => {
      for(let i = 1; i <= 15; i++) {
        thermostat.up()
      }
      expect(thermostat.up()).toEqual(25)
    })

    it("limits the max temperature to 32 when off", () => {
      thermostat.switchPowerSave()
      for(let i = 1; i <= 15; i++) {
        thermostat.up()
      }
      expect(thermostat.up()).toEqual(32)
    })

    it('resets to 20 when switched on or off', () => {
      thermostat.up()
      thermostat.up()
      thermostat.switchPowerSave()
      expect(thermostat.targetTemperature).toEqual(20)
      thermostat.down()
      thermostat.down()
      thermostat.switchPowerSave()
      expect(thermostat.targetTemperature).toEqual(20)
    })
  })
  
  describe("Energy usage level", () => {
    it("shows low when target temperature is less than 18", () => {
      for(let i = 1; i <= 3; i++) {
        thermostat.down()
      }
      expect(thermostat.energyUsage()).toEqual('Low')
    })

    it("shows medium when target temperature is greater than or equal to 18 and less than or equal to 25", () => {
      expect(thermostat.energyUsage()).toEqual('Medium')
    })

    it("shows high when target temperature is greater than 25", () => {
      thermostat.switchPowerSave()
      for(let i = 1; i <= 6; i++) {
        thermostat.up()
      }
      expect(thermostat.energyUsage()).toEqual('High')
    })
  })
})
