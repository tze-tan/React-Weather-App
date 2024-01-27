import React from "react";

export default function ForecastFormatted(props) {
  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }

  function parseTime() {
    let date = new Date(props.data.dt * 1000);
    let friendlyDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return friendlyDays[date.getDay()];
  }

  let iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  return (
    <div>
      <div className="weather-forecast-day">{parseTime()}</div>
      <img
        src={iconUrl}
        className="weather-forecast-icon"
        alt-text={props.data.weather[0].description}
      />
      <div className="weather-forecast-temp">
        <span className="weather-forecast-max">{maxTemp()}</span>
        <span className="weather-forecast-min"> {minTemp()}</span>
      </div>
    </div>
  );
}
