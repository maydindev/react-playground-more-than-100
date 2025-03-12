import React, { useState } from "react";

function App() {
  const unlockedScreen = () => (
    <div style={{ textAlign: "center" }}>Login oldunuz.</div>
  );

  return (
    <CombinationLock combination={[1, 2, 3, 4]} NextScreen={unlockedScreen} />
  );
}

const CombinationLock = ({ combination, NextScreen }) => {
  const [entry, setEntry] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleClickNumber = (number) => {
    const newEntry = entry + number;
    setEntry(newEntry);

    if (newEntry.length === 4) {
      if (newEntry === combination.join("")) {
        setIsUnlocked(true);
      } else {
        alert("Yanlış kombinasyon");
        setEntry("");
      }
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "10px" }}>
        {isUnlocked ? (
          <NextScreen />
        ) : (
          <div
            style={{
              fontSize: "60px",
              border: "1px solid black",
              width: "316px",
              height: "100px",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            {entry}
          </div>
        )}
      </div>

      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",

          gridTemplateColumns: "repeat(3,100px)",
          gap: "7px",
        }}
      >
        {!isUnlocked &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <button
              key={number}
              onClick={() => handleClickNumber(number)}
              style={{
                width: "100px",
                height: "100px",
                fontSize: "32px",
                cursor: "pointer",
                border: "1px solid black",
                margin: "1px",
                padding: "1px",
                backgroundColor: "lightgrey",
              }}
            >
              {number}
            </button>
          ))}
        {!isUnlocked && (
          <button
            onClick={() => onClickNumber(0)}
            style={{
              width: "100px",
              height: "100px",
              fontSize: "32px",
              cursor: "pointer",
              border: "1px solid black",
              margin: "1px",
              padding: "1px",
              backgroundColor: "lightgrey",
              gridColumn: "2/3",
            }}
          >
            0
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
