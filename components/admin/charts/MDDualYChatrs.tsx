import React from "react";
import { Chart } from "react-google-charts";
import styles from "./style.module.css";
export const data = [
  [
    { type: "date", label: "Day" },
    "Average temperature",
    "Average hours of daylight",
  ],
  [new Date(2014, 0), -0.5, 5.7],
  [new Date(2014, 1), 0.4, 8.7],
  [new Date(2014, 2), 0.5, 12],
  [new Date(2014, 3), 2.9, 15.3],
  [new Date(2014, 4), 6.3, 18.6],
  [new Date(2014, 5), 9, 20.9],
  [new Date(2014, 6), 10.6, 19.8],
  [new Date(2014, 7), 10.3, 16.6],
  [new Date(2014, 8), 7.4, 13.3],
  [new Date(2014, 9), 4.4, 9.9],
  [new Date(2014, 10), 1.1, 6.6],
  [new Date(2014, 11), -0.2, 4.5],
];

export const options = {
  chart: {
    title: "Average Temperatures and Daylight in Iceland Throughout the Year",
  },
  width: 600,
  height: 400,
  series: {
    0: { axis: "Temps" },
    1: { axis: "Daylight" },
  },
  axes: {
    y: {
      Temps: { label: "Temps (Celsius)" },
      Daylight: { label: "Daylight" },
    },
  },
};

export default function MDDualYChatrs() {
  return (
    <div className={styles.pdd}>
      <Chart
        chartType="Line"
        width="100%"
        height="100%"
        data={data}
        options={options}
      />
    </div>
  );
}
