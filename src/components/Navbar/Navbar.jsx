import { useRef, useState } from "react";

import SuggestionBox from "./SuggestionBox";
import { getSuggestions } from "../../apis/movieApi";

export default function Navbar({ onSearchClick }) {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([1, 2, 3]);

  const timoutRef = useRef(null);

  const fetchSuggestions = (function () {
    return (query) => {
      clearTimeout(timoutRef.current);
      timoutRef.current = setTimeout(() => {
        // getSuggestions(query).then(res=>{
        // setSuggestions(res);
        console.log("timeout");
      }, 4000);
    };
  })();

  const handleSearchInputChange = (e) => {
    const input = e.target.value;
    fetchSuggestions(input);
    setSearchInput(input);
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
