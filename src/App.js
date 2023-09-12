import { useState } from "react";
import "./App.css";
import Chart from "./components/Chart";
import Filter from "./components/Filter";
import { TITLE } from "./constants";
import { FilterProvider } from "./context/filterContext";

function App() {
  return (
    <div className="App">
      <h2>{TITLE} 데이터</h2>
      <FilterProvider>
        <Filter />
        <Chart />
      </FilterProvider>
    </div>
  );
}

export default App;
