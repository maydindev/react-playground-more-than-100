import Image from "next/image";

//https://www.ginifab.com/feeds/pms/color_picker_from_image.tr.php

export default function Home() {
  return (
    <div>
      <div className="content-center">
        <div className="flex justify-center items-center bg-zinc-100 min-h-screen">
          <div className="bg-white shadow-2xl">
            <div className="border border-green-300 bg-custom w-custom-width ">
              <div className="flex content-center m-20 shadow-2xl">
                <div className="flex mr-30 shadow-2xl">
                  <img src="/lion.png" alt="" />
                  <div className="content-center text-center bg-white shadow-2xl">
                    <h1 className="text-5xl text-gray-600 font-bold">LOGIN</h1>
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-2/3 border border-gray-300 m-3 p-2"
                    />
                    <br />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-2/3 border border-gray-300 m-3 p-2 "
                    />
                    <br />
                    <div className="flex w-128 m-3">
                      <button className="border border-gray-500 bg-custom text-white font-bold w-36 ml-20">
                        LOGIN
                      </button>

                      <div className="ml-11 justify-end w-36 mr-20 font-bold text-lg text-right text-gray-700">
                        <a href="" className="ml-">
                          Forgot password
                        </a>
                        <br />
                        <a href="" className="ml-16">
                          Register
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
