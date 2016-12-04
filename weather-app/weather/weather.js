const request = require('request');

let getWeather = (lat, long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/b12773caf7718f7e893086ec9d9761ba/${lat},${long}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Dark Sky API server.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
