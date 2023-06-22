import { createContext } from "react";

const SearchContext = createContext();

function SearchProvider({ children, searchText }) {
  return (
    <SearchContext.Provider value={searchText}>
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext };

export default SearchProvider;
