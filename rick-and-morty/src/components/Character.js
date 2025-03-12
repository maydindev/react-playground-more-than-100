import CharacterContext from "../contexts/CharacterContext";

import React from "react";
import { useContext } from "react";

function Character({
  name,
  species,
  gender,
  origin,
  imageUrl,
  location,
  status,
}) {
  const { refetch } = useContext(CharacterContext);
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h3 className="text-2xl font-semibold">{name}</h3>
      <p>
        <b>Species:</b> {species}
      </p>
      <p>
        <b>Gender:</b> {gender}
      </p>
      <p>
        <b>Origin:</b> {origin}
      </p>
      <p>
        <b>Location:</b> {location}
      </p>
      <button
        className="bg-teal-300 shadow-sm hover:bg-teal-300/75 active:bg-teal-300/60 tracking-wide text-lg font-semibold py-1 px-1 rounded-lg"
        onClick={refetch}
      >
        Try Again
      </button>
      <img
        src={imageUrl}
        alt={name}
        className="border-4 border-green-500 h-auto my-4 max-w-[400px]"
      />
      <p></p>
      <p>
        <b>Status:</b> {status}
      </p>
    </div>
  );
}

export default Character;
