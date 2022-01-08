import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Countries from "./components/Countries/Countries";
import "./App.css";
import SelectedCountry from "./components/Countries/SelectedCountry";

function App() {
  const [selectedLetter, setSelectedLetter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const onUpdateLetter = (updatedLetter) => {
    setSelectedCountry(null);
    if (updatedLetter === selectedLetter) {
      return setSelectedLetter("");
    }
    return setSelectedLetter(updatedLetter);
  };
  return (
    <div className="App">
      <Sidebar
        selectedLetter={selectedLetter}
        setSelectedLetter={onUpdateLetter}
      />
      <div style={{ marginLeft: "400px" }}>
        {!selectedCountry && (
          <Countries
            selectedLetter={selectedLetter}
            setSelectedCountry={setSelectedCountry}
          />
        )}
        {selectedCountry && (
          <SelectedCountry
            country={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        )}
      </div>
    </div>
  );
}

export default App;
