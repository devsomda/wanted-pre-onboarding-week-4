import React from "react";
import { useFilterContext } from "../context/filterContext";
import { filterData, resetFilter } from "../utils/filterData";

export default function Filter({ idArr }) {
  const { filteredIds, setFilteredIds } = useFilterContext();

  return (
    <div className="filter-button-container">
      <h3>Filter</h3>
      <button type="button" onClick={() => resetFilter(setFilteredIds)}>
        필터 해제
      </button>
      {idArr.map((id) => (
        <button
          key={id}
          className={
            filteredIds.includes(id) ? "focused-button" : "non-focused-button"
          }
          onClick={() => filterData(id, filteredIds, setFilteredIds)}
        >
          {id}
        </button>
      ))}
    </div>
  );
}
