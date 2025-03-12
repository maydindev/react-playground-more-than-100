"use client";
import React from "react";
import "/src/app/globals.css";
import { useState } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

function AqiPm25Co2({ title, current, condition, chart }) {
  const [selectedRange, setSelectedRange] = useState("1H");

  /*
  const sampleData = [
    { name: "10", value: 10 },
    { name: "20", value: 30 },
    { name: "30", value: 10 },
    { name: "40", value: 20 },
    { name: "50", value: 40 },
  ];
  */

  return (
    <div className="w-[378px] h-[270px] bg-white rounded-[15px] p-5 mr-5">
      <div className="flex justify-between items-center mb-3">
        {/* Zaman Filtreleri */}
        <h2 className="text-[20px] mb-8">{title}</h2>
        <div className="flex justify-end items-center mr-2">
          {["1H", "1D", "1W", "1M"].map((range) => (
            <button
              key={range}
              className={`px-2 py-1 text-[10px] font-medium ${
                selectedRange === range
                  ? "bg-[#FFFFFF] text-black font-bold rounded-[6px] border border-[#F3F3F7]"
                  : "text-[#797E82] bg-[#F3F3F7]"
              }`}
              onClick={() => setSelectedRange(range)}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={120}>
        <AreaChart
          data={/*sampleData*/ chart?.[selectedRange]}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        >
          <defs>
            <linearGradient id="colorPm25" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="#2396EF69"
                /*stopColor="#FFFFFF"*/ stopOpacity={0.9}
              />
              <stop
                offset="95%"
                stopColor="#FFFFFF"
                /*stopColor="#2396EF69"*/ stopOpacity={0.9}
              />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "gray", fontSize: 12 }}
            tickLine={false}
          />
          <YAxis hide />
          <Tooltip />
          <Area
            type="linear"
            dataKey="value"
            stroke="#2396EF"
            fill="url(#colorPm25)"
            strokeWidth={2}
            /*dot={{ r: 5, fill: "#3b82f6", strokeWidth: 1 }}*/
            /*activeDot={{
              r: 8,
              fill: "#3b82f6",
              stroke: "white",
              strokeWidth: 1,
            }}*/
            dot={(props) => {
              const { cx, cy, index, data } = props;
              console.log(props.data);
              // Sadece ilk ve son noktayı göster
              if (index === 0 || index === /*data.length - 1*/ 4) {
                return (
                  <circle
                    cx={cx}
                    cy={cy}
                    r={5}
                    fill="#3b82f6"
                    stroke="white"
                    strokeWidth={1}
                  />
                );
              }
              return null; // Diğer noktaları gizle
            }}
            activeDot={{
              r: 8,
              fill: "#3b82f6",
              stroke: "white",
              strokeWidth: 1,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex justify-start items-center text-[14px] text-[#606060] mt-2">
        <span className="mr-32">Current:{current}</span>
        <span>Condition:{condition}</span>
      </div>
    </div>
  );
}

export default AqiPm25Co2;
