import React from "react";

const StockCard = ({ stock }) => {
  return (
    <div className="flex flex-col justify-center items-start text-[#308B34] m-3 font-bold rounded-xl shadow-2xl">
      <div className="text-2xl mx-3 mt-1 mb-5">{stock.type}:</div>
      <div className="mb-5">
        <ul className="ml-5 text-lg">
          <li className="mb-4">Count: <span className="text-black">{stock.count}</span></li>
          <li className="mb-4">Breed: <span className="text-black">{stock.breed}</span></li>
          <li className="mb-4">Males: <span className="text-black">{stock.males}</span> </li>
          <li className="mb-4">Females: <span className="text-black">{stock.females}</span></li>
        </ul>
      </div>
      <div className="flex relative">
        <img
          src={stock.backgroundImage}
          alt=""
          className="w-[320px] h-[200px] opacity-50 relative"
        />
        <span className="absolute left-[125px] top-[80px] text-5xl text-white ">
          +{stock.imageCount}
        </span>
      </div>
    </div>
  );
};

export default StockCard;
