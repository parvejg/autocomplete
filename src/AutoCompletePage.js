import { useState } from "react";
import "./AutocompletePage.css";
import { countries } from "./ContriesArrary";
export const Autocomplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [clickedCountry, setClickedCountry] = useState("");
  const filteredArray = countries?.filter((item) =>
    item.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <div className="main-container">
      <h1>Autocomplete</h1>
      <p className="start-txt">Start typing:</p>
      <div className="autocomplete-wrapper">
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
            setClickedCountry(e.target.value);
          }}
          type="text"
          className="autocomplete-input"
          placeholder="Country"
          value={clickedCountry ? clickedCountry : ""}
        />
        <button className="submit-btn">Submit</button>
      </div>

      <div>
        {inputValue &&
          filteredArray?.map((countryName) => {
            return (
              <button
                type="button"
                className="countryName-wrapper"
                onClick={(e) => {
                  setClickedCountry(e.target.value);
                }}
                value={countryName}
              >
                {countryName}
              </button>
            );
          })}
      </div>
    </div>
  );
};
