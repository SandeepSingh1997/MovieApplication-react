import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import SuggestionBox from "./SuggestionBox";
import { getSuggestions } from "../../apis/movieApi";

export default function Navbar({ onSearchClick, onMovieSelect }) {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  const timoutRef = useRef(null);

  const fetchSuggestions = (function () {
    return (query) => {
      clearTimeout(timoutRef.current);
      timoutRef.current = setTimeout(() => {
        getSuggestions(query)
          .then((res) => {
            // console.log(res);
            setSuggestions(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }, 5000);
    };
  })();

  const handleSearchInputChange = (e) => {
    const input = e.target.value;
    fetchSuggestions(input);
    setSearchInput(input);
  };

  const handleSuggestionSelect = (movieId) => {
    navigate(`/movie/${movieId}`);
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
        <SuggestionBox
          suggestions={suggestions}
          onSuggestionSelect={handleSuggestionSelect}
        />
      ) : null}
    </header>
  );
}
