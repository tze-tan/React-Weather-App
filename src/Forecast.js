import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div
        className="weather-forecast-container"
        id="weather-forecast-container"
      >
        <div class="weather-forecast" id="weather-forecast">
          <div class="weather-forecast-day">Wed</div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
            class="weather-forecast-icon"
          />
          <div class="weather-forecast-temp">
            <strong>0°</strong> 5°
          </div>
        </div>

        <div class="weather-forecast" id="weather-forecast">
          <div class="weather-forecast-day">Thu</div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
            class="weather-forecast-icon"
          />
          <div class="weather-forecast-temp">
            <strong>0°</strong> 5°
          </div>
        </div>

        <div class="weather-forecast" id="weather-forecast">
          <div class="weather-forecast-day">Fri</div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
            class="weather-forecast-icon"
          />
          <div class="weather-forecast-temp">
            <strong>0°</strong> 5°
          </div>
        </div>

        <div class="weather-forecast" id="weather-forecast">
          <div class="weather-forecast-day">Sat</div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
            class="weather-forecast-icon"
          />
          <div class="weather-forecast-temp">
            <strong>0°</strong> 5°
          </div>
        </div>

        <div class="weather-forecast" id="weather-forecast">
          <div class="weather-forecast-day">Sun</div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
            class="weather-forecast-icon"
          />
          <div class="weather-forecast-temp">
            <strong>0°</strong> 5°
          </div>
        </div>
      </div>
    </div>
  );
}
