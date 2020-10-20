import React from "react";

function Form(props) {
  return (
    <div id="form" className="form d-flex align-items-center">
      <form>
        <div className="form-row form-inline form-group">
          <label for="address" className="col-form-label">
            Location:
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={props.data.address}
            placeholder="Current Location"
            onChange={props.handleChange}
          />
        </div>
        <div id="time" className="form-column flex-wrap">
          <div className="time-range form-group form-inline">
            <div className="form-group form-inline">
              <label for="startTime" className="col-form-label">
                From:
              </label>
              <input
                type="time"
                className="form-control"
                id="startTime"
                name="startTime"
                placeholder="00:00"
                value={props.data.startTime}
                onChange={props.handleChange}
              />
            </div>
            <div className="form-group form-inline">
              <label for="endTime" className="end col-form-label">
                To:
              </label>
              <input
                type="time"
                name="endTime"
                className="form-control"
                id="endTime"
                placeholder="00:00"
                value={props.data.endTime}
                onChange={props.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="form-row form-inline form-group">
          <label for="mileage" className="col-form-label">
            Preferred mileage:
          </label>
          <input
            type="number"
            className="form-control"
            id="mileage"
            name="mileage"
            placeholder="1"
            value={props.data.mileage}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group form-inline form-row">
          <label for="numResp" className="col-form-label">
            Number of responses
          </label>
          <input
            type="number"
            id="numResp"
            name="numResp"
            placeholder="1"
            value={props.data.numResp}
            className="form-control"
            onChange={props.handleChange}
          />
        </div>
        <div id="add-options" className="hide">
          <div className="form-group form-row form-inline">
            <label for="prioritize" className="col-form-label">
              Prioritize:
            </label>
            <div className="dropdown">
              <select
                className="form-control"
                name="prioritize"
                id="prioritize"
                data-toggle="dropdown"
                onChange={props.data.handleChange}
                value={props.data.prioritize}
              >
                <option value="temperature" selected>
                  Temperature
                </option>
                <option value="humidity">Humidity</option>
                <option value="perceived-temp">Perceived temperature</option>
              </select>
            </div>
          </div>
          <div className="form-group form-row form-inline">
            <label for="ordering" className="col-form-label">
              Ordering:
            </label>
            <div className="dropdown">
              <select
                className="form-control"
                name="order"
                id="order"
                value={props.data.order}
                onChange={props.handleChange}
                data-toggle="dropdown"
              >
                <option value="high-to-low" selected>
                  High to low
                </option>
                <option value="low-to-high">Low to high</option>
              </select>
            </div>
          </div>
          <div className="form-group form-row">
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="imperial"
                name="units"
                className="units"
                value="imperial"
                checked={props.data.units === "imperial"}
                onChange={props.handleChange}
              />
              <label className="col-control-label" for="imperial">
                Imperial
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="metric"
                name="units"
                className="units"
                value="metric"
                checked={props.data.units === "metric"}
                onChange={props.handleChange}
              />
              <label className="col-control-label" for="metric">
                Metric
              </label>
            </div>
          </div>
        </div>
        <div className="form-group form-row">
          <button
            type="submit"
            id="submit_weather"
            value="Submit Weather"
            className="btn btn-secondary submit"
          >
            Get run!
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
