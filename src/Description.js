import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div className="Description">
      <div className="main-container">
        <h1 id="city" className="city">
          Munich
        </h1>
        <div className="row">
          <p>Tuesday, 23:33</p>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
              className="temp-image"
              alt-text="temperature"
            />

            <span className="current-temperature" id="current-temperature">
              24
            </span>
            <span className="temperature-celcius">°C</span>
          </div>

          <div className="col-6">
            <ul>
              <li>Description: {""} Overcast clouds</li>
              <li>
                Humidity: {""}
                15%
              </li>
              <li>Windspeed: 65km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
