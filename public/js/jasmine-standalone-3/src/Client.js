class Client {
  constructor(client = $) {
    this.$ = client
    this.temperature = 0
  }

  get() {
    this.$.get('/api/thermostat', this.returnTemperature).done( () => {debugger; return this.temperature})
  }

  post(data) {
    this.$.post('/api/thermostat', {temperature: data})
  }

  returnTemperature(data) {
    this.temperature = data.temperature
  }
}