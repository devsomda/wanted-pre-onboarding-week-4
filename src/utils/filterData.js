export const filterData = (id, state, setState) => {
  let newFilteredId;
  if (!state.includes(id)) {
    newFilteredId = [...state, id];
  } else {
    newFilteredId = state.filter((filteredId) => filteredId !== id);
  }
  setState(newFilteredId);
};

export const resetFilter = (setState) => {
  setState([]);
};
