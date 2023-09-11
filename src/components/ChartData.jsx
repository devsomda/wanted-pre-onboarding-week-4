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
} from "recharts";
import mockData from "../mockData.json";
import objToArr from "../utils/objToArr";

const data = objToArr(mockData.response, "date");
console.log(data);

export default function ChartData() {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="date" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="value_area"
            fill="#d8d6f5"
            stroke="#8884d8"
          />
          <Bar dataKey="value_bar" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </div>
    </div>
  );
}
