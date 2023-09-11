import React from "react";

export default function CustomToolTip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const [bar, area] = payload;
    return (
      <div className="tooltip-container">
        <p className="tooltip-title">{`${bar.payload.id}`}</p>
        <p>{`${bar.dataKey} : ${bar.value}`}</p>
        <p>{`${area.dataKey} : ${area.value}`}</p>
      </div>
    );
  }
}
