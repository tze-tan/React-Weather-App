import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div className="Description">
      <div className="main-container">
        <h1 id="city" className="city">
          Munich
        </h1>
        <div className="temperature-container">
          <div id="temp-image" className="temp-image">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
              className="temp-image"
              alt-text=""
            />
          </div>
          <div className="current-temperature" id="current-temperature">
            24
          </div>
          <div className="temperature-celcius">°C</div>
        </div>
      </div>
      <div>
        <p>
          <span id="dayintheweek">Tuesday</span>, <span id="time">23:33</span>,
          <span id="description"> overcast clouds</span> <br />
          Humidity: {""}
          <span id="humidity" className="humidity">
            15%
          </span>{" "}
          Windspeed:{" "}
          <span id="windspeed" className="windspeed">
            65km/h
          </span>
        </p>
      </div>
    </div>
  );
}
