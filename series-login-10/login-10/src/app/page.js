import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center w-2/5 min-h-screen bg-[#db5b12] text-white">
      <div className="flex flex-col justify-start items-start">
        <h1 className="font-bold text-5xl text-center mb-10">
          Welcome Back
        </h1>
          <p>
            <span>Sign in with yourr credentionals</span>
            <br />
            <span>to enjoy our uninterupted services</span>
          </p>
          <br />
          <p className="text-gray-700 mb-10">Don't have an account yet?</p>
        </div>
        <img src="/cart.png" alt="" className="w-24 h-24" />
        <button className="border border-white w-[300px] rounded-full p-3 m-10 font-bold">
          CLICK HERE TO SIGN UP
        </button>
      </div>
      <div className="flex flex-col border w-3/5 min-h-screen">
        <h1 className="text-5xl text-center font-bold mt-20 mb-10 tracking-wider">SIGN IN TO SHEY</h1>
        <div className="flex justify-center items-center mb-3">
          <img src="/google.png" alt="" className="w-10 h-10 mr-10" />
          <img src="/linkedin.png" alt="" className="w-10 h-10 mr-10" />
          <img src="/github.png" alt="" className="w-10 h-10" />
        </div>
       <div className="m-2 p-2 mb-3 mx-[260px]">
       <div className="flex items-center">
          <div className="flex-1 border-t border-black"></div>
          <span className="mx-4 font-bold text-black">OR</span>
          <div className="flex-1 border-t border-black"></div>
        </div>
       </div>

        <p className="text-center text-xl text-gray-700">use email and password</p>

        <div className="flex flex-col justify-center items-center m-5 p-5">
          <input type="text" placeholder="Username" className="border rounded-full p-1 pl-5 w-[400px] h-12 bg-gray-100 mb-10"/>
          <input type="text" placeholder="Password" className="border rounded-full p-1 pl-5 w-[400px] h-12 bg-gray-100 mb-10"/>
          <button className="bg-[#db5b12] rounded-full w-[400px] p-3 font-bold text-xl text-white">LOGIN</button>
        </div>
      </div>
    </div>
  );
}
