import React from "react";

export default function WeatherDetails() {
  return (
    <div className="weatherDetails">
      <div>
        <div className="row justify-content-md-center">
          <div className="col-3">
            Humidity
            <div className="humidityPercent" id="humidityPercent">
              50%
            </div>
          </div>
          <div className="col-2">
            Wind
            <div className="windSpeed" id="windSpeed">
              5 mph
            </div>
          </div>
          <div className="col-3">
            UV Index
            <div className="uvIndex" id="uvIndex">
              2
            </div>
          </div>
        </div>
      </div>
      <div className="forecastInfo" id="forecastInfo"></div>
    </div>
  );
}
