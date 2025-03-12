import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen">
      <svg
        className="absolute inset-0 left-[77%] z-10 w-[30%] h-auto"
        viewBox="0 0 345 618"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M819 41C819 -106.484 210.881 -60.8184 66.5343 -60.8184C-77.8128 -60.8184 454.414 553.099 66.5343 617.503C230.584 562.366 -199.488 188.503 125 258.003C449.488 327.503 84.8411 96.0245 819 41Z"
          fill="url(#paint0_linear_0_25)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_25"
            x1="36.6371"
            y1="493.94"
            x2="36.6371"
            y2="-153.48"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.411458" stopColor="#02B94B" stopOpacity="0.84" />
            <stop offset="1" stopColor="#046AB4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className="absolute inset-0 top-[23%] z-10 w-[50%] h-auto"
        viewBox="0 0 709 582"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M709 582C709 741.155 128.904 623.5 -11 623.5C-150.904 623.5 -239.44 516.655 -239.44 357.5C-80.4399 417 -311.44 82.0001 3.06012 7.00012C317.56 -67.9999 -2.56012 522.621 709 582Z"
          fill="url(#paint0_linear_0_24)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_24"
            x1="234.78"
            y1="0.429901"
            x2="234.78"
            y2="699.083"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.411458" stopColor="#02B94B" stopOpacity="0.84" />
            <stop offset="1" stopColor="#046AB4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative z-20 flex flex-col justify-start shadow-2xl p-7  bg-opacity-50 rounded-3xl ">
        <h1 className="text-[#02B94B] text-5xl font-extrabold text-start mb-7 w-[256]">
          LOGIN
        </h1>
        <input
          type="text"
          placeholder="Username"
          className="w-[350px] h-12 p-5 text-xl mb-5 rounded-lg border border-gray-400 placeholder-gray-600"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="w-[350px] h-12 p-5 text-xl mb-5 rounded-lg border border-gray-400 placeholder-gray-600"
        />
        <div className="mb-10">
          <button className="bg-[#02B94B] bg-opacity-70 text-white text-xl w-36 h-10 rounded-lg font-bold">
            LOGIN
          </button>
        </div>
        <div className="flex items-center mb-7">
          <div className="flex-1 border-t border-black"></div>
          <span className="mx-4 font-bold text-black">OR</span>
          <div className="flex-1 border-t border-black"></div>
        </div>
        <div className="flex justify-center items-center">
          <a href="">
            <img src="/google.png" alt="" className="w-6 h-6 mr-7" />
          </a>
          <a href="">
            <img src="/facebook.png" alt="" className="w-6 h-6 ml-7" />
          </a>
        </div>
        <br />
        <div>
          <div className="flex justify-between mx-[-20px] mb-[-20px]  text-sm  text-[#02B94B]">
            <a href="">Forgot password</a>
            <a href="">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}
