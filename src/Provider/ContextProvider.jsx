import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SearchContext = createContext(null);
const ContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const contextValue = {
    searchValue,
    setSearchValue,
  };
  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};
ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;
