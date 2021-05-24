import "./CrimePage.css";
import CrimeData from "../data/CrimeData";
import React from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Years from "../data/YearData";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
} from "@progress/kendo-react-charts";
import "hammerjs";

function CrimePage() {
  const [location, setLocation] = useState("AL");
  const [stateName, setStateName] = useState("Alabama");
  const [until, setUntil] = useState("1986");

  const { data, isPending, error } =
    useFetch(
      "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json"
    ) || {};

  const { endYears } = Years;

  const { offenseData, isDataPending } =
    CrimeData(location, until, until) || {};
  console.log(offenseData);

  return (
    <div className="crime-page">
      {error && <div className="err-msg"> {error} </div>}

      <div className="sub-header">
        <i className="fas fa-peace spin"></i>
        <span className="logo-text"> SAFETY APP</span>
      </div>

      {isPending && <div className="loading-page">Loading... </div>}

      {!isPending && (
        <form className="form-inline">
          <label for="state">State: </label>
          <br />
          <select
            id="state"
            name="state"
            placeholder="Select State"
            onChange={(e) => {
              setLocation(e.target.value)
              setStateName(e.target.id)
              }}
            required
          >
            {data.map((states) => (
              <option value={states.abbreviation} key={states.abbreviation} id={states.name}>
                {" "}
                {states.name}{" "}
              </option>
            ))}
          </select>
          <label for="since">Select Year: </label>
          <br />
          <select
            id="until"
            name="until"
            placeholder="Select Year"
            onChange={(e) => setUntil(e.target.value)}
            required
          >
            {endYears.map((endYears) => (
              <option value={endYears.year} key={endYears.key}>
                {" "}
                {endYears.year}{" "}
              </option>
            ))}
          </select>
          {/* <Button outline color="secondary" className="search-btn">
            <i className="fas fa-search"></i>
          </Button> */}
        </form>
      )}

      {!isDataPending && (
        <Chart
          style={{
            width: 1850,
            height: 1000,
            background: "green",
          }}
        >
          <ChartTitle text={`${offenseData.title} in ${stateName} ${until}`} />
          <ChartLegend position="bottom" />
          <ChartSeries>
            <ChartSeriesItem
              type="pie"
              data={offenseData.data}
              field="value"
              categoryField="key"
              labels={{
                visible: true,
                content: offenseData.data.key,
              }}
            />
          </ChartSeries>
        </Chart>
      )}
    </div>
  );
}

export default CrimePage;
