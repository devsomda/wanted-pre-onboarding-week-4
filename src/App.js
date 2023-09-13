import Chart from "./components/Chart";
import Filter from "./components/Filter";
import { TITLE } from "./constants";
import { FilterProvider } from "./context/filterContext";
import mockData from "./mockData.json";
import objToArr from "./utils/objToArr";
import getTime from "./utils/getTime";
import "./App.css";

const prevData = objToArr(mockData.response, "date");
// prevdata 배열을 변환하여 date 속성만 전체 연월일시간 -> 시간으로 변경
const data = prevData.map((prev) => ({
  ...prev,
  date: getTime(prev.date),
}));

// filter에서 사용할 id 추출
const idArr = [];
prevData.map((data) => {
  if (!idArr.includes(data.id)) {
    idArr.push(data.id);
  }
});

function App() {
  return (
    <div className="App">
      <h2>{TITLE} 데이터</h2>
      <p className="ui-warning-text">
        ※ 차트의 전체 내용을 확인하기 위해서는 화면의 가로 길이를 900px 이상
        유지하길 권장드립니다.
      </p>
      <FilterProvider>
        <Filter idArr={idArr} />
        <Chart data={data} />
      </FilterProvider>
    </div>
  );
}

export default App;
