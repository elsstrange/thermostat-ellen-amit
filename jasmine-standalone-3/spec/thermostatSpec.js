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
    for(i = 1; i<=15; i++) {
      thermostat.down()
    }
    expect(thermostat.down()).toEqual(10)
  })

})