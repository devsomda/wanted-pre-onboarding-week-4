# wanted-pre-onboarding-week-4
원티드 프리온보딩 프론트엔드 4주차 과제 (개인)

## 프로젝트 소개

![chart-image](https://github.com/devsomda/wanted-pre-onboarding-week-4/assets/109324517/f010e851-f336-42af-b579-3994fe976a00)

※ 본 과제는 주어진 데이터를 기반으로 시계열 차트를 구현하는 프로젝트입니다.

기간: 2023-09-10 ~ 2023-09-13 (4일)

```
1. 시계열 차트 만들기
    - 주어진 JSON 데이터의 `key`값(시간)을 기반으로 시계열 차트 구현
    - 하나의 차트안에 Area 형태의 그래프와 Bar 형태의 그래프가 모두 존재하는 복합 그래프로 구현
    - 차트의 Y축에 대략적인 수치를 표현
2. 호버 기능 구현
    - 특정 데이터 구역에 마우스 호버시 `id, value_area, value_bar` 데이터를 툴팁 형태로 제공
3. 필터링 기능 구현
    - 필터링은 특정 데이터 구역을 하이라이트 하는 방식으로 구현
    - 필터링 시 버튼에서 선택한 ID(지역)값과 동일한 ID값을 가진 데이터 구역만 하이라이트 처리
    - 특정 데이터 구역을 클릭 시에도 필터링 기능과 동일한 형태로 동일한 ID값을 가진 데이터 구역을 하이라이트
```

### 실행 방법

- 배포 링크: https://read-time-series-chart.netlify.app/
- 링크가 실행되지 않는 경우 아래 명령어를 차례대로 입력하여 실행해주세요.

```jsx
git clone https://github.com/devsomda/wanted-pre-onboarding-week-4.git
npm install
npm start
```

<br />

## 💬 구현 내용

### ✅ Assignment 
- 시계열 차트 만들기

**1.차트 라이브러리 선정: Rechart**
> 다양한 차트 라이브러리(Chart.js, D3, Rechart 등) 중 사용자가 가장 많고 참고 자료가 많은 것은 Chart.js 였으나, 보다 리액트 친화적인 라이브러리를 선택하고 싶어 Rechart를 선정했습니다. D3는 자유도가 높다는 장점이 있으나 단순 시계열 차트 하나만 구현하기에는 타 라이브러리가 더 사용하기 쉽고 적합하다 판단했습니다.

**2.차트 UI 구현**
> bar그래프와 area그래프를 모두 표현했으며, 기준 값의 차이가 커 동일한 기준으로 y축을 잡으면 area 차트가 화면상에서 보이지 않는 문제가 있었습니다. <br /> y축을 두개로 나누고, 기준값을 area차트 최대값의 1.5배 정도로 설정해 가시성을 확보했습니다.

<details>
<summary>참고 이미지</summary>
  <div markdown="1">
  <p>[↓ 변경 전]</p>
    <img width="500" src="https://github.com/devsomda/wanted-pre-onboarding-week-4/assets/109324517/83cbf71f-67a3-44e0-8527-d82d1c9f5371" alt="변경전">
  <p>[↓ 변경 후]</p>
    <img width="500" src="https://github.com/devsomda/wanted-pre-onboarding-week-4/assets/109324517/3fc954d4-6a61-4bfb-8f96-bf6f8c0435c1" alt="변경후">
  </div>
</details>

<br />

### ✅ Assignment 
- 필터링 기능 구현

**필터링 구현**
> 차트의 UI를 담당하는 영역과 관심사를 분리하기 위해 Chart와 Filter 영역을 담당하는 컴포넌트를 분리하고, `filterData` 함수를 utils로 분리했습니다. <br /> 또한 필터링된 값을 각 컴포넌트에서 쉽게 접근하기 위해 context api로 값을 관리했습니다.

<details>
<summary>코드</summary>
  [↓ filterData.js]
  https://github.com/devsomda/wanted-pre-onboarding-week-4/blob/350d0df93f5da858025fee204e4cabd61fc5f21e/src/utils/filterData.js#L1-L13
  [↓ filterData.js]
  https://github.com/devsomda/wanted-pre-onboarding-week-4/blob/350d0df93f5da858025fee204e4cabd61fc5f21e/src/context/filterContext.jsx#L3-L22
</details>

> 필터링 버튼과 데이터 영역에 각각 `filterData` 함수를 연결해, 필터링을 활성화 혹은 비활성화 할 수 있도록 했습니다.

<details>
<summary>코드</summary>
  [↓ Filter.jsx]
  https://github.com/devsomda/wanted-pre-onboarding-week-4/blob/350d0df93f5da858025fee204e4cabd61fc5f21e/src/components/Filter.jsx#L15-L21
  [↓ Chart.jsx]
  https://github.com/devsomda/wanted-pre-onboarding-week-4/blob/350d0df93f5da858025fee204e4cabd61fc5f21e/src/components/Chart.jsx#L66-L70
</details>

<br />

## 🧑🏻‍💻 프로젝트 정보

### 폴더 구조
```
📦src
 ┣ 📂components
 ┃ ┣ 📜Chart.jsx
 ┃ ┣ 📜CustomToolTip.jsx
 ┃ ┗ 📜Filter.jsx
 ┣ 📂constants
 ┃ ┗ 📜index.js
 ┣ 📂context
 ┃ ┗ 📜filterContext.jsx
 ┣ 📂utils
 ┃ ┣ 📜filterData.js
 ┃ ┣ 📜getTime.js
 ┃ ┗ 📜objToArr.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┗ 📜mockData.json
```

### 사용 라이브러리 및 기술

- JavaScript / React
- 차트: Rechart

```jsx
"dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "recharts": "^2.8.0",
    "web-vitals": "^2.1.4"
}
```

