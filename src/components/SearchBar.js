import React, { useState } from "react";

const SearchBar = props => {
  const [input, setInput] = useState("");
  const { goSearch } = props;

  return (
    <div className="searchbar">
      <div className="orangeEllipse"></div>
      <form
        onSubmit={event => {
          event.preventDefault();
          goSearch(input);
        }}
      >
        <input
          placeholder="Que recherchez vous"
          type="text"
          value={input}
          onChange={event => {
            setInput(event.target.value);
          }}
        ></input>
        <input type="submit" value="Rechercher" />
      </form>
    </div>
  );
};
export default SearchBar;
