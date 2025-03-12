import React, { useEffect, useState, useRef } from "react";

function App() {
  // KODUNUZ BURAYA GELECEK
  const [inputValue, setInputValue] = useState("");
  const [wordList, setWordList] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleClickOutsideModal = (e) => {
      if (selectedWord && e.target.className === "modal-overlay") {
        closeModal();
      }
    };
    window.addEventListener("click", handleClickOutsideModal);
    return () => {
      window.removeEventListener("click", handleClickOutsideModal);
    };
  }, [selectedWord]);

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDownInput = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setWordList([...wordList, inputValue]);
      setInputValue("");
    }
  };

  const handleWordClick = (word) => {
    const rect = event.target.getBoundingClientRect();
    setModalPosition({ top: rect.bottom, left: rect.left });
    setSelectedWord(word);
  };

  const closeModal = () => {
    setSelectedWord(null);
  };

  return (
    <div className=" flex flex-col items-center justify-center p-20">
      <div>
        <input
          type="text"
          placeholder="Kelime yazın ve enter tuşuna basın."
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            color: "black",
            width: "300px",
            borderColor: "black",  // Kenarlık rengi
            borderWidth: "1px",   // Kenarlık kalınlığı
            borderStyle: "solid", // Kenarlık stili
            padding: "1px 2px", // İç boşluk
            borderRadius: "5px",  // Kenarlık köşe yuvarlaklığı
          }}
          value={inputValue}
          onChange={handleChangeInput}
          onKeyDown={handleKeyDownInput}
        />
      </div>
      <div>
        <ul>
          {wordList.map((word, index) => {
            return (
              <li
                key={index}
                onClick={() => handleWordClick(word)}
                style={{ cursor: "pointer", margin: "5px 0" }}
              >
                {word.length < 6 ? word : `${word.slice(0, 5)}...`}
              </li>
            );
          })}
        </ul>
      </div>
      {selectedWord && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            /*top: 0,*/
            top: modalPosition.top,
            left: 0,
            width: "100%",
            /*height: "100%",*/
            height: `calc(100vh - ${modalPosition.top}px)`,
            //backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "20px",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              /*maxWidth:"80%"*/
              width: "90%",
              height: "100%",
              textAlign: "center",
            }}
          >
            <p>{`Full text: "${selectedWord}"`}</p>
            <br />
            <div>
              <button
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  color: "black",
                  width: "80px",
                }}
                onClick={closeModal}
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
