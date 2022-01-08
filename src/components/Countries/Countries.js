import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import "./countries.scss";

const Countries = ({ selectedLetter, setSelectedCountry }) => {
  const { countries } = useSelector((state) => state.countries);
  const filteredCountries = useMemo(() => {
    if (selectedLetter) {
      return countries.filter((country) =>
        country.name.common.startsWith(selectedLetter)
      );
    }
    return countries;
  }, [selectedLetter, countries]);
  return (
    <div className="countries">
      <h1>Countries</h1>
      <h3>Select A Country for more detailed Information</h3>
      <ul className="countries__list">
        {filteredCountries.map((c) => (
          <li key={c.name.common}>
            <button onClick={() => setSelectedCountry(c)}>
              {c.name.common}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
