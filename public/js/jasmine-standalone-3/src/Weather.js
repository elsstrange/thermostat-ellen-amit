// weatherApp       >>> weatherDisplay
//                  >>> weatherForm
//                  >>> weatherApi


class Weather {
  constructor(element, form, weatherApi) {
    this._element = element
    this._form = form
    this.render = this.render.bind(this)
    this.getWeather = this.getWeather.bind(this)


    this.getWeather()

    $(this._form).submit((event) => {
      event.preventDefault()
      let newLocation = $( "input ").first().val()
      let newCountry = $( "input ").eq(1).val()
      this.getWeather(newLocation, newCountry)
    })

  }

  getWeather(location = 'London', country = 'UK') {
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${location},${country}&APPID=${weatherApiKey}&units=metric`, (weatherData) => {
      this.render(weatherData)
    }).fail(() => {
      alert(`${location} does not exist`)
    })
  }

  render(weatherData) {
    let location = `Location: ${weatherData.name}, ${weatherData.sys.country}<br>`
    let weatherDescription = `Weather Description: ${weatherData.weather[0].description}<br>`
    let temperature = `Temperature: ${weatherData.main.temp}<br>`
    let feelsLikeTemperature = `Feels like: ${weatherData.main.feels_like}`
    $('#weather').html(location + weatherDescription + temperature + feelsLikeTemperature)
  }


}
