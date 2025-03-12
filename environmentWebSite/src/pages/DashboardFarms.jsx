import React from "react";

const DashboardFarms = () => {
  return (
    <div className="flex flex-col justify-start items-center bg-white  mr-5 my-5 w-5/6 h-screen rounded-3xl">
      <div className="flex justify-between items-center w-full mb-10">
        <h1 className="text-4xl ml-5 font-bold text-[#308B34]">
          Manage Livestock
        </h1>
        <div className="flex">
          <div className="flex justify-center items-center rounded-md text-white font-bold text-xl mr-10 mt-10 w-[180px] h-12 bg-[#308B34] border">
            <button className="flex justify-center items-center">
              <img src="./view.png" alt="" className="mr-3" />
              View Live
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center  w-full mb-10">
        <nav className="flex justify-between items-center m-4 text-[#308B34] font-bold text-2xl leading-10">
          <ul>
            <li>Farms:</li>
            <li>Area:</li>
            <li>Expected date of Harvest:</li>
          </ul>
        </nav>
      </div>
      <div className="ml-[750px] text-3xl font-bold text-[#308B34]">Crops Distribution</div>
      <div className="flex justify-between items-center mt-3 w-full">
        
        <div className="relative flex flex-col justify-center items-start mr-10 ">
          <img
            src="./farms.jpeg"
            alt=""
            className="overflow-hidden w-[510px] h-[652px]"
          />
          <svg
            className="absolute left-[150px] top-[50px]"
            width="58"
            height="80"
            viewBox="0 0 58 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.5 74L0 79.5V0.5H57.5V74Z"
              fill="#00FF0A"
              fill-opacity="0.82"
            />
          </svg>
          <svg
            className="absolute left-[150px] top-[200px]"
            width="116"
            height="51"
            viewBox="0 0 116 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M113.5 0.5H3L0.5 51L116 46.5L113.5 0.5Z"
              fill="#FF0000"
              fill-opacity="0.61"
            />
          </svg>
          <svg
            className="absolute left-[150px] top-[350px]"
            width="118"
            height="72"
            viewBox="0 0 118 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 65.5V9.5L60 3L117.5 0V72H63V65.5H0Z"
              fill="#0066C5"
              fill-opacity="0.81"
            />
          </svg>

          <div className="flex justify-evenly items-center absolute right-[10px] bottom-[10px] w-[100px] h-[30px] bg-white rounded-3xl">
            <img src="./locationRed.png" alt="" className="w-[20px] h-[25px]" />
            <span className="font-bold">Locate</span>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center text-[#308B34] font-bold pt-5 rounded-2xl shadow-2xl w-[510px] h-[652px]">
          <div className="flex justify-center items-center">
            <div className="relative flex justify-center items-center mr-10">
              <svg
                width="255"
                height="255"
                viewBox="0 0 255 255"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M254.461 117C256.351 136.834 253.255 156.815 245.433 175.261C237.611 193.707 225.291 210.079 209.51 223L193 204.398C205.68 194.016 215.579 180.861 221.864 166.04C228.149 151.219 230.636 135.165 229.117 119.229L254.461 117Z"
                  fill="#0066C5"
                />
                <path
                  d="M210.622 223.843C195.754 236.724 178.101 245.98 159.05 250.884C140 255.788 120.072 256.206 100.832 252.106C81.5927 248.005 63.5666 239.498 48.1712 227.252C32.7758 215.007 20.4307 199.357 12.1066 181.533L34.7532 170.957C41.4415 185.277 51.3605 197.852 63.7304 207.691C76.1003 217.53 90.5838 224.365 106.042 227.66C121.501 230.955 137.513 230.619 152.819 226.678C168.126 222.738 182.31 215.301 194.256 204.952L210.622 223.843Z"
                  fill="#FF0000"
                />
                <path
                  d="M11.9834 181.267C2.37549 160.57 -1.48755 137.67 0.799301 114.966C3.08615 92.2631 11.4386 70.5932 24.9811 52.2284L45.0978 67.0627C34.2167 81.8185 27.5056 99.2298 25.6682 117.471C23.8307 135.713 26.9346 154.113 34.6544 170.742L11.9834 181.267Z"
                  fill="#60A662"
                />
                <path
                  d="M25.0176 52.1803C40.3503 31.4084 61.6416 15.7947 86.0615 7.41434C110.481 -0.966012 136.873 -1.71612 161.73 5.26373C186.586 12.2436 208.73 26.6228 225.218 46.4903C241.706 66.3577 251.757 90.7725 254.035 116.49L229.138 118.695C227.307 98.0322 219.231 78.4154 205.984 62.4523C192.736 46.4893 174.944 34.9359 154.973 29.3277C135.001 23.7195 113.796 24.3222 94.1746 31.0557C74.5538 37.7891 57.4467 50.3344 45.1272 67.0241L25.0176 52.1803Z"
                  fill="#FF9494"
                />
              </svg>
              <span className="absolute flex justify-center text-center w-[2px] left-[125px] text-4xl text-black font-bold">
                23 Acres
              </span>
            </div>
            <div className="flex flex-col justify-center items-start leading-10 text-black text-2xl ">
              <div className="flex justify-center items-center">
                <svg
                  className="mr-3"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9.5" cy="9.5" r="9.5" fill="#FF9494" />
                </svg>{" "}
                <span>Wheat</span>
              </div>
              <div className="flex justify-center items-center">
                <svg
                  className="mr-3"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9.5" cy="9.5" r="9.5" fill="#0066C5" />
                </svg>
                <span>Corn</span>
              </div>
              <div className="flex justify-center items-center">
                <svg
                  className="mr-3"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9.5" cy="9.5" r="9.5" fill="#FF0000" />
                </svg>
                <span>Barley</span>
              </div>
              <div className="flex justify-center items-center">
                <svg
                  className="mr-3"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9.5" cy="9.5" r="9.5" fill="#60A662" />
                </svg>
                <span>Paddy</span>
              </div>
            </div>
          </div>
          <div>
            <svg
              width="500"
              height="1"
              viewBox="0 0 533 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="533" y2="0.5" stroke="#CABFBF" />
            </svg>
          </div>

          <div className="flex justify-between items-center  w-[400px] ">
            <div className="flex flex-col justify-center items-start leading-[50px] text-black text-2xl pb-20 ">
              <div className="flex justify-center items-center ">
                <svg
                  className="mr-3"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9.5" cy="9.5" r="9.5" fill="#FF9494" />
                </svg>{" "}
                <span className="mr-6">Wheat</span>
                <span className="mr-10 text-[#FF9494]">40%</span>
                <div className="flex flex-col pl-5 pb-1">
                  <span className="text-sm font-bold text-green-600 border-2 px-[4px] rounded-sm border-green-600">
                    Ready
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <svg
                  className="mr-3"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9.5" cy="9.5" r="9.5" fill="#0066C5" />
                </svg>
                <span className="mr-12">Corn</span>
                <span className="mr-10 text-[#0066C5]">10%</span>
                <div className="flex flex-col pl-5 pb-1">
                  <span className="text-sm font-bold text-red-600 border-2 px-[4px] rounded-sm border-red-600">
                    Not Ready
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <svg
                  className="mr-3"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9.5" cy="9.5" r="9.5" fill="#FF0000" />
                </svg>
                <span className="mr-6">Barley</span>
                <span className="mr-10 text-[#FF0000]">30%</span>
                <div className="flex flex-col pl-5 pb-1">
                  <span className="text-sm font-bold text-green-600 border-2 px-[4px] rounded-sm border-green-600">
                    Ready
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <svg
                  className="mr-3"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9.5" cy="9.5" r="9.5" fill="#60A662" />
                </svg>
                <span className="mr-6">Paddy</span>
                <span className="mr-10 text-[#60A662]">20%</span>
                <div className="flex flex-col pl-5 pb-1">
                  <span className="text-sm font-bold text-green-600 border-2 px-[4px] rounded-sm border-green-600">
                    Ready
                  </span>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFarms;
