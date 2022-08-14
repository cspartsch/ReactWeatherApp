import React from "react";

export default function Weather(prop) {
  return (
    <div className="weather">
      <div className="tempRange">
        <div className="row">
          <div className="col-6" id="temp-hi-low">
            <ul>
              <li className="tempRange" id="temp-Hi">
                Hi 75
              </li>
              <li className="tempRange" id="temp-Low">
                Low 50
              </li>
            </ul>
          </div>
          <div className="col-6" id="current-Date-Time">
            <ul>
              <li className="date" id="current-Date">
                Saturday, July 16, 2022
              </li>
              <li className="date" id="current-Hour">
                9:30 PM PST
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="weatherDescription" id="weatherDescription">
        <ul>
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/sunny_s_cloudy.png"
            alt="Clear"
            id="icon"
            className="float-left icon"
          />

          <li id="current-City">Seattle</li>
          <li className="currentDescription" id="currentDescription">
            Mostly Clear
          </li>
        </ul>
        <span className="currentTemp" id="currentTemp">
          65
        </span>
        <span className="units" id="units">
          <a href="#" className="activeFahrenheitLink">
            {" "}
            °F
          </a>
          |
          <a href="#" className="celsiusLink">
            {" "}
            °C
          </a>
        </span>
      </div>
    </div>
  );
}
