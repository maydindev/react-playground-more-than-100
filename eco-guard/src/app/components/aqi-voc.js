"use client";
import React from "react";
import "/src/app/globals.css";
import { PieChart, Pie, Cell } from "recharts";

function AqiVoc({ compounds }) {
  const COLORS = ["#2396EF69", "#44ADFF", "#006ACD"];

  /*
  const sampleData = [
    { compound: "Benzene", amount: 50, status: "Bad" },
    { compound: "Toluene", amount: 30, status: "Average" },
    { compound: "Gas 3", amount: 20, status: "Good" },
  ];
  */

  return (
    <div className="flex flex-col justify-center items-center w-[460px] h-[270px] bg-white rounded-[15px] shadow-md font-chivo">
      <div className="flex justify-center items-center /*border border-blue-500*/">
        <div className="flex flex-col justify-between items-start /*border border-purple-500*/">
          <div className="flex justify-start items-start ml-4 /*border border-yellow-500*/">
            <span className="text-[20px] mr-2">VOC</span>
            <span className="text-[#626262] text-[15px] mt-1">
              (volatile organic compounds)
            </span>
          </div>

          <div className="flex">
            <div className="flex  /*border border-red-500*/">
              <PieChart width={200} height={200}>
                <Pie
                  data={/*sampleData*/ compounds}
                  dataKey="amount"
                  nameKey="compound"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={0}
                >
                  {compounds.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      //cornerRadius={index === 0 ? 10 : 0}
                    />
                  ))}
                </Pie>
              </PieChart>
            </div>

            <div className="flex flex-col justify-start ites-center /*border border-green-500*/">
              <table className="w-full border-collapse  text-sm">
                <thead>
                  <tr>
                    <th className="px-1 py-2 text-left"></th>
                    <th className="px-1 py-2 text-left">Compound</th>
                    <th className="px-2 py-2 text-left">Amt</th>
                    <th className="px-1 py-2 text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  {compounds.map((item, index) => (
                    <tr key={index} className="">
                      <td className="px-1 py-2">
                        <span
                          className="w-2 h-2 rounded-full inline-block"
                          style={{
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        ></span>
                      </td>
                      <td className="px-1 py-2">{item.compound}</td>
                      <td className="px-2 py-2">{item.amount}%</td>
                      <td className="px-6 py-2">
                        <span
                          className={`px-1 py-1 text-[8px] font-extrabold rounded-[5px] ${
                            item.condition === "Bad"
                              ? "border-2 border-[#FF0000] text-[#FF0000]"
                              : item.condition === "Average"
                              ? "border-2 border-[#FFE500] text-[#FFE500]"
                              : "border-2 border-[#03AB00] text-[#03AB00]"
                          }`}
                        >
                          {item.condition}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AqiVoc;
