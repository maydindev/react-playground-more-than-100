import React, { useState, useEffect, useRef } from "react";
import TextInput from "./TextInput";
import TextDisplay from "./TextDisplay";

const WordByWord = () => {
  // KODUNUZ BURAYA GELECEK
  const [textInput, setTextInput] = useState("");
  const [textDisplay, setTextDisplay] = useState("");
  const [words,setWords] = useState([])
  const [wordIndex,setWordIndex] = useState(1)

  const handleChangeInput = (e) => {
    setTextInput(e.target.value);
  };

  useEffect(() => {
    setWords(textInput.split(" "))

    setWordIndex(0)
  },[textInput])

  useEffect(() => {
    if(words.length === 0) return 
    const intervalId = setInterval(() => {
      setTextDisplay((prev) => words.slice(0,wordIndex).join(" "))
      setWordIndex((prev) => prev + 1)
      if(wordIndex >= words.length) {
        clearInterval(intervalId)
      }
    },500)
    return () => clearInterval(intervalId)
  },[wordIndex])

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <TextInput textInput={textInput} onChangeInput={handleChangeInput} />
        <TextDisplay textDisplay={textDisplay} />
      </div>
    </div>
  );
};

export default WordByWord;
