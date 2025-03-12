import Image from "next/image";
import { Actor, Allerta, Inter, Paytone_One } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const paytone = Paytone_One({ subsets: ["latin"], weight: "400" });
const actor = Actor({ subsets: ["latin"], weight: "400" });
const allerta = Allerta({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className="bg-black h-screen">
      <nav
        className={`${inter.className} flex justify-between items-center  text-white pl-32 pr-32 pt-10`}
      >
        <div className={"font-bold  text-2xl"}>
          <a href="#">Namık Korona</a>
        </div>
        <div className="flex gap-10">
          <ul className="flex justify-between gap-8 text-lg ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
          <div>
            <ul className="flex justify-between gap-5">
              <li>
                <a href="#">
                  <img src="/github.png" alt="Github" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="linkedin.png" alt="Linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="instagram.png" alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="flex justify-between items-center ">
        <div
          className={`${inter.className} flex flex-col justify-center items-center ml-32`}
        >
          <div className="flex justify-between items-center z-20 flex-grow">
            <div className="text-white">
              <p className="font-medium text-[28px]">Hi, I'm Namık,</p>
              <h1 className="text-[90px] leading-[100px] text-white font-bold">
                I'M A <br />
                DEVELOPER
              </h1>
              <ul className="text-[#F8F7F980] text-2xl">
                <li>Interactive Elements</li>
                <li>Prototyping for Web</li>
                <li>Responsive Design</li>
                <li>Collaborative Design Workflows</li>
              </ul>
              <br />
              <div className="flex flex-col justify-center items-start w-fit">
                <a
                  href="#"
                  className="font-extrabold text-[26px] text-white underline"
                >
                  View My Projects
                </a>
                <hr className="w-full border-[#A6BBCC] border-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-32">
          <img src="/man.png" alt="Man" />
        </div>
        <img
          src="/smoke.png"
          alt="Smoke"
          className="absolute opacity-10 left-[-500px] top-50 pointer-events-none"
        />
      </section>
      <section className="flex flex-col justify-center items-center  bg-black">
        <div className="flex flex-col justify-center items-center gap-7  m-60">
          <img src="/avatar.png" alt="Avatar" />
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className={`${paytone.className} text-[47px] text-[#F7F7F5]`}>
              Namık Korona
            </h2>
            <p className={`${actor.className} text-[#F7F7F5] opacity-50 text-[23px]`}>
              Designer | Developer
            </p> 
          </div>
          <button
            className={`${allerta.className} bg-[#FFB829] rounded-[15px] underline text-[#121212] text-[22px] py-2 px-14`}
          >
            Follow
          </button>
        </div>
        <div className="flex m-20 gap-[110px]">
          <div className="flex">
            <img src="/telegram.png" alt="Telegram" />
            <div className="flex flex-col">
              <span className={`${actor.className} text-[#F0F8FD] text-[21px]`}>
                Telegram
              </span>
              <span className="text-[#FFB829]">
                <a href="#">@🐳</a>
              </span>
            </div>
          </div>
          <div className="flex gap-6">
            <img src="/mail.png" alt="Mail" />
            <div className="flex flex-col">
              <span className={`${actor.className} text-[#F0F8FD] text-[21px]`}>
                Mail
              </span>
              <span className="text-[#FFB829]">
                <a href="#">@gmail.com</a>
              </span>
            </div>
          </div>
          <div className="flex gap-6">
            <img src="/github.png" alt="GitHub" />
            <div className="flex flex-col">
              <span className={`${actor.className} text-[#F0F8FD] text-[21px]`}>
                GitHub
              </span>
              <span className="text-[#FFB829]">
                <a href="#">@🤖</a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
