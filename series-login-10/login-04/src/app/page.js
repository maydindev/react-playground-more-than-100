import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-custom-image bg-custom-size bg-center bg-no-repeat h-screen">
      <div>
        <div className="flex flex-col justify-start">
          <h1 className="text-dirty-white text-6xl font-bold mb-7">LOGIN</h1>
          <input
            type="text"
            placeholder="Username"
            className="w-96 h-12 rounded-sm p-5 text-xl mb-5 input-special"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-96 h-12 rounded-sm p-5 text-xl mb-10 input-special"
          />
          <button className="text-white font-bold text-left text-2xl ml-10">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
