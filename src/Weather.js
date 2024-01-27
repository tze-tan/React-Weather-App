import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Description from "./Description";
import Forecast from "./Forecast";

export default function Weather(props) {
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setReady(true);
    setWeatherData({
      coordinates: response.data.coord,
      currentTemperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      windspeed: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "5354b60afda2b7800186c06153932396";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form
          onSubmit={handleSubmit}
          id="search-component"
          className="search-component"
        >
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                className="search-input"
                placeholder="Enter a city"
                required
                onChange={updateCity}
              />
            </div>
            <div className="col-2">
              <input type="submit" className="submit" value="Search" />
            </div>
          </div>
        </form>
        <Description data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search(city);
  }
}
