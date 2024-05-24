

# Weather App ☁️🌡️

Weathrio is a simple and intuitive weather website that provides `up-to-date weather information` for locations worldwide. With clean design and easy navigation, users can `quickly access current weather `conditions, hourly forecasts, and `extended forecasts for any location` they choose.


<h1 align="center"> 

<a href="https://weather-with-prakhar.netlify.app/"><strong>➥ Live Demo</strong></a>
</h1>

# Screenshots 🎉

![Weathrio](https://github.com/Prakhar-002/JAVA-CODE/assets/136890202/7aa749a9-1907-433c-9dd7-6f3915b7f739)



<br/>

# 💻 Tech Stack 🎗️

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)  ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

<br/>

## Features 🥳
- `Current Weather` -> Get real-time weather updates including `temperature, humidity, wind speed, and more for any city or town`.

- `Hourly Forecast` -> Plan your day with `hour-by-hour weather forecasts` to stay prepared for changing weather conditions.

- `Extended Forecast` -> Check the` weather outlook for the next 7 days`.

- `Search Functionality` -> Easily **search for weather information by city name** with `autocomplete suggestions for quicker access`.

- `Responsive Design` -> Enjoy a seamless experience across devices, from desktops to smartphones, with our responsive website layout.

<br/>

## Deployment 🚀

To To run weathrio locally, run this command on your git bash and **`Go to api.js file || Create your api_key and paste there`**


`For window`
```bash
  git clone https://github.com/Prakhar-002/Weatherio-The-weather-app.git
```

`For Linux and macOS`
```bash
  sudo git clone https://github.com/Prakhar-002/Weatherio-The-weather-app.git
```

<br/>

## API Reference --> Open Weather API 🧩

### Default API 🤔

```https
  GET --> https://api.openweathermap.org/  == Default
```

| Parameter | Type     | My api_key                |
| :-------- | :------- | :------------------------- |
| `appid` | `string` | **3186990c0f25f45a3a6cc958537c2b50**|

<br/>

### Requires || Optional Parameters 


| Parameter | Type     | Example                       | Description                       |
| :-------- | :------- | :-------------------------------- | :-------------------------------- |
| `lat`  `Requires`    | `number` | **28.6517178** |**Latitude Of your city** |
| `lon`  `Requires`    | `number` | **77.2219388** | **Longitude of your city** |
| `q`   `Requires`   | `string` | **delhi** | **City name** |
| `limit`  `optional`     | `number` | **5** | **NUmber of data** |
| `units`  `optional`    | `string` | **matrix** | **Units of measurement** |

<br/>

### API for **Current Weather** --> 🌡️

```https
  GET --> {Default}data/2.5/weather?lat=${}&lon=${}&units=metric&appid=${api_key}
```

<br/>

### API for **Forecast** --> 🕛

```https
  GET --> {Default}data/2.5/forecast?lat=${}&lon=${}&units=metric&appid=${api_key}
```

<br/>

### API for **Air Pollution** --> 👻

```https
  GET --> {Default}data/2.5/air_pollution?lat=${}&lon=${}&appid=${api_key}
```
<br/>

### API for **Reverse Geo** --> 🌐

```https
  GET --> {Default}geo/1.0/reverse?lat=${}&lon=${}&limit=5&appid=${api_key}
```

<br/>

### API for **Geo** --> 🌍

```https
  GET --> {Default}geo/1.0/direct?q=${query}&limit=5&appid=${api_key}
```
