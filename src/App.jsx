import { useState } from "react";

import Main from "./components/Main/Main";
import SearchProvider from "./components/Main/SearchProvider";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = (searchInputText) => {
    setSearchText(searchInputText);
  };

  return (
    <>
      <SearchProvider searchText={searchText}>
        <Navbar onSearchClick={handleSearchClick} />
        <hr />
        {/* <Main /> */}
      </SearchProvider>
    </>
  );
}

export default App;
