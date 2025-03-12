import React from "react";
import "/src/app/globals.css";

function Sidebar({
  onClickDashboard,
  onClickLogout,
  onClickNotifications,
  notificationData,
  userData,
}) {
  return (
    <div className="w-[260px] h-[947px] flex flex-col justify-around items-center bg-white shadow-lg rounded-[30px] font-[Chivo] text-[20px] m-5">
      <div className="p-6 flex  justify-between items-center gap-4">
        <img
          src="/nksmphoto.png"
          alt=""
          className="w-[48px] h-[48px] rounded-[8px] "
        />
        <span className="text-[20px] font-bold text-gray-800 ">
          {userData.fullname}
        </span>
      </div>

      <div className="w-40 mt-10 mb-20 text-[20px] ">
        <h2 className="mb-5 text-[#405D9F]">Menu</h2>
        <ul>
          <li className="flex items-center gap-4 pb-6">
            <img src="/icondashboardhome.png" alt="" />
            <button
              onClick={onClickDashboard}
              href="#"
              className=" text-[#2990F1] "
            >
              Dashboard
            </button>
          </li>
          <li className="flex items-center gap-4">
            <img src="/icondashboardmessage.png" alt="" />
            <button
              onClick={onClickNotifications}
              href="#"
              className=" text-[#6C7894]"
            >{`Messages ${
              notificationData.length > 0 ? `(${notificationData.length})` : ""
            } `}</button>
          </li>
        </ul>
      </div>

      <div className="w-40 pt-10 text-[20px] ">
        <h2 className=" mb-5 text-[#405D9F]">Settings</h2>
        <ul>
          <li className="flex items-center gap-4  pb-6">
            <img src="/icondashboardperson.png" alt="" />
            <a href="#" className=" text-[#6C7894] ">
              Profile
            </a>
          </li>
          <li className="flex items-center gap-4  pb-6">
            <img src="/icondashboardfaq.png" alt="" />
            <a href="#" className=" text-[#6C7894]">
              FAQ's
            </a>
          </li>
          <li className="flex items-center gap-4  pb-6">
            <img src="/icondashboardphone.png" alt="" />
            <a href="#" className=" text-[#6C7894]">
              Contact us
            </a>
          </li>
          <li className="flex items-center gap-4 ">
            <img src="/icondashboardmessage.png" alt="" />
            <button
              onClick={onClickLogout}
              href="#"
              className=" text-[#6C7894]"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      <div className="p-6 mt-auto">
        <div className="flex flex-col justift-center items-center text-center">
          <div className="flex justift-center items-center p-6">
            <img
              src="/ecoguardlogo.png"
              alt="logo"
              className="w-6 h-6 mr-2 align-baseline"
            />
            <img src="/ecoguardlogotext.png" alt="logo" className="h-4 mt-2" />
          </div>

          <div>
            <button className="w-[222px] h-[55px] mt-3 mb-5 flex justify-center items-center bg-[#CCDBFD] text-[#284680] text-2xl font-extrabold rounded-2xl">
              <img src="/icondashboardchatbot.png" alt="" className="mr-2" />
              Chat Bot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
