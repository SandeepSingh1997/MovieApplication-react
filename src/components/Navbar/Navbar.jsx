import { useState } from "react";

export default function Navbar({ onSearchClick }) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <header>
      <p>What the movie ?</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearchClick(searchInput);
        }}
      >
        <input
          type="text"
          placeholder="search movie"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button>search</button>
      </form>
    </header>
  );
}
