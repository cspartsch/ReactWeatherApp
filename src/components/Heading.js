import React from "react";

export default function Heading(prop) {
  return (
    <div>
      <h1>Weather Search</h1>
      <form className="searchForm" id="searchForm">
        <div className="mb-3 cityName">
          <div className="row searchRow">
            <label className="form-label">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Enter City Name"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  id="search-Input"
                />
                <div className="col-2 cityBarSearch">
                  <button
                    className="btn btn-outline-primary btnsearch"
                    id="btnSearch"
                  >
                    Search
                  </button>
                </div>
                <div className="col-3 currentLocation">
                  <button
                    type="button2"
                    className="btn btn-success btncurrent"
                    id="btnCurrent"
                    name="btncurrent"
                  >
                    Location
                    <i className="fa-solid fa-location-dot"></i>
                  </button>
                </div>
              </div>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
