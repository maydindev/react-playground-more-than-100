import React from "react";
import "/src/app/globals.css";
import { useState } from "react";

function WqiTemperature({ chart }) {
  const [selectedRange, setSelectedRange] = useState("1H");

  return (
    <div className="flex flex-col justify-center items-between bg-white shadow-md rounded-[15px] mb-5 p-4 w-[908px] ">
      <div className="mx-5">
        <div className="flex justify-between items-center mt-1 mb-3">
          <h2 className="text-[20px]">Temperature</h2>
          {/* Zaman Filtreleri */}
          <div className="flex justify-end items-center mb-1 mr-8">
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

        {/* İlerleme Çubuğu */}
        <div className="relative w-full h-[21px]  rounded-full overflow-hidden mt-3">
          <div
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-300"
            style={{
              width: `100%`,
              background:
                "linear-gradient(to right, #A8EFFF ,#0093FF, #FF0404)",
            }}
          />
          <div
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-300 border border-[#0093FF]"
            style={{
              width: `${chart?.[selectedRange].value}%`,
              background: "#FFFFFF",
            }}
          ></div>
        </div>

        {/* Sıcaklık ve Durum */}
        <div className="flex items-center gap-3 mt-3">
          <span
            className="text-[34px] font-bold font-inter text-[#2396EF]"
            style={{
              fontWeight: 900,
              lineHeight: "41px",
            }}
          >
            {chart?.[selectedRange].value}*C
          </span>
          <span
            className={`${
              chart?.[selectedRange].condition === "Good"
                ? `border-2 border-[#03AB00] text-[#03AB00]`
                : chart?.[selectedRange].condition === "Average"
                ? `border-2 border-[#FFE500] text-[#FFE500]`
                : chart?.[selectedRange].condition === "Bad"
                ? `border-2 border-[#FF0000] text-[#FF0000]`
                : ""
            } px-2 text-[8px] rounded-[5px] mt-2`}
          >
            {chart?.[selectedRange].condition}
          </span>
        </div>
      </div>
    </div>
  );
}

export default WqiTemperature;
