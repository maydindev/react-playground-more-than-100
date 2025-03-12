import React, { useEffect, useState } from "react";

function App() {
  return <CustomProgram />;
}

const half = (number) => number / 2;
const double = (number) => number * 2;
const increment = (number) => number + 1;
const decrement = (number) => number - 1;

const CustomProgram = () => {
  // KODUNUZU BURAYA EKLEYİN
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);
  const [lastExec, setLastExec] = useState("");
  const [program, setProgram] = useState([]);

  const handleAddFunctionToProgram = (funcName) => {
    setProgram([...program, funcName]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let value = parseFloat(inputValue);
    //let steps = 0;
    const prevValue = value;
    program.forEach((func) => {
      if (func === "half") {
        value = half(value);
      } else if (func === "double") {
        value = double(value);
      } else if (func === "increment") {
        value = increment(value);
      } else if (func === "decrement") {
        value = decrement(value);
      }
      /*steps += `${prevValue} -> Fonksiyonum -> ${value}\n`*/
    });
    setResult(value);
    //setLastExec(steps)
    setLastExec(prevValue);
    setInputValue("");
  };

  const handleClearProgram = () => {
    setProgram([]);
    setResult(null);
    setLastExec("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="bg-white p-6 rounded-lg shadow-md w-128">
        <div className="mb-4 flex justify-center">
          <button
            onClick={() => handleAddFunctionToProgram("half")}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-3"
          >
            Yarım
          </button>
          <button
            onClick={() => handleAddFunctionToProgram("double")}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-3"
          >
            İki Katı
          </button>
          <button
            onClick={() => handleAddFunctionToProgram("increment")}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-3"
          >
            Arttır
          </button>
          <button
            onClick={() => handleAddFunctionToProgram("decrement")}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-9"
          >
            Azalt
          </button>
          <button
            onClick={handleClearProgram}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Temizle
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">Fonksiyonum</h2>
        <ul className="list-none list-inside mb-20 text-center">
          {program.map((func, index) => (
            <li className="m-5" key={index}>
              {func}
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex space-x-2">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="Başlangıç değeri"
            />
            <button
              type="submit"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Gönder
            </button>
          </div>
        </form>

        {
          <div className="text-center">
            <p className="text-xl font-semibold">Son Yürütme:</p>
            <p className="text-xl text-gray-600 mt-2">{`${
              lastExec ? lastExec : "?"
            } -> Fonksiyonum -> ${result ? result : "?"}\n`}</p>
          </div>
        }
      </div>
    </div>
  );
};

export default App;
