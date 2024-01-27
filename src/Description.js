import React from "react";
import "./Description.css";
import FormattedDate from "./FormattedDate";
import WeatherConversion from "./WeatherConversion";

export default function Description(props) {
  return (
    <div className="Description">
      <div className="main-container">
        <h1 className="city">{props.data.city}</h1>
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
            <WeatherConversion
              celciusTemperature={props.data.currentTemperature}
            />
            <img
              src={props.data.iconUrl}
              className="temp-image"
              alt-text={props.data.description}
            />
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
