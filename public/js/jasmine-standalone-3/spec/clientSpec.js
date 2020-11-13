describe('client', () => {
  let client
  let mock$
  let apiResponse
  
  beforeEach(() => {
    mock$ = { get: (url, callback) => { return apiResponse }, post: (url, data) => {} }
    client = new Client(mock$)
  })

  it('#get gets data from the API', () => {
    spyOn(mock$, 'get')
    client.get()
    expect(mock$.get).toHaveBeenCalledWith('/api/thermostat', client.returnTemperature)
  })

  it('#returnTemperature returns the temperature from the response data', () => {
    expect(client.returnTemperature({temperature: '20'})).toEqual('20')
  })

  it('#post posts a temperature to the API', () => {
    spyOn(mock$, 'post')
    client.post(19)
    expect(mock$.post).toHaveBeenCalledWith('/api/thermostat', {temperature: 19})
  })
})