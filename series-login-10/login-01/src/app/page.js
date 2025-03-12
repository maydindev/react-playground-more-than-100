import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <div className="flex justify-center content-center">
          <div className="mb-12 content-end">
            {/*<img src="/login.png" alt="" className="w-36 h-10 mb-5" />*/}
            {/*<p className="font-montserrat text-red-600 text-5xl mb-5">LOGIN</p>*/}
            <p style={{fontFamily:"futura", fontSize:"50px", fontWeight:"bolder", color:"transparent",WebkitTextStroke: "1px red"}}>LOGIN</p>
            <input
              type="text"
              placeholder="Username"
              className="border border-grey-900 p-2 mb-2 w-72 h-8"
            />
            <br />
            <input
              type="text"
              placeholder="Password"
              className="border border-grey-900 p-2 mb-5 w-72 h-8"
            />
            <br />
            <button className="bg-red-500 w-48 h-10 text-white font-bold mb-2">
              LOGIN
            </button>
            <br />
            <button className="mr-40 font-bold">Forgot Password</button>
            <button className="mr-10 font-semibold">Register</button>
          </div>

          <div>
            <img src="/hamburger.png" alt="" className="w-72 h-84" />
          </div>
        </div>
      </div>
    </div>
  );
}
