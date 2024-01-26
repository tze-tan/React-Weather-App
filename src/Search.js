import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Description from "./Description";
import Forecast from "./Forecast";

export default function Search(props) {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setReady(true);
    setWeatherData({
      currentTemperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      windspeed: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      iconUrl: "",
    });
  }

  if (ready) {
    return (
      <div className="Search">
        <form id="search-component" className="search-component">
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                className="search-input"
                placeholder="Enter a city"
                required
              />
            </div>
            <div className="col-2">
              <input type="submit" className="submit" value="Search" />
            </div>
          </div>
        </form>
        <Description data={weatherData} />
        <Forecast />
      </div>
    );
  } else {
    const apiKey = "5354b60afda2b7800186c06153932396";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
