import React, { useState } from "react";
import axios from "axios";

import "./weather.css";

export default function Weather() {
  const [city, setCity] = useState("null");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("");

  function displayWeather(response) {
    console.log();
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      fahrenheit: (response.data.main.temp * 9) / 5 + 32,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "91f41f9a3182f09b51571aedfc243a1c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  let form = (
    <div className="card">
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            autoFocus="on"
            autoComplete="off"
            onChange={updateCity}
            placeholder="Enter city name..."
            className="form-control"
          />
          <input
            type="submit"
            value="Search"
            className="form-control btn btn-danger w-100"
          />
        </form>
      </div>
    </div>
  );
  if (loaded) {
    return (
      <div className="WeatherDetails">
        {form}
        <ul>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
          <li className="weatherDescription">{weather.city}</li>
          <li className="weatherDescription">{weather.description}</li>
          <li>
            {Math.round(weather.temperature)}°C |{" "}
            {Math.round(weather.fahrenheit)}°F
          </li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
