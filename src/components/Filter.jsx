import React from "react";
import { useFilterContext } from "../context/filterContext";

export default function Filter({ idArr }) {
  const { filteredIds, setFilteredIds } = useFilterContext();

  const filterData = (id) => {
    let newFilteredId;
    if (!filteredIds.includes(id)) {
      newFilteredId = [...filteredIds, id];
    } else {
      newFilteredId = filteredIds.filter((filteredId) => filteredId !== id);
    }
    setFilteredIds(newFilteredId);
  };

  const resetFilter = () => {
    setFilteredIds([]);
  };

  return (
    <div className="filter-button-container">
      <h3>Filter</h3>
      <button type="button" onClick={resetFilter}>
        필터 해제
      </button>
      {idArr.map((id) => (
        <button
          key={id}
          className={
            filteredIds.includes(id) ? "focused-button" : "non-focused-button"
          }
          onClick={() => filterData(id)}
        >
          {id}
        </button>
      ))}
    </div>
  );
}
