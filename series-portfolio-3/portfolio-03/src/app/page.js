import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#FFDD55] min-h-screen">
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
        <div className="flex flex-col ml-[50px] mt-10 justify-start">
          <p className="text-5xl  md:text-[90px] font-bold leading-[40px] md:leading-[50px]">
            Hello,
          </p>
          <p className="text-5xl md:text-[90px] font-bold leading-[80px] md:leading-[150px]">
            I'm Namık Korona
          </p>

          <p className="text-3xl hidden md:block">
            UI/UX Designer , React developer
          </p>

          <p className="text-3xl block md:hidden">
            UI/UX Designer <br /> React developer
          </p>

          <div className="hidden md:flex justify-center md:justify-start mt-4 ">
            <button className="bg-black text-white font-bold m-2 px-5 py-2 md:px-7 md:py-2 text-md md:text-3xl rounded-xl shadow-lg shadow-[#00c6ae]/50 customShadow1">
              Hire me
            </button>
            <button className="bg-black text-white font-bold m-2 px-5 py-2 md:px-7 md:py-2 text-md md:text-3xl rounded-xl shadow-lg shadow-[#00c6ae]/50 customShadow1">
              Download CV
            </button>
          </div>
        </div>

        <div className="flex mb-[100px]">
          <div className="flex items-center md:mt-0 ">
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

      <div className="bg-[#106EE8] m-20 mb-[180px] rounded-3xl flex">
        <div className="pl-10 px-10 py-20 w-[800px]">
          <img src="/avatar.png" alt="My Picture" />
        </div>
        <div className="mt-20 mb-20 p-5">
          <p className="text-6xl font-bold text-white leading-[80px]">
            About me
          </p>
          <p className="text-3xl font-bold text-[#FFDD55] ">UI/UX Designer</p>
          <p className="text-3xl font-bold text-[#FFDD55] "> React Developer</p>
          <br />
          <p className="text-2xl font-bold text-white">
            Hello! I'm a UI/UX designer and React developer. Dive into my
            portfolio to discover a fusion of elegant design and seamless react
            development. Welcome to a world where creativity meets
            functionality!
          </p>
          <br />

          <div className="flex justify-start mt-4 gap-7">
            <button className="bg-black text-white font-bold m-2 px-5 py-2 md:px-7 md:py-2 text-md md:text-3xl rounded-xl shadow-lg shadow-[#00c6ae]/50 customShadow1">
              Hire me
            </button>
            <button className="bg-black text-white font-bold m-2 px-5 py-2 md:px-7 md:py-2 text-md md:text-3xl rounded-xl shadow-lg shadow-[#00c6ae]/50 customShadow1">
              Download CV
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#EB7711] p-[30px]">
        <div className="flex flex-col justify-center items-center p-5">
          <h1 className="text-6xl font-extrabold text-center">Services</h1>
          <p className="text-white text-2xl text-center w-[1000px] m-7">
            Embark on a journey of digital transformation with services that
            blend design brilliance with cutting-edge development. Let's create
            experiences that resonate and applications that captivate.
          </p>
        </div>
        <div className="flex justify-evenly mb-20">
          <div className="relative bg-purple-500 p-6 rounded-lg shadow-lg text-white border border-black w-[400px] flex flex-col justify-between items-left customShadow3">
            <div className="absolute -top-10 left-[150px]  w-20 h-20 bg-green-500 flex items-center justify-center rounded-full text-6xl font-bold">
              1
            </div>
            <h3 className="text-3xl mt-10 font-semibold mb-2">
              UI/UX Designer
            </h3>
            <p className="text-xl mt-5 mb-10">
              Crafting captivating interfaces that resonate. From wireframes to
              polished designs, I make sure your digital presence stands out
              with user-centric creativity.
            </p>
            <button className="bg-[#FFDD55] text-black  text-2xl font-bold py-2 px-14 rounded">
              Learn More
            </button>
          </div>
          <div className="relative bg-purple-500 p-6 rounded-lg shadow-lg text-white border border-black w-[400px] flex flex-col justify-between items-left customShadow3">
            <div className="absolute -top-10 left-[150px]  w-20 h-20 bg-green-500 flex items-center justify-center rounded-full text-6xl font-bold">
              2
            </div>
            <h3 className="text-3xl mt-10 font-semibold mb-2">
              React Developer{" "}
            </h3>
            <p className="text-xl mt-5 mb-10">
              Turning app ideas into reality. As a React developer, I build
              sleek, cross-platform applications for a seamless user experience
              and efficient performance.
            </p>
            <button className="bg-[#FFDD55] text-black text-2xl font-bold py-2 px-14 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className=" mb-[180px]"></div>

      <div className="bg-[#0ACF83] p-[120px] flex flex-col justify-center items-center">
        <h6 className="text-white font-bold text-4xl mb-20">
          If You have any Query or Project ideas feel free to
        </h6>
        <button className="bg-[#FFDD55] rounded-3xl shadow-2xl text-5xl px-20 py-4 font-extrabold customShadow2">
          Contact me
        </button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center m-20">
          <img src="/logo.png" alt="" />
          <h5 className="text-3xl font-bold ml-7">Namık Korona</h5>
        </div>

        <p className="flex justify-center items-center font-bold text-3xl w-[800px] text-center mb-20">
          I Make as soon as Possible .You really like my work contact me and
          let’s Work Together.
        </p>

        <div className="flex justify-center items-center gap-4 ">
          <img src="instagram.png" alt="Instagram" />
          <img src="facebook.png" alt="Facebook" />
          <img src="twitter.png" alt="Twitter" />
          <img src="youtube.png" alt="Youtube" />
        </div>
      </div>

      <div className="flex justify-between items-center mt-20">
        <div className="flex">
          <img src="/location.png" alt="Location" />
          <p className="text-2xl">Türkiye</p>
        </div>
        <p className="text-2xl">© 2024, All Rights By Figma Design.</p>
        <nav className="flex text-xl text-[#3B5999]">
          <ul className="flex gap-10">
            <li>Guides</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
