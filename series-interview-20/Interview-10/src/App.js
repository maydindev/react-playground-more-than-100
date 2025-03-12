import { parseSetCookie } from "next/dist/compiled/@edge-runtime/cookies";
import React, { useState } from "react";

const ONE =
  "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const TWO =
  "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const THREE =
  "https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FOUR =
  "https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FIVE =
  "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const SIX =
  "https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const images = [ONE, TWO, THREE, FOUR, FIVE, SIX];

function App() {
  return <Captcha />;
}

const Captcha = () => {
  // KODUNUZ BURAYA GELECEK
  const [showModal, setShowModal] = useState(false);
  const [correctIndex, setCorrectIndex] = useState(null);

  const generateImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCorrectIndex(randomIndex);
    setShowModal(true);
  };

  const handleClickImage = (index) => {
    if (index === correctIndex) {
      alert("Doğru resmi seçtiniz.");
      setShowModal(false);
    } else {
      alert("Yanlış resmi seçtiniz. Tekrar deneyin.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={generateImage}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        CAPTCHA Testini Başlat
      </button>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <p className="text-lg font-bold mb-4">{correctIndex + 1} seçiniz</p>
            <div className="grid grid-cols-3 gap-1">
              {images.map((image, index) => (
                <img
                  onClick={() => handleClickImage(index)}
                  key={index}
                  src={image}
                  alt={`Resim ${index + 1}`}
                  className="w-32 h-32 object-cover cursor-pointer hover:scale-105 transform transition"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
