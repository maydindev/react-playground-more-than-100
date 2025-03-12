import Image from "next/image";

export default function Home() {
  return (
    <div className="content-center">
      <div className="flex justify-center items-center border-[5px] rounded-xl m-20  custom-dash w-[1300] h-[700px]">
        <div className="flex flex-col justify-center items-center m-[370px]">
          <svg
            width="190"
            height="160"
            viewBox="0 0 190 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M55.4167 139.873C44.6029 139.174 34.3279 135.616 26.0589 129.706C17.79 123.796 11.9497 115.837 9.3722 106.966C6.79467 98.0942 7.61162 88.7637 11.7064 80.3065C15.8012 71.8493 22.9645 64.6979 32.1733 59.8733C34.1328 47.0072 41.5926 35.1833 53.1566 26.6144C64.7206 18.0454 79.5964 13.3186 95 13.3186C110.404 13.3186 125.279 18.0454 136.843 26.6144C148.407 35.1833 155.867 47.0072 157.827 59.8733C167.036 64.6979 174.199 71.8493 178.294 80.3065C182.388 88.7637 183.205 98.0942 180.628 106.966C178.05 115.837 172.21 123.796 163.941 129.706C155.672 135.616 145.397 139.174 134.583 139.873V140H55.4167V139.873ZM102.917 86.6667H126.667L95 53.3333L63.3333 86.6667H87.0833V113.333H102.917V86.6667Z"
              fill="#1E77CC"
            />
          </svg>
          <p className="flex text-center text-2xl">Browse Files to upload</p>
        </div>
      </div>
      <div className="flex justify-between rounded-xl bg-[#1E77CC1A] shadow-xl m-20 p-5 ">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 58.6667H48C49.4145 58.6667 50.7711 58.1048 51.7713 57.1046C52.7715 56.1044 53.3334 54.7478 53.3334 53.3333V21.3333L37.3334 5.33334H16C14.5855 5.33334 13.229 5.89525 12.2288 6.89544C11.2286 7.89563 10.6667 9.25219 10.6667 10.6667V53.3333C10.6667 54.7478 11.2286 56.1044 12.2288 57.1046C13.229 58.1048 14.5855 58.6667 16 58.6667ZM34.6667 10.6667L48 24H34.6667V10.6667ZM22.6667 29.3333C23.1922 29.3335 23.7124 29.4372 24.1978 29.6384C24.6832 29.8397 25.1242 30.1346 25.4957 30.5062C25.8671 30.8779 26.1617 31.3191 26.3626 31.8047C26.5635 32.2902 26.6669 32.8105 26.6667 33.336C26.6665 33.8615 26.5628 34.3818 26.3616 34.8672C26.1603 35.3526 25.8655 35.7936 25.4938 36.165C25.1221 36.5364 24.6809 36.831 24.1954 37.0319C23.7098 37.2329 23.1895 37.3362 22.664 37.336C21.6028 37.3357 20.5852 36.9137 19.835 36.1631C19.0849 35.4125 18.6637 34.3946 18.664 33.3333C18.6644 32.2721 19.0863 31.2545 19.8369 30.5044C20.5876 29.7542 21.6055 29.333 22.6667 29.3333ZM24 42.6667L28.2587 46.3013L34.6667 34.6667L45.3334 50.6667H18.6667L24 42.6667Z"
            fill="#1E77CC"
          />
        </svg>
        <div className="flex items-center">
          <p className="text-3xl">No selected File - </p>
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 50.6667C16 53.6 18.4 56 21.3333 56H42.6666C45.6 56 48 53.6 48 50.6667V18.6667H16V50.6667ZM50.6666 10.6667H41.3333L38.6666 8H25.3333L22.6666 10.6667H13.3333V16H50.6666V10.6667Z"
              fill="#1D1F20"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
