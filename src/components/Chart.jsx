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
  Cell,
} from "recharts";
import CustomToolTip from "./CustomToolTip";
import { useFilterContext } from "../context/filterContext";
import { filterData } from "../utils/filterData";
import { AREA_STANDARD } from "../constants";

export default function Chart({ data }) {
  const { filteredIds, setFilteredIds } = useFilterContext();

  const isFiltered = (id) => {
    return filteredIds.includes(id);
  };
  const filteredColor = "#5b57a1";
  const nonFilteredColor = "#a8a5e6";

  const areaColor = "#6b60ff";
  const areaBorderColor = "#3943ff";

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
          domain={[AREA_STANDARD.MIN_STANDARD, AREA_STANDARD.MAX_STANDARD]}
          label={{ value: "value_area", position: "top", offset: 10 }}
        />
        <Tooltip content={<CustomToolTip />} />
        <Legend />
        <Bar dataKey="value_bar" yAxisId="left">
          {data.map((entry) => (
            <Cell
              key={entry.id}
              fill={isFiltered(entry.id) ? filteredColor : nonFilteredColor}
              onClick={() => filterData(entry.id, filteredIds, setFilteredIds)}
            />
          ))}
        </Bar>
        <Area
          type="monotone"
          dataKey="value_area"
          yAxisId="right"
          fill={areaColor}
          stroke={areaBorderColor}
        />
      </ComposedChart>
    </div>
  );
}
