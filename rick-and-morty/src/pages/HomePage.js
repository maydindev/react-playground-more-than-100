import React, { useEffect, useState } from "react";
import { rickAndMortyQuotes } from "../Quotations";
import { Link } from "react-router-dom";

function HomePage() {
  const [randomQuote, setRandomQuote] = useState("");

  // Rasgele bir index'teki alıntıyı döndürmek
  const generateRandomQuote = () => {
    const quoteKeys = Object.keys(rickAndMortyQuotes);
    const randomQuote = quoteKeys[Math.floor(Math.random() * quoteKeys.length)];
    return rickAndMortyQuotes[randomQuote];
  };

  const handleClick = () => {
    const newQuote = generateRandomQuote();
    setRandomQuote(newQuote);
  };

  useEffect(() => {
    const initialQuote = generateRandomQuote();
    setRandomQuote(initialQuote);
  }, []);

  return (
    <div className="w-full bg-[#26b1c6] min-h-screen flex items-center justify-center">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 mt-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/640px-Rick_and_Morty.svg.png"
            alt="Rick and Morty"
            className="img-fluid mx-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 mt-3">
          <h1 className="custom-font text-[3.25rem] text-center">
            Inside The Rick And Morty Universe
          </h1>
          <h5 className="text-center mb-3">{randomQuote}</h5>
          <div className="flex justify-center">
            <Link
              to="/"
              className="inline-block font-normal leading-normal text-center no-underline align-middle cursor-pointer select-none border-[1px] border-[solid] px-3 py-1.5 text-[1rem] rounded hover:text-[#fff] hover:bg-[#0b5ed7] hover:border-[#0a58ca] text-[#fff] bg-[#0d6efd] border-[#0d6efd] duration-200"
              onClick={handleClick}
            >
              Click for new quote
            </Link>
          </div>
        </div>
        <div className="w-full mt-3">
          <img
            src="637645.jpg"
            alt="Home page"
            className="max-w-full h-auto border-4 border-[#00b601]"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
