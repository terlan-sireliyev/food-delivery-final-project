import React from "react";
import { Chart } from "react-google-charts";
import style from "./style.module.css";

export const data = [
  ["Task", "Hours per Day", { role: { style } }], // Add a role for style
  ["Work", 11, "#fffff"], // Change color for Work to orange
  ["Eat", 2, "#DC3912"], // Specify color for Eat
  ["Commute", 2, "#FF9900"], // Specify color for Commute
  ["Watch TV", 2, "#109618"], // Specify color for Watch TV
  ["Sleep", 7, "#990099"], // Specify color for Sleep
];

export const options = {
  title: "My Daily Activities",
  backgroundColor: "#27283C",
  titleTextStyle: {
    color: "#fff",
  },
  textStyle: {
    color: "#fff", // Change text color to white
  },
};

export default function BarChart() {
  return (
    <div className={style.bdd}>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        className={style.bdd}
        height={"400px"}
      />
    </div>
  );
}
