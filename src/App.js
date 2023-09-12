import Chart from "./components/Chart";
import Filter from "./components/Filter";
import { TITLE } from "./constants";
import { FilterProvider } from "./context/filterContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>{TITLE} 데이터</h2>
      <p>
        ※ 차트의 전체 내용을 확인하기 위해서는 화면의 가로 길이를 900px 이상
        유지하길 권장드립니다.
      </p>
      <FilterProvider>
        <Filter />
        <Chart />
      </FilterProvider>
    </div>
  );
}

export default App;
