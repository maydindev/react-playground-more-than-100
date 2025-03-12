import { useState, useRef, useEffect } from "react";
import React, { Fragment } from "react";
import sonnetsData from "./data/sonnetsData";
import Header from "./components/Header";
import "./styles.css";
import { Smokum } from "next/font/google";

export default function App() {
  const inputRef = useRef();
  const [searchInput, setSearchInput] = useState("");
  const [text,setText] = useState("")

  useEffect(()=>{
    setText("Henüz arama yapmadın.")
  },[])

  function handleClick() {
    setSearchInput(inputRef.current.value.trim());
    setText("Ne yazık ki, araman sonucunda hiçbir şey bulamadın.")
  }

  function handleGoToTop() {
    window.scrollTo({top:0,behavior:"smooth"})
  }

  const filteredSonnets = sonnetsData.filter((sonnet)=>
    sonnet.lines.some((line)=>
      line.toLowerCase().includes(searchInput.toLowerCase())
  ))

  return (
    <div className="wrapper">
      <Header searchProps={{ inputRef, handleClick }} />

      <div className="sonnets-container">
        {!searchInput || filteredSonnets.length === 0 ? (
          <p className="no-results-message">
            {text}
          </p>
        ) : (      
          /*sonnetsData
            .filter((sonnet) =>
              sonnet.lines.some((line) =>
                line.toLowerCase().includes(searchInput.toLowerCase())
              )
            )*/
              filteredSonnets.map((sonnet, index) => (
              <div key={index} className="sonnet">
                <h3 onClick={handleGoToTop} style={{cursor:"pointer"}}>{sonnet.number}</h3>
                {sonnet.lines.map((line, lineIndex) => (
                  <p key={lineIndex}>
                    {line.split(" ").map((word, wordIndex) => {
                      ///[\s.,!?;':]+/
                      //const regex = new RegExp(`\\b${word}\\b`, 'gi');
                      //const cleanWord = word.replace(/[.,!?;:]/g, '');
                      //const isMatch = regex.test(cleanWord) === searchInput.toLowerCase()
                      //const isMatch = word.toLowerCase() === searchInput.toLowerCase()
                      const isMatch = word
                        .toLowerCase()
                        .includes(searchInput.toLowerCase());
                      //const isMatch = /^[a-zA-Z]+$/.test(word) && /^[a-zA-Z]+$/.test(searchInput) && word.toLowerCase() === searchInput.toLowerCase();
                      return (
                        <Fragment key={wordIndex}>
                          {isMatch ? (
                            <>
                              <span>{word}</span>
                            </>
                          ) : (
                            word + " "
                          )}
                        </Fragment>
                      );
                    })}
                  </p>
                ))}
              </div>
            ))
        )}
      </div>
    </div>
  );
}

/* Challenge

  Kullanıcı " Arama " butonuna tıkladığında, input alanına yazdığı metin searchInput state'inin değeri olur (bu kod zaten yazılmıştı).    
    1. SonnetsData array'indeki satırlarından birinde searchInput değerini içeren her bir sonnet için "sonnets-container" div'inde className'i "sonnet" olan bir div oluşturun (satır 27). 
    
    2. "sonnet" div'inde, sonenin number özelliğini bir <h3> öğesinin metin içeriği olarak ekleyin ve ardından lines özelliğinden/dizisinden sonenin *her* satırını bir <p> öğesinin text içeriği olarak ekleyin, böylece sonenin her satırı için bir <p> elde edin. 
       
    3. "Love", "summer", "winter" ve "strange" gibi yaygın sözcüklerin yanı sıra "hello" ve "weird" gibi hiçbir sonede geçmeyen sözcükleri arayarak kodunuzu test edin.
*/

/*Bonus Challenges
      
    - Arama sonucu yoksa, "sonnets-container" div'inde "Ne yazık ki, araman sonucunda hiçbir şey bulamadın." yazan bir <p> öğesi oluşturun. <p> öğesine "no-results-message" şeklinde bir className verin. 
      
    - Sonuçlar varsa, sonedeki searchInput değeriyle eşleşen her kelimenin etrafına bir <span> koyun. Böylece kelime otomatik olarak vurgulanacaktır (CSS zaten ayarlanmıştır). 
*/
