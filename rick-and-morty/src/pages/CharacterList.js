import CharacterContext from "../contexts/CharacterContext";

import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

function CharacterList() {
  const {
    isLoadingCharacters,
    filterType,
    filterValue,
    getFilteredCharacters,
    handleFilterChange,
    handleFilterType,
  } = useContext(CharacterContext);

  return (
    <div className="container App">
      <img
        src="https://pbs.twimg.com/media/CcvcLQvW0AAlEtL?format=jpg&name=medium"
        alt="Rick and Morty"
        className="mx-auto"
      />
      <h1 className="custom-font text-[350%]">Rick and Morty Character List</h1>

      <div className="flex flex-wrap items-center justify-center gap-2  mb-2">
        <label htmlFor="character-select" className="">
          Search by Name:
        </label>
        <select value={filterType} onChange={handleFilterType} className="p-1">
          <option value="name">Name</option>
          <option value="species">Species</option>
        </select>
        <input
          value={filterValue}
          onChange={handleFilterChange}
          placeholder="Name"
          className="border border-gray-300 p-1 md:w-1/3"
        />
      </div>
      <div className="w-full">
        {isLoadingCharacters ? (
          <p className="text-white text-xl">Loading brain cells {`><))))*>`}</p>
        ) : (
          // Grid kullanarak responsive bi yapı
          <div className="grid grid-cols-1 sm:grid-cols-5 min-w-full border-collapse shadow-md rounded-lg">
            <div className="hidden sm:block sm:p-2 border-b-2 border-black bg-[#d1e7dd] font-bold">
              Name
            </div>
            <div className="hidden sm:block sm:p-2 border-b-2 border-black bg-[#d1e7dd] font-bold">
              Picture
            </div>
            <div className="hidden sm:block sm:p-2 border-b-2 border-black bg-[#d1e7dd] font-bold">
              Species
            </div>
            <div className="hidden sm:block sm:p-2 border-b-2 border-black bg-[#d1e7dd] font-bold">
              Origin
            </div>
            <div className="hidden sm:block sm:p-2 border-b-2 border-black bg-[#d1e7dd] font-bold">
              Status
            </div>
            {/* Filtre tipi ve değerine göre gösterilecek karakterler */}
            {getFilteredCharacters().map((character, index) => (
              <Fragment key={character.id}>
                <div
                  className={`p-2 text-center flex flex-col justify-center items-center ${
                    // Tek/çift mantığını kullanarak değişen arkaplan renkleri
                    index % 2 === 0 ? "bg-[#c7dbd2]" : "bg-[#d1e7dd]"
                  }`}
                >
                  <p className="sm:hidden mb-1 font-bold">Name:</p>
                  <Link
                    to={`/characters/${character.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {character.name}
                  </Link>
                </div>
                <div
                  className={`p-2 text-center flex flex-col justify-center items-center ${
                    index % 2 === 0 ? "bg-[#c7dbd2]" : "bg-[#d1e7dd]"
                  }`}
                >
                  <p className="sm:hidden mb-1 font-bold">Picture:</p>

                  <img
                    loading="lazy"
                    src={character.image}
                    alt={character.name}
                    className="border border-black max-w-[200px] sm:max-w-none w-full h-auto mx-auto"
                  />
                </div>
                <div
                  className={`p-2 text-center flex flex-col justify-center items-center ${
                    index % 2 === 0 ? "bg-[#c7dbd2]" : "bg-[#d1e7dd]"
                  }`}
                >
                  <p className="sm:hidden mb-1 font-bold">Species:</p>

                  {character.species}
                </div>
                <div
                  className={`p-2 text-center flex flex-col justify-center items-center ${
                    index % 2 === 0 ? "bg-[#c7dbd2]" : "bg-[#d1e7dd]"
                  }`}
                >
                  <p className="sm:hidden mb-1 font-bold">Origin:</p>

                  {character.origin.name}
                </div>
                <div
                  className={`p-2 text-center flex flex-col justify-center items-center  ${
                    index % 2 === 0 ? "bg-[#c7dbd2]" : "bg-[#d1e7dd]"
                  }`}
                >
                  <p className="sm:hidden mb-1 font-bold">Status:</p>

                  {character.status}
                </div>
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CharacterList;
