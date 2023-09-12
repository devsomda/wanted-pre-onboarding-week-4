import React from "react";
import objToArr from "../utils/objToArr";
import mockData from "../mockData.json";
import { useFilterContext } from "../context/filterContext";

const prevData = objToArr(mockData.response, "date");
const idArr = [];
prevData.map((data) => {
  if (!idArr.includes(data.id)) {
    idArr.push(data.id);
  }
});

export default function Filter() {
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
