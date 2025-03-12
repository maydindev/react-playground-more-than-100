import "./styles.css";
import { useState, useEffect } from "react";
import showState from "./utilities/showState";
import NextQuoteButton from "./components/NextQuoteButton";
import imageData from "./data/imageData";
import quoteData from "./data/quoteData";

export default function App() {
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    hydrateData();
  }, []);

  function hydrateData() {
    if (!currentData) {
      setCurrentData(getNextData());
    }
  }

  function getNextData() {
    return {
      text: getRandomItem(quoteData),
      image: getRandomItem(imageData),
    };
  }

  function getRandomItem(targetObject) {
    checkArray(targetObject);
    const targetArray = targetObject.availableItems;
    const length = targetArray.length;
    const randomIndex = Math.floor(Math.random() * length);
    const targetItem = targetArray[randomIndex];
    targetArray.splice(randomIndex, 1);
    targetObject.usedItems.push(targetItem);
    return targetItem;
  }

  function getNextQuote() {
    setCurrentData(getNextData());
  }

  function checkArray(targetObject) {
    if (targetObject.availableItems.length === 0) {
      targetObject.availableItems = [...targetObject.usedItems];
      targetObject.usedItems = [];
    }
  }

  /* getSmallestFontSize fonksiyonu nasıl kullanılır:
    
        Font size ile ilgili veriler string olarak saklanır: örneğin, "30px" ve "20px". Bu tür verilere sahip iki nesneyi bu fonksiyona argüman olarak girerseniz, fonksiyon en küçük yazı tipine sahip nesneyi döndürür. Fonksiyon, değerlerden birinin ya da her ikisinin de undefined olmasıyla ilgilenmez. Bu durumlardan herhangi birini işleyebilir Örneğin:
        
            const fontSizeOne = {fontSize: "30px"}
            const fontSizeTwo = {fontSize: "20px"}
            getSmallestFontSize(fontSizeOne, fontSizeTwo) //returns {fontSize: "20px"}. 
        
            ------
      
            const fontSizeThree = {fontSize: "25px"}
            const fontSizeFour = undefined 
            getSmallestFontSize(fontSizeThree, fontSizeFour) //returns {fontSize: "25px"}. 
            
            ------

            const fontSizeFive = undefined
            const fontSizeSix = undefined 
            getSmallestFontSize(fontSizeThree, fontSizeFour)  //returns undefined  
*/

  function getSmallestFontSize(fontObjectOne, fontObjectTwo) {
    const fontSizeOneString = fontObjectOne && fontObjectOne.fontSize;
    const fontSizeTwoString = fontObjectTwo && fontObjectTwo.fontSize;

    if (!fontSizeOneString && !fontSizeTwoString) {
      return undefined;
    } else if (fontSizeOneString && !fontSizeTwoString) {
      return fontObjectOne;
    } else if (!fontSizeOneString && fontSizeTwoString) {
      return fontObjectTwo;
    }

    const fontSizeOneNum = getNumber(fontSizeOneString);
    const fontSizeTwoNum = getNumber(fontSizeTwoString);

    function getNumber(fontSizeString) {
      return +fontSizeString.slice(0, -2);
    }

    return fontSizeOneNum < fontSizeTwoNum ? fontObjectOne : fontObjectTwo;
  }
  /* Challenge 
        
    Geçerli resim ve metin çifti için stiller currentData state'i içinde bulunur, ancak bunlar ilgili JSX öğelerine uygulanmaz. Göreviniz bunu aşağıdaki gibi düzeltmektir:
        
      1. currentData'nın görüntü nesnesindeki wrapperStyles, className "wrapper" ile <div>'e uygulanmalıdır.
         
        2. currentData'nın görüntü nesnesindeki containerStyles, className "quote-container" ile <div>'e uygulanmalıdır. 
        
        3. Ya image.quoteFontSize ya da text.quoteFontSize hangisi ( varsa) içeriyorsa  en küçük font boyutu, className'i "quote" olan <p>'ye uygulanmalıdır. Bunu yapmak için, bu dosyanın 60. satırındaki getSmallestFontSize() fonksiyonunu kullanabilirsiniz. Nasıl kullanılacağı hakkında bilgi için fonksiyonun üzerindeki yoruma bakın. 
        
     İpucu: currentData state'ini görmek ve içeriğine ve yapısına alışmak için bu bileşenin üst seviyesinde herhangi bir yerde showState(currentData) komutunu çağırın. 
*/

//showState(currentData)

  return (
    <div className="wrapper" style={currentData?.image.wrapperStyles}>
      {currentData && (
        <div className="quote-container" style={currentData.image.containerStyles}>
          <p className="quote" style={getSmallestFontSize(currentData.image.quoteFontSize,currentData.text.quoteFontSize)}>
            {currentData.text.fakeQuote}
            <span className="source">-{currentData.text.fakeSource}</span>
          </p>
        </div>
      )}
      <NextQuoteButton clickHandler={getNextQuote} />
    </div>
  );
}
