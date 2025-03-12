import CharacterContext from "../contexts/CharacterContext";

import React, { useContext } from "react";
import { Fragment } from "react";

function LocationList() {
  const { isLoadingLocations, locations } = useContext(CharacterContext);

  return (
    <div className="container App">
      <img
        src="https://preview.redd.it/o6cwlzg3exk41.png?width=960&crop=smart&auto=webp&v=enabled&s=e29c84013ab4bb1bf5a51ded8b4b31ff478a9feb"
        alt="Rick and Morty"
        className="mx-auto"
      />
      <h1 className="custom-font text-[350%]">Rick and Morty Location List</h1>
      {isLoadingLocations ? (
        <p className="text-white text-xl">Loading brain cells {`><))))*>`}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 min-w-full border-collapse shadow-md rounded-lg">
          <div className="hidden sm:block sm:p-2 border-b-2 border-black bg-[#d1e7dd] font-bold">
            Location Name
          </div>
          <div className="hidden sm:block sm:p-2 border-b-2 border-black bg-[#d1e7dd] font-bold">
            Type
          </div>
          <div className="hidden sm:block sm:p-2 border-b-2 border-black bg-[#d1e7dd] font-bold">
            Dimension
          </div>

          {locations?.map((location, index) => (
            // Grid'in özelliklerinden faydalanabilmek için Fragment kullanarak maplemek
            <Fragment key={location.id}>
              <div
                className={`p-2 text-center ${
                  index % 2 === 0 ? "bg-[#c7dbd2]" : "bg-[#d1e7dd]"
                }`}
              >
                <p className="sm:hidden mb-1 font-bold">Location Name:</p>
                <p>{location.name}</p>
              </div>
              <div
                className={`p-2 text-center ${
                  index % 2 === 0 ? "bg-[#c7dbd2]" : "bg-[#d1e7dd]"
                }`}
              >
                <p className="sm:hidden mb-1 font-bold">Type:</p>
                <p>{location.type}</p>
              </div>
              <div
                className={`p-2 text-center ${
                  index % 2 === 0 ? "bg-[#c7dbd2]" : "bg-[#d1e7dd]"
                }`}
              >
                <p className="sm:hidden mb-1 font-bold">Dimension:</p>

                {location.dimension}
              </div>
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default LocationList;
