import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastFormatted from "./ForecastFormatted";

export default function Forecast(props) {
  let [forecastLoaded, setForecastLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setForecastLoaded(false);
  }, [props.coordinates]);

  function handleForecast(response) {
    /* this was changed from response.data to response.data.daily as otherwise the loop function below won't work 
    (object of objects, response.data.daily is an array of objects), and we don't need the hourly data etc */
    setForecastData(response.data.daily);
    setForecastLoaded(true);
  }

  /* the structure of the API can be seen here: 
  https://api.openweathermap.org/data/2.5/onecall?lat=50&lon=50&appid=eae061c95483dd066657bfc7525418ed&units=metric */
  if (forecastLoaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col-md" key={index}>
                  <ForecastFormatted data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "eae061c95483dd066657bfc7525418ed";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleForecast);
  }
}
