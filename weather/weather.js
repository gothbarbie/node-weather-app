const request = require('request')

const getWeather = (lat, lng, callback) => {

  const API_KEY = 'b4a002342c48d38304dc4142c30bf862'

  request({
    url: `https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    } else {
      callback('Unable to fetch weather')
    }
  })
}

module.exports.getWeather = getWeather
