import React, { useState } from "react";

const AddFarm = ({ isOpen, onClose }) => {
  const [farmName, setFarmName] = useState("");
  const [farmSize, setFarmSize] = useState("");
  const [image, setImage] = useState(null);
  const [cropType, setCropType] = useState("");

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ farmName, farmSize, image, cropType });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-0 flex justify-center items-center z-50 ">
      <div className="bg-white ml-80 w-[1300px] h-[900px] p-6 shadow-2xl rounded-3xl">
        <button
          className="mb-4 text-[#308B34] px-8 py-1 rounded-xl border-4 border-[#308B34]"
          onClick={onClose}
        >
          BACK
        </button>
        <h2 className="text-4xl text-center font-semibold text-[#308B34] mb-4">
          FARM DETAILS
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col m-20">
          <div className="mb-10 flex">
            <img src="./farm.png" alt="" className="mr-10" />
            <input
              type="text"
              value={farmName}
              onChange={(e) => setFarmName(e.target.value)}
              className="w-full border border-[#308B34] text-gray-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#308B34]"
              placeholder="Farm Name"
            />
          </div>

          <div className="mb-10 flex">
            <img src="./farmSize.png" alt="" className="mr-12" />
            <input
              type="text"
              value={farmSize}
              onChange={(e) => setFarmSize(e.target.value)}
              className="w-full border border-[#308B34] text-gray-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#308B34]"
              placeholder="Farm Size (in acres)"
            />
          </div>

          <div className="flex justfiy-between items-center w-[300px] cursor-pointer relative border border-[#308B34] rounded-xl ml-[86px] p-1 mb-10">
            <span className=" mr-10 text-gray-400">Farm Image</span>

            <img src="./fileExplorer.png" alt="Dosya Seç" className="ml-16" />
            <input
              type="file"
              onChange={handleImageUpload}
              className=" flex justify-center items-center absolute right-0 top-0 opacity-0 w-full h-full cursor-pointer"
            />
          </div>

          <div className="mb-40 flex">
            <img src="./cropType.png" alt="" className="mr-12" />
            <select
              value={cropType}
              onChange={(e) => setCropType(e.target.value)}
              className="w-full border text-gray-400 border-[#308B34] rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#308B34] custom-combobox"
            >
              <option disabled selected hidden value="">
                Crop Type
              </option>
              <option value="wheat">Wheat</option>
              <option value="corn">Corn</option>
              <option value="rice">Rice</option>
            </select>
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-64 flex justify-center items-center bg-[#308B34] text-white rounded px-3 py-2 hover:bg-green-700"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFarm;
