import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-custom-image bg-custom-size bg-center bg-no-repeat h-screen ">
        <div className="flex flex-col justify-start shadow-xlxlxl p-10 bg-black opacity-85 shadow-2xl">
          <h1 className="text-gray-400 text-6xl font-bold mb-7">LOGIN</h1>
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
          <button className="text-gray-400 w-48 h-12 rounded-lg text-xl font-bold mb-3 button-special">
            LOGIN
          </button>
          <br />
          <div class="flex items-center mb-7">
            <div class="flex-1 border-t border-gray-400"></div>
            <span class="mx-4  font-bold text-gray-400">OR</span>
            <div class="flex-1 border-t border-gray-400"></div>
          </div>
          <div className="flex justify-center items-center">
            <a href="">
              <img src="/google.png" alt="" className="w-6 h-6 mr-7" />
            </a>
            <a href="">
              <img src="/facebook.png" alt="" className="w-6 h-6 ml-7" />
            </a>
          </div>
        </div>
      </div>
  );
}
