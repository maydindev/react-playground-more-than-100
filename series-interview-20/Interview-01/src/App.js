import { useState } from "react";
//import { json } from 'stream/consumers'

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: "Ücret karşılığında yolcu taşımak için lisanslı bir araç",
    food: {
      sushi:
        "Deniz ürünleri ve sebzelerle birlikte sunulan geleneksel bir Japon yemeği",
      apple: {
        Honeycrisp:
          "MAES Bahçe Araştırma Merkezi'nde geliştirilen bir elma çeşidi",
        Fuji: "Tohoku Araştırma İstasyonu'nda yetiştiriciler tarafından geliştirilen bir elma çeşidi",
      },
    },
  });

  return (
    <div style={{ margin: "auto", width: "70%", paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  );
}

const DisplayNested = ({ nestedObjected }) => {
  const renderObject = (nestedObjected) => {
    return Object.keys(nestedObjected).map((key) => {
      const value = nestedObjected[key];
      const isObject = typeof value === "object" && value !== null;

      return (
        <>
          <div key={key} style={{ marginLeft: 60 }}>
            {key}:{" "}
            {isObject ? (
              renderObject(value)
            ) : (
              <span>{value}</span>
            )}
          </div>
          <br />
        </>
      );
    });
  };

  return (
    // KODUNUZ BURAYA GELECEK
    <div>{renderObject(nestedObjected)}</div>
  );
};

export default App;
