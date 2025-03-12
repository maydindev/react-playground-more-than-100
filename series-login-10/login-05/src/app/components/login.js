import React from 'react'

const login = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-custom-image bg-custom-size bg-center bg-no-repeat h-screen ">
        <div className="flex flex-col justify-start shadow-xlxlxl p-10 bg-white opacity-85 shadow-2xl">
          <h1 className="text-custom-color text-6xl font-bold mb-7">LOGIN</h1>
          <input
            type="text"
            placeholder="Username"
            className="w-96 h-12 rounded-lg p-5 text-xl mb-5 input-special"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-96 h-12 rounded-lg p-5 text-xl input-special"
          />
          <br />
          <button className="border bg-custom-color text-white w-32 h-10 rounded-lg font-bold mb-3">
            LOGIN
          </button>
          <br />
          <div class="flex items-center mb-7">
            <div class="flex-1 border-t border-black"></div>
            <span class="mx-4 text-black font-bold">OR</span>
            <div class="flex-1 border-t border-black"></div>
          </div>
          <div className="flex justify-center items-center">
            <a href="">
              <img src="/google.png" alt="" className="w-5 h-5 mr-7" />
            </a>
            <a href="">
              <img src="/facebook.png" alt="" className="w-5 h-5 ml-7" />
            </a>
          </div>
          <br />
          <div className="flex justify-center items-center text-xl text-custom-color">
            <p>
              Not yet registered, Click <a href="">here</a> to sign up
            </p>
          </div>
        </div>
      </div>
  )
}

export default login