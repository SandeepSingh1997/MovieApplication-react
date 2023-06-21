import { useState } from "react";
import SuggestionBox from "./SuggestionBox";

export default function Navbar({ onSearchClick }) {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([1, 2, 3]);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <header>
      <p>MoveE</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearchClick(searchInput);
        }}
      >
        <input
          type="text"
          placeholder="search movie"
          onChange={handleSearchInputChange}
        />
        <button>search</button>
      </form>
      {true ? <SuggestionBox suggestions={suggestions} /> : null}
    </header>
  );
}
