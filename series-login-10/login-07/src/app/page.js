import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
      <Image
        src="/backgroundImage.png"
        layout="fill"
        objectFit="cover"
        alt="Background image"
        className="z-0"
      />
      <svg
        className="absolute inset-0 left-[20%] top-[10%] z-10"
        width="300"
        height="300"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="250"
          cy="250"
          r="221.5"
          stroke="black"
          strokeOpacity="0.25"
          strokeWidth="57"
        />
      </svg>
      <div className="relative z-20 flex flex-col justify-start shadow-xl p-10 bg-gray-600 bg-opacity-50 rounded-3xl">
        <h1 className="text-white text-4xl font-extrabold text-center mb-7">
          LOGIN
        </h1>
        <input
          type="text"
          placeholder="Username"
          className="w-96 h-12 p-5 text-xl mb-5 bg-gray-400 placeholder-white"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="w-96 h-12 p-5 text-xl bg-gray-400 placeholder-white"
        />
        <br />
        <div className="flex justify-evenly mb-10">
          <button className="bg-black bg-opacity-70 text-white text-xl w-48 h-10 font-bold">
            LOGIN
          </button>
          <div className="w-48 font-bold text-sm text-right text-white">
            <a href="">Forgot password</a>
            <br />
            <a href="">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}
