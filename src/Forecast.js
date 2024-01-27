import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastFormatted from "./ForecastFormatted";

export default function Forecast(props) {
  let [forecastLoaded, setForecastLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);
  function handleForecast(response) {
    console.log(response.data);
    setForecastData(response.data);
    setForecastLoaded(true);
  }

  if (forecastLoaded) {
    let iconUrl = `https://openweathermap.org/img/wn/${forecastData.daily[0].weather[0].icon}@2x.png`;

    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <ForecastFormatted data={forecastData} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "eae061c95483dd066657bfc7525418ed";
    let latitude = props.data.lat;
    let longitude = props.data.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleForecast);
  }
}
