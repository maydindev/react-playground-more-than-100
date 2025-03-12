import React from "react";
import "/src/app/globals.css";
import WqiTemperature from "../components/wqi-temperature";
import WqiPhTds from "./wqi-ph-tds";
import { useSelector } from "react-redux";

function WQI({ activeRoomId }) {
  const sensorData = useSelector((state) => state.sensor);
  const activeRoomData = sensorData.find((data) => data.id === activeRoomId);
  const { waterTemperature, ph, tds } = activeRoomData;

  return (
    <div className="flex flex-col justify-start items-between w-[908px] my-3">
      <WqiTemperature chart={waterTemperature.chart} />

      <WqiPhTds
        title={"PH Level"}
        unitPerValue={ph.unitPerValue}
        chart={ph.chart}
      />

      <WqiPhTds
        title={"TDS Level"}
        unitPerValue={tds.unitPerValue}
        chart={tds.chart}
      />
    </div>
  );
}

export default WQI;
