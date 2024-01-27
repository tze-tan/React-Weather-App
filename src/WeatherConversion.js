import React, { useState } from "react";
import "./Description.css";

export default function WeatherConversion(props) {
  /*
  let [unit, setUnit] = useState("Celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("Celcius");
  }

  function convertToFahrenheit() {
    return (props.celciusTemperature * 9) / 5 + 32;
  }

  if (unit === "Celcius") {*/
  return (
    <span className="WeatherConversion">
      <span className="current-temperature">{props.celciusTemperature}</span>
      <span className="temperature-celcius">°C</span>
    </span>
  );
} /*
  if (unit === "Fahrenheit") {
    let FahrenheitTemperature = Math.round(convertToFahrenheit());
    return (
      <span className="WeatherConversion">
        <span className="current-temperature">{FahrenheitTemperature}</span>
        <span className="temperature-celcius">
          <a href="/" onClick={showCelcius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
*/
