import React from "react";
import classNames from "classnames";
import "./sidebar.scss";

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const Sidebar = ({ selectedLetter, setSelectedLetter }) => {
  return (
    <div className="sidebar">
      <div className="search">
        <label>Free Search</label>
        <input
          value={selectedLetter}
          onChange={({ target }) => setSelectedLetter(target.value)}
        />
      </div>
      <div className="sidebar__letters">
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => setSelectedLetter(letter)}
            className={classNames({
              sidebar__letter: true,
              "sidebar__letter--selected": selectedLetter === letter,
            })}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
