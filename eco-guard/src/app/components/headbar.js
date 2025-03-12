import React from "react";
import "/src/app/globals.css";

function Headbar({ title, onClickNotifications }) {
  return (
    <div className="flex justify-around items-center w-[1200px] h-[80px] mt-5 /*border border-red-500*/">
      <div className="flex p-6 mr-10">
        <h2 className="flex text-[20px] font-bold text-gray-800 mt-4">
          {title}
        </h2>
      </div>

      <div className="w-[438px] h-[52px] flex justify-start items-center bg-white shadow-lg rounded-[10px] mr-20 px-5">
        <img src="/icondashboardfind.png" alt="" className="mr-3" />
        <input
          type="text"
          placeholder="Search Anything Here..."
          className="text-[#1A1A1A] outline-none w-full bg-transparent"
        />
      </div>

      <div className="flex justify-center items-center gap-6 mt-4 border">
        <img src="/icondashboardtogglesmall.png" alt="" />
        <button onClick={onClickNotifications}>
          <img src="/icondashboardnotification.png" alt="" />
        </button>
        <img src="/icondashboardsupport.png" alt="" />
      </div>
    </div>
  );
}

export default Headbar;
