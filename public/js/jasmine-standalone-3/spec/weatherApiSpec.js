describe('weatherApi', () => {
  let weatherapi
  let Jquery
  let jsonMock
  let location
  let country
  
  beforeEach(() => {
    Jquery = $
    weatherapi = new weatherApi(Jquery)
  })
  
  describe('#get', () => {
    it('makes an API call with default of London, UK and returns the result', () => {
      // jqueryMock = jasmine.createSpy("Jquery Spy")     
      spyOn(Jquery, 'get').and.returnValue(jsonMock)
      expect(weatherApi.get()).toEqual(jsonMock)
      expect(Jquery).toHaveBeenCalledWith("London", "UK")
    })
  })
})