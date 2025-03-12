"use client";
import { useRouter } from "next/navigation";
import React from "react";
import "/src/app/globals.css";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/login");
  };

  return (
    <div className="w-full h-screen bg-white bg-cover rounded-lg bg-center">
      <div className="w-full h-screen bg-no-repeat bg-cover bg-center absolute inset-0">
        <svg
          width="1509"
          height="752"
          viewBox="0 0 1509 752"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <mask
            id="cloudMask"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1509"
            height="756"
          >
            <path
              d="M0 244.387V756H1508.59V0C1468.71 60.6018 1358.33 171.025 1235.92 127.903C1082.92 74.0012 928.998 158.966 871.906 292.807C826.233 399.881 750.872 513.846 667.289 548.614C610.654 572.172 406.22 581.412 326.565 383.71C246.911 186.008 75.6657 208.452 0 244.387Z"
              fill="white"
            />
          </mask>
          <g mask="url(#cloudMask)">
            <image
              href="/signupbackground.png"
              width="1546.91"
              height="870.081"
              transform="matrix(-1 0 0 1 1528.18 -57.0405)"
            />
          </g>
        </svg>

        <div className="flex p-6">
          <img
            src="/ecoguardlogo.png"
            alt="logo"
            className="w-12 h-12 mr-2 align-baseline"
          />
          <img src="/ecoguardlogotext.png" alt="logo" className="h-10 mt-2" />
        </div>

        <div className="flex justify-center">
          <div className="bg-black/65 p-8 rounded-2xl shadow-lg backdrop-blur-sm w-96 mt-8 relative">
            <div className="flex justify-start">
              <h2 className="text-2xl font-semibold text-white text-center mb-6 mt-6">
                Sign Up
              </h2>
            </div>

            <div className="mb-4">
              <div className="flex items-center border-2 rounded-md px-3 py-2 mt-1">
                <span className="text-white pr-2">
                  <img
                    src="/iconperson.png"
                    alt="Person Figure"
                    className="w-3 h-3"
                  />
                </span>
                <input
                  type="text"
                  className="bg-transparent flex-1 outline-none text-white"
                  placeholder="Username"
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center border-2 rounded-md px-3 py-2 mt-1">
                <span className="text-white pr-2">
                  <img
                    src="/iconmail.png"
                    alt="Mail Figure"
                    className="w-3 h-3"
                  />
                </span>
                <input
                  type="text"
                  className="bg-transparent flex-1 outline-none text-white"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center border-2 rounded-md px-3 py-2 mt-1">
                <span className="text-white pr-2">
                  <img
                    src="/iconphone.png"
                    alt="Mail Figure"
                    className="w-3 h-3"
                  />
                </span>
                <input
                  type="text"
                  className="bg-transparent flex-1 outline-none text-white"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center border-2 rounded-md px-3 py-2 mt-1">
                <span className="text-gray-400 pr-2">
                  <img
                    src="/iconlock.png"
                    alt="Eye Figure"
                    className="w-3 h-4"
                  />
                </span>
                <input
                  type="password"
                  className="bg-transparent flex-1 outline-none"
                  placeholder="Password"
                />
                <span className="text-gray-400 cursor-pointer">
                  <img
                    src="/iconeye.png"
                    alt="Eye Figure"
                    className="w-6 h-4"
                  />
                </span>
              </div>
            </div>

            <div className="mb-20 flex items-center text-sm text-white">
              <input
                type="checkbox"
                className="mr-2 mb-4 appearance-none w-3 h-3 ml-4 border border-white  bg-transparent checked:bg-blue-500 checked:border-blue-500 focus:ring-2 focus:ring-blue-300"
              />
              <span>
                I agree{" "}
                <span className="font-semibold text-white">
                  Terms and Conditions & Private Policy
                </span>{" "}
                by Signing in
              </span>
            </div>

            <div className="flex flex-col justify-center mx-6 mb-10 ">
              <button
                className="w-full bg-white text-blue-600 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                onClick={handleRegister}
              >
                Sign Up
              </button>
            </div>

            <img
              src="/person.png"
              alt="Human Figure"
              className="w-100 h-80 absolute bottom-[-10px] left-[230px] right-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
