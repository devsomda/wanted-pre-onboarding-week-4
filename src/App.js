import { useState } from "react";
import "./App.css";
import Chart from "./components/Chart";
import Filter from "./components/Filter";
import { TITLE } from "./constants";

function App() {
  const [filteredIds, setFilteredIds] = useState([]);
  return (
    <div className="App">
      <h2>{TITLE} 데이터</h2>
      <Filter filteredIds={filteredIds} setFilteredIds={setFilteredIds} />
      <Chart filteredIds={filteredIds} />
    </div>
  );
}

export default App;
