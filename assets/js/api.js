'use strict';

const api_key = "3186990c0f25f45a3a6cc958537c2b50" ;

export const fetchData = function (URL , callback) {
      fetch(`${URL}&appid=${api_key}`)

      .then((res) => {
            return res.json();
      })
      .then((data) => {
            callback(data);
      })
      .catch((e) => {
      });
}

export const url = {
      currentWeather(lat, lon) {
            return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`
      },
      forecast(lat, lon) {
            return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`
      },
      airPollution(lat, lon) {
            return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}`
      },
      reverseGeo(lat, lon) {
            return `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5`
      },
      geo (query) {
            return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
      }
}


