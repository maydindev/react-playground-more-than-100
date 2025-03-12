import React, { useState } from "react";

const BUNNY =
  "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function App() {
  return <BuggyButtons />;
}

const BuggyButtons = () => {
  const [openCount, setOpenCount] = useState(0);
  const IDs = [1, 2, 3, 4, 5];

  const handleIncreaseCount = () => {
    setOpenCount((prev) => prev + 1);
  };

  const handleDecreaseCount = () => {
    setOpenCount((prev) => prev - 1);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          {
            //return yoktu, eklendi.
            IDs.map((item) => {
              return (
                <div
                  key={item}
                  style={{
                    marginRight: 10,
                  }}
                  id={item}
                >
                  <BuggyButton /*openCount={openCount} 
              setOpenCount={setOpenCount}*/
                    //state set fonksiyonu bu şekilde geçirmek uygun olmadığından set üst bileşende fonksiyon yapılıp prop olarak aşağıya geçirildi.
                    onIncreaseCount={handleIncreaseCount}
                    onDecreaseCount={handleDecreaseCount}
                  />
                </div>
              );
            })
          }
        </div>
        <div style={{ alignSelf: "center", marginTop: 20 }}>
          {openCount + " açık tavşan "}
        </div>
      </div>
    </>
  );
};

//Bileşen parametresinde süslü parantez yoktu, eklendi.
const BuggyButton = ({
  /*openCount, setOpenCount*/ onIncreaseCount,
  onDecreaseCount,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <img
      alt="bunny"
      src={BUNNY}
      height={300}
      width={200}
      onClick={() => {
        //setOpenCount((p) => p - 1);
        onDecreaseCount();
        setIsOpen(false);
      }}
    />
  ) : (
    <button
      onClick={() => {
        //setOpenCount((p) => p + 1);
        onIncreaseCount();
        setIsOpen(true);
      }}
      style={{
        backgroundColor: "#D3D3D3",
        borderRadius: "2px",
        border: "1px solid black",
        margin: "3px",
        padding: "3px",
      }}
    >
      TAVŞAN AÇ
    </button>
  );
};

export default App;
