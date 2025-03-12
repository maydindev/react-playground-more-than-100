import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [text, setText] = useState("");

  const handleChangeInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
  };

  return (
    <div className="flex justify-center mb-8">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={text}
          placeholder="Tarifler burada..."
          onChange={handleChangeInput}
          className="p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 w-96"
        />
        <button
          type="submit"
          className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-5 rounded-r-md"
        >
          Ara
        </button>
      </form>
    </div>
  );
};

export default Search;
