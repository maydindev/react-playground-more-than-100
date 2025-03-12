import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-[#FFDD55] min-h-screen">
      <nav className="flex justify-between items-center rounded-bl-3xl rounded-br-3xl bg-black text-white px-8 py-4 md:px-[5em] md:py[1em] ">
        <a href="">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 md:w-14 md:h-14"
          />
        </a>
        <div className="hidden md:flex justify-center items-center text-xl font-extrabold">
          <ul className="flex gap-[20px] md:gap-[60px] text-xl md:text-3xl">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="md:hidden">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row justify-between my-10 mx-5 md:mx-10 items-start md:items-center">
        <div className="flex flex-col ml-5 mt-10 justify-start">
          <p className="text-5xl  md:text-6xl font-bold leading-[40px] md:leading-[50px]">
            Hello,
          </p>
          <p className="text-5xl md:text-6xl font-bold leading-[80px] md:leading-[100px]">
            I'm Namık.
          </p>

          <p className="text-3xl hidden md:block">
            UI/UX Designer , React developer
          </p>

          <p className="text-3xl block md:hidden">
            UI/UX Designer <br /> React developer
          </p>

          <div className="hidden md:flex justify-center md:justify-start mt-4 ">
            <button className="bg-black text-white font-bold m-2 px-5 py-2 md:px-7 md:py-2 text-md md:text-xl rounded-xl shadow-lg shadow-[#00c6ae]/50">
              Hire me
            </button>
            <button className="bg-black text-white font-bold m-2 px-5 py-2 md:px-7 md:py-2 text-md md:text-xl rounded-xl shadow-lg shadow-[#00c6ae]/50 customShadow">
              Download CV
            </button>
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center mt-5 md:mt-0 ">
            <img src="/avatar.png" alt="My Picture" />
          </div>

          <div className="flex flex-col justify-end mt-4 ml-10 mb-10 gap-4 ">
            <img src="instagram.png" alt="Instagram" />
            <img src="facebook.png" alt="Facebook" />
            <img src="twitter.png" alt="Twitter" />
            <img src="youtube.png" alt="Youtube" />
          </div>
        </div>
      </div>

      <div className="flex ml-5 md:hidden">
        <div className="flex justify-center mt-4 ">
          <button className="bg-black text-white font-bold m-2 px-5 py-2 text-md rounded-xl shadow-lg shadow-[#00c6ae]/50">
            Hire me
          </button>
          <button className="bg-black text-white font-bold m-2 px-5 py-2 text-md rounded-xl shadow-lg shadow-[#00c6ae]/50 customShadow">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
