import { useState, createContext } from "react";

export const SearchContext = createContext()

const SearchContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("")

  return (
    <SearchContextProvider value={{searchText, setSearchText}}>
      {children}
    </SearchContextProvider>
  );
};

export default SearchContextProvider;