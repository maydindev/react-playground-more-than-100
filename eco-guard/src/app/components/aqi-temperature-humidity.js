"use client";
import React from "react";
import "/src/app/globals.css";
import { useState } from "react";
import { cn } from "@/lib/utils"; // Opsiyonel: Tailwind yardımcı fonksiyonu

function AqiTemperatureHumidity({ title, unit, unitPerValue, chart }) {
  const [selectedRange, setSelectedRange] = useState("1H");

  return (
    <div className="flex border">
      <div className="w-[201px] h-[270px] bg-white shadow-md rounded-[15px]">
        <h2 className="text-[20px] ml-3 mt-3">{title}</h2>

        <div className="flex items-center justify-evenly /*border border-yellow-600*/">
          {/* Sıcaklık Çubuğu */}
          <div className="w-10 h-48 bg-[#B6DFFF69] rounded-full relative flex items-end overflow-hidden ml-3 /*border border-green-600*/">
            <div
              className={`bg-[#008CF869] w-full rounded-full`}
              style={{
                height: `${
                  (191 / unitPerValue) * chart?.[selectedRange].value
                }px`,
              }}
            ></div>
          </div>
          {/* Sıcaklık Değeri */}
          <div className="flex flex-col /*border border-purple-600*/ w-[100px] ml-2">
            <div className="/*border border-red-600*/ mt-3">
              <p className="text-3xl font-bold text-[#2396EF]">
                {chart?.[selectedRange].value}
                {unit}
              </p>
              <span
                className={`${
                  chart?.[selectedRange].condition === "Good"
                    ? `border-2 border-[#03AB00] text-[#03AB00]`
                    : chart?.[selectedRange].condition === "Average"
                    ? `border-2 border-[#FFE500] text-[#FFE500]`
                    : chart?.[selectedRange].condition === "Bad"
                    ? `border-2 border-[#FF0000] text-[#FF0000]`
                    : ""
                } px-2 text-[8px] font-extrabold rounded-[5px]`}
              >
                {chart?.[selectedRange].condition}
              </span>
            </div>

            {/* Zaman Aralığı Seçimi */}
            <div className="my-4 w-[90px] bg-[#F3F3F7] text-[#000000] p-2 rounded-lg flex flex-col justify-between items-center">
              {["1H", "1D", "1W", "1M"].map((range) => (
                <button
                  key={range}
                  onClick={() => setSelectedRange(range)}
                  className={cn(
                    "w-[80px] h-[20px] text-[10px] rounded-md",
                    selectedRange === range
                      ? "bg-white shadow"
                      : "text-[#606060]"
                  )}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AqiTemperatureHumidity;
