import React from "react";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from "recharts";
import mockData from "../mockData.json";
import objToArr from "../utils/objToArr";
import getTime from "../utils/getTime";
import CustomToolTip from "./CustomToolTip";

const prevData = objToArr(mockData.response, "date");
// prevdata 배열을 변환하여 date 속성만 변경
const data = prevData.map((prev) => ({
  ...prev,
  date: getTime(prev.date),
}));

export default function Chart() {
  return (
    <div className="chart-container">
      <ComposedChart
        width={800}
        height={450}
        data={data}
        margin={{
          top: 30,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#e1e1e1" />
        <XAxis
          dataKey="date"
          scale="number"
          tickSize={10}
          padding={{ left: 10, right: 10 }}
        >
          <Label />
        </XAxis>
        <YAxis
          yAxisId="left"
          label={{ value: "value_bar", position: "top", offset: 10 }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          domain={[0, 200]}
          label={{ value: "value_area", position: "top", offset: 10 }}
        />
        <Tooltip content={<CustomToolTip />} />
        <Legend />
        <Bar dataKey="value_bar" yAxisId="left" fill="#a8a5e6" />
        <Area
          type="monotone"
          dataKey="value_area"
          yAxisId="right"
          fill="#6b60ff"
          stroke="#3943ff"
        />
      </ComposedChart>
    </div>
  );
}
