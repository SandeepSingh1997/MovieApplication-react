import { useRef, useState } from "react";

import SuggestionBox from "./SuggestionBox";
import { getSuggestions } from "../../apis/movieApi";

export default function Navbar({ onSearchClick }) {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const timoutRef = useRef(null);

  const fetchSuggestions = (function () {
    return (query) => {
      clearTimeout(timoutRef.current);
      timoutRef.current = setTimeout(() => {
        getSuggestions(query)
          .then((res) => {
            console.log(res);
            setSuggestions(res);
          })
          .catch((err) => {
            console.log(err);
          });
        console.log("timeout");
      }, 5000);
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
      {suggestions.length > 0 ? (
        <SuggestionBox suggestions={suggestions} />
      ) : null}
    </header>
  );
}
