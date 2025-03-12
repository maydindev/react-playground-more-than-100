import React, { useState } from "react";
import { Link } from "react-router-dom";
import FarmAnalytics from "../pages/FarmAnalytics";
import Livestock from "../pages/Livestock";
import DashboardFarms from "../pages/DashboardFarms";
import AddFarm from "./AddFarm";

const Dashboard = () => {

  const [farmAnalytics, setFarmAnalytics] = useState(false)
  const [livestock, setLivestock] = useState(false)
  const [dashboardFarms, setDashboardFarms] = useState(true)

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-center items-center bg-[#308B34] min-h-screen">
      <div className="flex flex-col justify-start items-center w-1/6  min-h-screen">
        <div className="flex flex-col justify-center items-center w-32 h-32 rounded-full overflow-hidden mt-10 text-white border-4 border-white">
          <img
            src="./imageDashboardUser.jpeg"
            alt=""
            className=" w-full h-full object-cover"
          />
        </div>
        <span className="text-white font-bold text-xl mt-3">Namık Korona</span>
        <span className="text-white text-sm mt-1">Farm Owner</span>

        <nav className="mt-40">
          <ul className="text-2xl text-white font-bold w-[304px]">
            <li className={`${farmAnalytics ? "bg-white text-[#308B34]" : "bg-[#308B34] text-white"} flex justify-start text-start h-10 mb-5`}>
            <button className="ml-10" onClick={() => {setFarmAnalytics(true); setLivestock(false); setDashboardFarms(false)}}>Farm Analytics</button>
            </li>
            <li className={`${livestock ? "bg-white text-[#308B34]" : "bg-[#308B34] text-white"} flex justify-start text-start h-10 mb-5`}>
            <button className="ml-10" onClick={() => {setLivestock(true); setFarmAnalytics(false); setDashboardFarms(false)}}>Livestock</button>
            </li>
            <li className={`${dashboardFarms ? "bg-white text-[#308B34]" : "bg-[#308B34] text-white"} flex justify-start text-start h-10 mb-5`}>
              <button className="ml-10 " onClick={() => {setDashboardFarms(true); setLivestock(false); setFarmAnalytics(false); }}>Dashboard</button>
            </li>
          </ul>
        </nav>

        <div className="flex justify-center items-center rounded-md text-[#308B34] font-bold text-2xl  mt-40 w-[250px] h-12 bg-white">
          <button
            onClick={() => setIsModalOpen(true)}
          >
            + Add Farm
          </button>
          <AddFarm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>

      <div className="flex flex-col justify-start items-center bg-white  mr-5 my-5 w-5/6 h-screen rounded-3xl">

      {farmAnalytics ? <FarmAnalytics/> : livestock ? <Livestock/> : dashboardFarms ? <DashboardFarms/> : null}

      </div>
    </div>
  );
};
export default Dashboard;
