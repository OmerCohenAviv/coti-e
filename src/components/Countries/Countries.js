import React from "react";

const countries = [{ name: "England" }, { name: "Israel" }, { name: "Italy" }];

const Countries = () => {
  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {countries.map((country) => (
          <li>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
