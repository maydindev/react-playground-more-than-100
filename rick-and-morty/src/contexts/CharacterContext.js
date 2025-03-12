import { useQuery } from "@tanstack/react-query";
import React, { createContext, useState } from "react";

const CharacterContext = createContext();

function CharacterProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [filterType, setFilterType] = useState("name");

  // Query'den faydalanarak fetchleme ve verileri saklama işlerini hallediyoruz
  // Dönen veriyi ve alakalı fetch'in durumunu Query'nin sağladığı değişkenler ile alıp destructurelayıp okuması kolay bir değişkene atıyoruz
  const { data: characters, isPending: isLoadingCharacters } = useQuery({
    queryKey: ["characters"],
    queryFn: async () => {
      const allCharacters = [];
      for (let page = 1; page <= 40; page++) {
        const url = `https://rickandmortyapi.com/api/character?page=${page}`;
        const response = await fetch(url);
        const data = await response.json();
        allCharacters.push(...data.results);
      }
      return allCharacters.slice(0, 800);
    },
  });

  const {
    data: randomCharacter,
    isPending: isLoadingRandomCharacter,
    refetch,
  } = useQuery({
    queryKey: ["randomCharacter"],
    queryFn: async () => {
      const characterUrl = "https://rickandmortyapi.com/api/character/";
      const characterResponse = await fetch(characterUrl);
      const characterData = await characterResponse.json();
      const totalCharacters = characterData.info.count;
      const randomCharacterId = Math.floor(Math.random() * totalCharacters) + 1;
      const randomCharacterUrl = `${characterUrl}${randomCharacterId}`;
      const randomCharacterResponse = await fetch(randomCharacterUrl);

      const randomCharacterInfo = await randomCharacterResponse.json();
      return randomCharacterInfo;
    },
  });

  const { data: locations, isPending: isLoadingLocations } = useQuery({
    queryKey: ["locations"],
    queryFn: async () => {
      const response = await fetch("https://rickandmortyapi.com/api/location");
      const data = await response.json();
      return data.results;
    },
  });

  // Navbar'da bir linke tıkladıktan sonra Navbar'ın otomatik kapanması
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Home'a tıkladığımızda gereksizce Navbar'ı açıp kapatmaması için sabit mantık seçeneği
  const toggleOff = () => {
    setIsOpen(false);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleFilterType = (e) => {
    setFilterType(e.target.value);
  };

  const getFilteredCharacters = () => {
    return characters.filter((c) =>
      String(c[filterType]).toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  return (
    <CharacterContext.Provider
      value={{
        isLoadingCharacters,
        isLoadingLocations,
        isLoadingRandomCharacter,
        toggleOff,
        isOpen,
        toggle,
        characters,
        locations,
        randomCharacter,
        getFilteredCharacters,
        filterValue,
        filterType,
        handleFilterChange,
        handleFilterType,
        refetch,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

export { CharacterProvider };
export default CharacterContext;
