import Image from "next/image";
//w-[1200px] h-[800px]
export default function Home() {
  return (
    <div className="flex justify-center items-center bg-[#DE303F] w-full min-h-screen">
      <div className="flex flex-col border bg-white rounded-2xl m-10 p-10 shadow-2xl">
        <h1 className="text-2xl font-extrabold text-center mb-7">
          Delete User
        </h1>
        <div className="border content-start mb-5">
          <p className="text-xl">
            Are you sure you want to delete{" "}
            <span className="font-bold">your account</span>
            <span> ?</span>
          </p>
        </div>
        <div className="bg-[#FFE9D9] flex border border-[]">
          <div className="bg-[#FA703F] w-2 h-20"></div>
          <div className="flex flex-col m-3 border">
            <div className="flex mb-1">
              <svg
                className="mr-3 text-[#771505]"
                width="30"
                height="27"
                viewBox="0 0 30 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.8552 24.6415L15.9274 0.535684C15.7198 0.177445 15.3616 0 15 0C14.6384 0 14.2768 0.177445 14.0726 0.535684L0.144813 24.6415C-0.266994 25.3579 0.248602 26.2485 1.07222 26.2485H28.9278C29.7514 26.2485 30.267 25.3579 29.8552 24.6415ZM13.9286 9.91015C13.9286 9.76284 14.0492 9.64231 14.1965 9.64231H15.8035C15.9508 9.64231 16.0714 9.76284 16.0714 9.91015V16.0705C16.0714 16.2178 15.9508 16.3384 15.8035 16.3384H14.1965C14.0492 16.3384 13.9286 16.2178 13.9286 16.0705V9.91015ZM15 21.6952C14.5795 21.6866 14.179 21.5135 13.8847 21.2131C13.5903 20.9126 13.4254 20.5088 13.4254 20.0882C13.4254 19.6675 13.5903 19.2637 13.8847 18.9632C14.179 18.6628 14.5795 18.4897 15 18.4811C15.4205 18.4897 15.821 18.6628 16.1153 18.9632C16.4097 19.2637 16.5746 19.6675 16.5746 20.0882C16.5746 20.5088 16.4097 20.9126 16.1153 21.2131C15.821 21.5135 15.4205 21.6866 15 21.6952Z"
                  fill="#771505"
                />
              </svg>
              <span className="text-[18px] text-[#771505] font-bold tracking-wide">
                Warning
              </span>
            </div>

            <p className="text-[16px] text-[#771505]">
              By Deleteing this account, you won’t be able to access the system.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <button className="bg-black text-white font-bold text-xl p-3">
            No, Cancel
          </button>
          <button className="bg-white text-black border border-black font-bold text-xl p-3">
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}
