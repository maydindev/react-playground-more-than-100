"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import "/src/app/globals.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../slices/authSlice";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAgree, setIsAgree] = useState("");
  const [isAgreeError, setIsAgreeError] = useState("");
  const { user, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user && isAgree) {
      router.push("/dashboard");
      setIsAgreeError("");
    }
  }, [user, isAgree]);

  const handleLogin = () => {
    dispatch(login({ username, password }));

    if (!isAgree) {
      setIsAgreeError("Koşulları kabul etmelisiniz!");
    } else {
      setIsAgreeError("");
    }
  };

  const handleSignUp = () => {
    router.push("/register");
  };

  //<div className="w-full h-screen bg-white bg-cover rounded-lg bg-center">
  //<div className=" w-full h-screen bg-no-repeat bg-cover bg-center relative inset-0 z-0"></div>
  //viewBox="0 0 1292 982" //1889

  /*
      <div className="flex p-6 ">
        <img
          src="/ecoguardlogo.png"
          alt="logo"
          className="w-12 h-12 mr-2 align-baseline"
        />
        <img src="/ecoguardlogotext.png" alt="logo" className="h-10 mt-2" />
      </div>
*/

  return (
    <div className="flex justify-center items-center h-screen bg-white relative">
      <svg
        width="1292"
        height="982"
        viewBox="0 0 1292 982"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full "
      >
        <mask
          id="cloudMask"
          maskUnits="userSpaceOnUse"
          x="-365"
          y="-144"
          width="1657"
          height="1715"
        >
          <ellipse
            cx="463.195"
            cy="713.5"
            rx="828.195"
            ry="857.5"
            fill="white"
          />
        </mask>
        <g mask="url(#cloudMask)">
          <image
            href="/signinbackground.png"
            x="-1.23975"
            y="1.74487"
            width="1436.05"
            height="980.285"
          />
        </g>
      </svg>

      <div className="absolute top-4 left-72 flex items-center p-4">
        <img src="/ecoguardlogo.png" alt="logo" className="w-12 h-12 mr-2" />
        <img src="/ecoguardlogotext.png" alt="logo text" className="h-10" />
      </div>

      <div className="flex justify-center items-center">
        <div className="bg-black/65 p-8 rounded-2xl shadow-lg backdrop-blur-sm w-96 mt-8 relative">
          <div className="flex justify-start">
            <h2 className="text-2xl font-semibold text-white text-center mb-6 mt-6">
              Sign In
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center border-2 rounded-md px-3 py-2 mt-1">
              <span className="text-gray-400 pr-2">
                <img src="/iconlock.png" alt="Eye Figure" className="w-3 h-4" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="bg-transparent flex-1 outline-none"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span className="text-gray-400 cursor-pointer">
                <img
                  src="/iconeye.png"
                  alt="Eye Figure"
                  className="w-6 h-4"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </span>
            </div>
          </div>

          <div className="mb-20 flex flex-col justify-start items-start text-sm text-white">
            <div className="flex">
              <input
                type="checkbox"
                className="mr-2 mt-1 appearance-none w-3 h-3 ml-4 border border-white  bg-transparent checked:bg-blue-500 checked:border-blue-500 focus:ring-2 focus:ring-blue-300"
                value={isAgree}
                onChange={(e) => {
                  console.log(e.target.checked);
                  setIsAgree(e.target.checked);
                }}
                style={{ borderColor: isAgreeError ? "red" : "white" }}
              />

              <div className="flex ">
                <span>
                  I agree{" "}
                  <span className="font-semibold text-white">
                    Terms and Conditions & Private Policy
                  </span>{" "}
                  by Signing in
                </span>
              </div>
            </div>
            <div className="flex flex-col text-md mt-10 ml-10">
              {error && <p className="text-red-500">{`* ${error}`}</p>}
              {isAgreeError && (
                <p className="text-red-500">{`* ${isAgreeError}`}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center mx-6 mb-10 ">
            <button
              className="w-full bg-white text-blue-600 py-2 rounded-md font-semibold hover:bg-blue-700 transition hover:text-white"
              onClick={handleLogin}
            >
              Log In
            </button>

            <button
              className="w-full mt-3 border-2 border-white text-white py-2 rounded-md font-semibold hover:bg-gray-100 transition hover:text-blue-600"
              onClick={handleSignUp}
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
  );
}
