import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex justify-start items-center min-h-screen">
      

      
      <Image
        src="/backgroundImage.png"
        layout="fill"
        objectFit="cover"
        alt="Background image"
        className="z-0"
      />

      <div className="absolute flex flex-col justify-start p-7 pt-10 bg-opacity-50 m-40 shadow-[0_2px_10px_rgba(255,255,255,0.8)]">
        <h1 className="text-white text-6xl font-extrabold text-start mb-7 w-[256]">
          LOGIN
        </h1>
        <input
          type="text"
          placeholder="Username"
          className="w-[350px] h-12 p-5 text-xl mb-5 rounded-lg border white placeholder-white bg-transparent"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="w-[350px] h-12 p-5 text-xl mb-5 rounded-lg border white placeholder-white bg-transparent"
        />
        <div>
          <button className="bg-gray-100 bg-opacity-70 text-black text-xl w-full h-12 rounded-lg font-bold">
            LOGIN
          </button>
         
        </div>
      </div>
    </div>
  );
}
