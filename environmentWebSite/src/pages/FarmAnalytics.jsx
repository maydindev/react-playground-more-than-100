import React, { useState } from "react";
import AddCorp from "./AddCorp";
import FarmIndicatorCard from "./FarmIndicatorCard";

const FarmAnalytics = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [elements, setElements] = useState([
    {
      type: "Nitrogen",
      result: "Good",
      ratio: "20%",
    },
    {
      type: "Phosphorus",
      result: "Good",
      ratio: "8%",
    },
    {
      type: "Potassium",
      result: "Good",
      ratio: "13%",
    },
  ]);
  const [conditions, setConditions] = useState([
    {
      type: "Humidity",
      result: "Good",
      ratio: "15%",
    },
    {
      type: "Soil Hydration",
      result: "High",
      ratio: "40%",
    },
    {
      type: "PH Value",
      result: "Low",
      ratio: "4%",
    },
  ]);

  return (
    <div className="flex flex-col justify-start items-center bg-white  mr-5 my-5 w-5/6 h-screen rounded-3xl">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-4xl ml-10 font-bold text-[#308B34]">Farm 1</h1>

        <div className="flex justify-center items-center rounded-md text-white font-bold text-2xl mr-10 mt-10 w-[250px] h-12 bg-[#308B34]">
          <button
            onClick={() => setIsModalOpen(true)}
            className=" text-white px-4 py-2 rounded"
          >
            + Add Crop
          </button>
          <AddCorp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>

      <div className="flex w-full px-10 mt-10 justify-between items-center ">
      
        {elements.map((element) => {
          return (
            <FarmIndicatorCard data={element} />
          );
        })}
       
      </div>

      <div className="flex w-full px-10 mt-10 justify-between items-center ">
        <div className="flex flex-col justify-center items-start">
        
        {conditions.map((condition) => {
          return (
            <FarmIndicatorCard data={condition} />
          );
        })}
          

          
        </div>

        <div className="flex flex-col w-2/4 h-[500px] justify-center items-center">
          <div className="flex relative justify-center items-center m-10 overflow-hidden rounded-2xl">
            <img
              src="./imageDashboardFarm.jpeg "
              alt="Farm Image"
              className=""
            />
            <img
              src="./back.png"
              alt=""
              className="absolute bottom-5 left-[180px]"
            />
            <img
              src="./forward.png"
              alt=""
              className="absolute bottom-5 right-[180px]"
            />
          </div>
          <div className="flex justify-around w-full items-center">
            <div className="flex justify-center items-center border-2 p-3 border-[#308B34] rounded-full">
              <img src="./crop.png" alt="" />
              <span className="pl-2 font-bold text-xl text-[#308B34] ">
                Crop: <span className="text-black text-2xl pr-2">Wheat</span>
              </span>
            </div>
            <div className="flex justify-center items-center border-2 p-3 border-[#308B34] rounded-full">
              <img src="./area.png" alt="" />
              <span className="pl-2 font-bold text-xl text-[#308B34] ">
                Area: <span className="text-black text-2xl pr-2">25Acres</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full mt-10">
        <button className="border-4 border-[#308B34] rounded-xl px-[500px] text-2xl p-3 font-bold text-[#308B34]">
          Efficacy Rating
        </button>
      </div>
    </div>
  );
};

export default FarmAnalytics;
