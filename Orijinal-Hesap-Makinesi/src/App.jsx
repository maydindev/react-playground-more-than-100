import './styles.css'
import { useState } from 'react'
import Buttons from './components/Buttons'
import Display from './components/Display'
import calculateResult from './utilities/calculateResult'
import getNum from './utilities/getNum'

export default function App() {
  const INITIAL_STATE = {
    currentNum: [],
    previousNum: [],
    operation: undefined,
    result: [],
  }

  const [currentCalc, setCurrentCalc] = useState(INITIAL_STATE)

  const { currentNum, previousNum, operation, result } = currentCalc

  const conditionOne =
    !currentNum[0] && !previousNum[0] && !operation && !result[0]
  const conditionTwo =
    currentNum[0] && !previousNum[0] && !operation && !result[0]
  const conditionThree =
    !currentNum[0] && previousNum[0] && operation && !result[0]
  const conditionFour =
    currentNum[0] && previousNum[0] && operation && !result[0]
  const conditionFive =
    currentNum[0] && previousNum[0] && operation && result[0]
  const conditionSix =
    !currentNum[0] && !previousNum[0] && operation && result[0]

  function handleClick(event) {
    const numFromClick = event.target.dataset.number
    const opFromClick = event.target.dataset.operation
    const otherFromClick = event.target.dataset.other
    const percentFromClick =
      otherFromClick === 'percent' ? otherFromClick : undefined
    const decimalFromClick =
      otherFromClick === 'decimal' ? otherFromClick : undefined
    const equalsFromClick =
      otherFromClick === 'equals' ? otherFromClick : undefined
    const negativeFromClick =
      otherFromClick === 'negative' ? otherFromClick : undefined
    const clearFromClick =
      otherFromClick === 'clear' ? otherFromClick : undefined
    const invalidEntry = checkForInvalidEntry(numFromClick)

    function checkForInvalidEntry() {
      if (
        numFromClick === '0' &&
        currentNum.length === 1 &&
        currentNum[0] === '0'
      ) {
        return true
      } else {
        if (
          currentNum.join('') === '0.' &&
          conditionTwo &&
          !numFromClick &&
          !clearFromClick
        ) {
          return true
        } else {
          return false
        }
      }
    }

    if (invalidEntry) {
      return
    }

    /* Challenge
    
  Sayı butonları çalışmıyor çünkü currentCalc state'i güncellemiyorlar. Göreviniz aşağıdakileri yaparak bunu düzeltmektir: 
  
      1. 86, 95 ve 104 numaralı satırlardaki üç görevi tamamlayın. Her görev, yukarıdaki 20. satırda tanımlanan altı koşuldan hangisinin doğru olduğuna bağlı olarak state'in belirli bir şekilde güncellenmesini içerir. 
         
      2. Hesap makinesini gerçek bir kullanıcının kullanabileceği çeşitli şekillerde kullanarak test edin. Tam olarak test etmek için altı koşulun her birini yeniden oluşturmaya çalışın 
  
Hesap makinesinin çalışmasını sağlamak için *sadece* aşağıdaki üç görevi tamamlamanız ve her görev için *sadece* geçerli currentCalc state'ini güncellemeniz gerekir! */

    if (numFromClick) {
      if (conditionOne || conditionTwo || conditionThree || conditionFour) {
        /* Görev 1/3 - Bir Sayı Oluşturma */
  
      /* a. numFromClick değeri, currentCalc'ın currentNum array'inin sonuna eklenmeli ve array'de zaten kayıtlı olan değerler korunmalıdır. */

      /* b. currentCalc'ın diğer tüm özellikleri korunmalıdır. */

      setCurrentCalc((prevCalc) => ({
        ...prevCalc, 
        currentNum: [...prevCalc.currentNum, numFromClick]
      }))
              
/*---------------Aşağıdaki 1. görev için kodunuzu yazın.------------------------------------------------*/
        /*-------------Yukarıdaki 1. görev için kodunuzu yazın.------------------------------------------------*/
      } else if (conditionFive) {
        /* Görev 2/3 - Yeni Bir Hesaplama Başlatmak*/
            
      /* a. numFromClick değeri currentCalc'ın currentNum array'ine eklenmelidir. Dizideki önceki değerler *korunmamalıdır* - numFromClick değeri dizideki *tek* değer haline gelmelidir. */

      /*b. currentCalc'ın diğer tüm özellikleri, b INITIAL_STATE (yukarıdaki 9. satır) içinde kaydedilen ilk değerlerine geri döndürülmelidir.*/

      setCurrentCalc({
        currentNum: [numFromClick],
        previousNum: [],
        operation: undefined,
        result: [],
      })
             
/*---------------Aşağıdaki 2. görev için kodunuzu yazın.------------------------------------------------*/
        /*-------------Yukarıdaki 2. görev için kodunuzu yazın.------------------------------------------------*/
      } else if (conditionSix) {
        /* Görev 3/3 - Hesaplamaya Devam Etme */
            
      /* a. currentCalc'ın sonuç array'ine kaydedilen değer, boş previousNum array'ine eklenmeli ve sonuç array'i boş hale getirilmelidir. Başka bir deyişle:
                      
          Önce: previousNum: []
                      result: [someValue]
                      
        Sonra:   previousNum: [someValue]
                      result: []
                        
      b. numFromClick değeri boş currentNum array'ine kaydedilmelidir. 
                
      c. operation değeri (bir string) korunmalıdır. */

      setCurrentCalc((prevCalc) => ({
        currentNum: [numFromClick],
        previousNum: prevCalc.result,
        operation: prevCalc.operation,
        result: [],
      }))
                       
/*---------------Aşağıdaki 3. görev için kodunuzu yazın.------------------------------------------------*/
        /*-------------Yukarıdaki 3. görev için kodunuzu yazın.------------------------------------------------*/
      }
    } else if (opFromClick) {
      /* 🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨 SPOILER UYARISI 🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨   
        
        
        
        
        Spoilerlardan kaçınmak için aşağı kaydırmayın. 

        Alternatif olarak, eğer çok zorlanıyorsanız, aşağı kaydırmayı düşünün. Sonraki kod satırlarının çoğu yukarıda yazmanız gerekenlere benzerdir.  
        
        
      
        
 🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨 SPOILER UYARISI 🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨 🚨 */

      if (conditionTwo) {
        setCurrentCalc((prevCalc) => ({
          currentNum: [],
          previousNum: prevCalc.currentNum,
          operation: opFromClick,
          result: [],
        }))
      } else if (conditionThree || conditionSix) {
        setCurrentCalc((prevCalc) => ({
          ...prevCalc,
          operation: opFromClick,
        }))
      } else if (conditionFour) {
        setCurrentCalc((prevCalc) => ({
          currentNum: [],
          previousNum: [],
          result: calculateResult(prevCalc).split(''),
          operation: opFromClick,
        }))
      } else if (conditionFive) {
        setCurrentCalc((prevCalc) => ({
          previousNum: prevCalc.result,
          operation: opFromClick,
          currentNum: [],
          result: [],
        }))
      }
    } else if (equalsFromClick) {
      if (conditionThree) {
        setCurrentCalc((prevCalc) => ({
          ...prevCalc,
          currentNum: previousNum,
          result: calculateResult(prevCalc).split(''),
        }))
      } else if (conditionFour || conditionFive || conditionSix) {
        setCurrentCalc((prevCalc) => ({
          ...prevCalc,
          result: calculateResult(prevCalc).split(''),
        }))
      }
    } else if (percentFromClick) {
      if (conditionTwo || conditionFour) {
        setCurrentCalc((prevCalc) => ({
          ...prevCalc,
          currentNum: (getNum(prevCalc.currentNum) / 100).toString().split(''),
        }))
      } else if (conditionFive) {
        setCurrentCalc((prevCalc) => ({
          ...INITIAL_STATE,
          currentNum: (getNum(prevCalc.result) / 100).toString().split(''),
        }))
      }
    } else if (negativeFromClick) {
      if (conditionTwo || conditionFour) {
        setCurrentCalc((prevCalc) => ({
          ...prevCalc,
          currentNum: (getNum(prevCalc.currentNum) * -1).toString().split(''),
        }))
      } else if (conditionFive) {
        setCurrentCalc((prevCalc) => ({
          ...prevCalc,
          result: (getNum(prevCalc.result) * -1).toString().split(''),
        }))
      }
    } else if (decimalFromClick) {
      if (conditionOne || conditionThree) {
        setCurrentCalc((prevCalc) => ({
          ...prevCalc,
          currentNum: ['0', '.'],
        }))
      } else if (
        !currentNum.includes('.') &&
        (conditionTwo || conditionThree || conditionFour || conditionSix)
      ) {
        setCurrentCalc((prevCalc) => ({
          ...prevCalc,
          currentNum: [...prevCalc.currentNum, '.'],
        }))
      } else if (conditionFive) {
        setCurrentCalc({
          ...INITIAL_STATE,
          currentNum: ['0', '.'],
        })
      }
    } else if (clearFromClick) {
      if (conditionFive) {
        setCurrentCalc((prevCalc) => ({
          ...INITIAL_STATE,
          currentNum: prevCalc.result,
        }))
      } else if (conditionTwo || conditionSix) {
        setCurrentCalc(INITIAL_STATE)
      } else if (conditionThree) {
        setCurrentCalc((prevCalc) => ({
          currentNum: prevCalc.previousNum,
          previousNum: [],
          result: [],
          operation: undefined,
        }))
      } else if (conditionFour) {
        if (currentNum.length != 0) {
          setCurrentCalc((prevCalc) => ({
            ...prevCalc,
            currentNum: [],
          }))
        } else {
          setCurrentCalc(INITIAL_STATE)
        }
      }
    } else {
      setCurrentCalc(INITIAL_STATE)
    }
  }

  function getClearOption() {
    if (
      conditionOne ||
      conditionSix ||
      (conditionFour && currentNum.length === 0)
    ) {
      return 'AC'
    } else {
      return 'C'
    }
  }

  const buttonData = {
    operation: currentCalc.operation,
    clearOption: getClearOption(),
  }

  return (
    <div className='calculator-container'>
      <Display currentCalc={currentCalc} />
      <Buttons handleClick={handleClick} buttonData={buttonData} />
    </div>
  )
}
