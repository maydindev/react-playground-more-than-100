import Character from "../components/Character";
import CharacterContext from "../contexts/CharacterContext";

import React from "react";
import { useContext } from "react";

function RandomCharacter() {
  // Context'ten gerekli değişkenlere ulaşmak
  const { isLoadingRandomCharacter, randomCharacter } =
    useContext(CharacterContext);

  return (
    <div className="container App flex flex-col items-center justify-center">
      <img
        className="image-border w-full h-auto max-w-[640px]"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/640px-Rick_and_Morty.svg.png"
        alt="Rick and Morty"
      />
      <h1 className="custom-font text-[325%]">Random Character</h1>
      {!isLoadingRandomCharacter && randomCharacter ? (
        <Character
          name={randomCharacter.name}
          species={randomCharacter.species}
          gender={randomCharacter.gender}
          origin={randomCharacter.origin.name}
          imageUrl={randomCharacter.image}
          location={randomCharacter.location.name}
          status={randomCharacter.status}
        />
      ) : (
        <p className="text-white text-xl">Loading brain cells {`><))))*>`}</p>
      )}
      <div className="h-12"></div>
    </div>
  );
}

export default RandomCharacter;
