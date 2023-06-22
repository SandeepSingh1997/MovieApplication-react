import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Main from "./components/Main/Main";
import MoviePage from "./components/MoviePage/MoviePage";
import SearchProvider from "./components/Main/SearchProvider";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = (searchInputText) => {
    setSearchText(searchInputText);
  };

  return (
    <>
      <BrowserRouter>
        <SearchProvider searchText={searchText}>
          <Navbar onSearchClick={handleSearchClick} />
          <hr />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movie/:movieId" element={<MoviePage />} />
          </Routes>
        </SearchProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
