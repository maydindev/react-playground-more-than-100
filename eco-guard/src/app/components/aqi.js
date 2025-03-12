"use client";
import React from "react";
import "/src/app/globals.css";
import AqiTemperatureHumidity from "../components/aqi-temperature-humidity";
import AqiPm25Co2 from "../components/aqi-pm25-co2";
import AqiVoc from "../components/aqi-voc";
import { useSelector } from "react-redux";

function AQI({ activeRoomId }) {
  const sensorData = useSelector((state) => state.sensor);
  const activeRoomData = sensorData.find((data) => data.id === activeRoomId);
  const { pm25, airTemperature, humidity, co2, voc } = activeRoomData;

  return (
    <div className="flex flex-col w-[911px] justify-betwen items-between /*border border-red-500*/">
      <div className="flex my-3 justify-between">
        <AqiPm25Co2
          title={"PM2.5"}
          current={pm25.current}
          condition={pm25.condition}
          chart={pm25.chart}
        />

        <AqiTemperatureHumidity
          title={"Temperature"}
          unit={airTemperature.unit}
          unitPerValue={airTemperature.unitPerValue}
          chart={airTemperature.chart}
        />

        <AqiTemperatureHumidity
          title={"Humidity"}
          unit={humidity.unit}
          unitPerValue={humidity.unitPerValue}
          chart={humidity.chart}
        />
      </div>

      <div className="flex my-3 justify-between">
        <AqiPm25Co2
          title={"CO2"}
          current={co2.current}
          condition={co2.condition}
          chart={co2.chart}
        />

        <AqiVoc title={"VOC"} compounds={voc} />
      </div>
    </div>
  );
}

export default AQI;
