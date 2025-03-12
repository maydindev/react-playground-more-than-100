import { setgroups } from "process";
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
      <GrowingButton />
    </div>
  );
}

const GrowingButton = () => {
  // KODUNUZ BURAYA GELECEK
  const [growing,setGrowing] = useState(true)
  //const [size,setSize] = useState(100)
  //const maxSize = 100
  //const minSize = 60

  const [width,setWidth] = useState(150)
  const [height, setHeight] = useState(80)

  const maxWidth = 150
  const minWidth = 80
  const maxHeight = 80
  const minHeight = 60

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWidth(prev => {
        if(growing) {
          return prev + 4 > maxWidth ? maxWidth : prev + 4
        } else {
          return prev - 4 < minWidth ? minWidth : prev - 4
        }
      })
      setHeight(prev => {
        if(growing) {
          return prev + 2 > maxHeight ? maxHeight : prev + 2
        } else {
          return prev - 2 < minHeight ? minHeight : prev - 2
        }
      })
    },30)
    return () => clearInterval(intervalId)
  },[growing])

  const handleClick = () => {
    setGrowing(!growing)
  }

  return (
    <button className="transition-all duration-100 border border-black bg-gray-200" style={{
      width: `${width}px`,
      height: `${height}px`,
    }} onClick={handleClick}>
      {growing ? "Küçült" : "Büyüt"}
    </button>
  )
};

export default App;
