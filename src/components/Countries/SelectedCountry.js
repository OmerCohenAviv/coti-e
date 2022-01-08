import React from "react";
import "./countries.scss";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const SelectedCountry = ({ country, setSelectedCountry }) => {
  return (
    <div className="selected-country">
      <button
        className="selected-country__return"
        onClick={() => setSelectedCountry(null)}
      >
        Back
      </button>
      <h1 className="selected-country__title">
        You are viewing - {country.name.common}
      </h1>
      <div className="selected-country__info-container">
        <div className="country-info">
          <span>Capital</span>
          <span>{country.capital && country.capital[0]}</span>
        </div>
        <div className="country-info">
          <span>Population</span>
          <span>{numberWithCommas(country.population)}</span>
        </div>
        <div className="country-info">
          <span>FLAG</span>
          <img
            src={country.flags.svg}
            alt="country"
            style={{ width: "30px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectedCountry;
