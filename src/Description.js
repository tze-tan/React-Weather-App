import React from "react";
import "./Description.css";
import FormattedDate from "./FormattedDate";

export default function Description(props) {
  return (
    <div className="Description">
      <div className="main-container">
        <h1 id="city" className="city">
          {props.data.city}
        </h1>
        <div className="row">
          <p>
            <FormattedDate date={props.data.date} /> | {""}
            <span className="text-capitalize description-text">
              {" "}
              {props.data.description}{" "}
            </span>
          </p>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
              className="temp-image"
              alt-text="temperature"
            />

            <span className="current-temperature" id="current-temperature">
              {props.data.currentTemperature}
            </span>
            <span className="temperature-celcius">°C</span>
          </div>

          <div className="col-6">
            <ul>
              <li>
                Humidity: {""} {props.data.humidity}%
              </li>
              <li>Windspeed: {props.data.windspeed}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
