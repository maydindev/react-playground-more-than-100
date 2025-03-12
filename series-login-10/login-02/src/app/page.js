import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen p-20 m-10">
      <div className="flex justify-center items-center">
        <div className="w-1/2">
          <p className="text-7xl font-bold mb-5 ">LOGIN</p>
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded-md w-full h-10 mb-7 p-2"
          />
          <br />
          <input
            type="text"
            placeholder="Password"
            className="border border-gray-300 rounded-md w-full h-10 mb-7 p-2 "
          />
          <br />
          <button className="border bg-black text-white w-32 h-10 rounded-md font-bold mb-7">
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
              <img src="/google.png" alt="" className="w-5 h-5 mr-5" />
            </a>
            <a href="">
              <img src="/facebook.png" alt="" className="w-5 h-5 ml-5" />
            </a>
          </div>

          <br />
          <div className="flex justify-center items-center text-xl">
            <p>
              Not yet registered, Click <a href="">here</a> to sign up
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <img src="/bird.png" alt="" className="rounded-l-[120px] ml-20" />
        </div>
      </div>
    </div>
  );
}
