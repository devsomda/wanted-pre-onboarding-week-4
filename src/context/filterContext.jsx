import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filteredIds, setFilteredIds] = useState([]);

  return (
    <FilterContext.Provider value={{ filteredIds, setFilteredIds }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("Cannot find filter Provider");
  }
  return context;
};
