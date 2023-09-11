import React from "react";
import objToArr from "../utils/objToArr";
import mockData from "../mockData.json";

const prevData = objToArr(mockData.response, "date");
const idArr = [];
prevData.map((data) => {
  if (!idArr.includes(data.id)) {
    idArr.push(data.id);
  }
});

export default function Filter(props) {
  const { filteredIds, setFilteredIds } = props;

  const filterData = (id) => {
    let newFilteredId;
    if (!filteredIds.includes(id)) {
      newFilteredId = [...filteredIds, id];
    } else {
      newFilteredId = filteredIds.filter((filteredId) => filteredId !== id);
    }
    setFilteredIds(newFilteredId);
  };

  return (
    <div className="filter-button-container">
      <h3>Filter</h3>
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
