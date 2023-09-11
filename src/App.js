import "./App.css";
import Chart from "./components/Chart";
import { TITLE } from "./constants";

function App() {
  return (
    <div className="App">
      <h2>{TITLE} 데이터</h2>
      <Chart />
    </div>
  );
}

export default App;
