import './styles.css'
import { useState, useEffect } from 'react'
import Thermometer from './components/Thermometer'
import Header from './components/Header'

export default function App() {
  const [timeCount, setTimeCount] = useState(0)
  const timeToDisplay = (timeCount / 100).toFixed(2)

  /*------ Eksik state'leri aşağıya ekleyin----------------------------*/

  const [cursorInButton,setCursorInButton] = useState(false)
  const [buttonHeldDown,setButtonHeldDown] = useState(false)

  /*------Yukarıdaya eksik state'leri ekleyin----------------------------*/

  const buttonClass = !timeCount ? 'outsideButton' : undefined

  /* Challenge

	Bu sanal eğlence parkı oyunu, korkunç bir bilgisayar korsanı iki state'ini ve dört event handler'ını sildiği için bozuldu. Sizin göreviniz aşağıdakileri yaparak oyunu düzeltmek: 
	
		1. Kullanıcının imleci "Basılı Tut" butonunun içine girerse ve mouse butonuna basarsa, eksik olan iki state'in değerleri buna göre değişmelidir. Bu durum değişiklikleri gerçekleşirse, aşağıdaki try bloğunun useEffect'indeki mevcut kod, zamanlayıcı ve termometrenin yükselmeye başlamasını sağlamalıdır.
		   
		2. Kullanıcının imleci butondan çıkarsa veya mouse butonunu bırakırsa, iki eksik state'in değerleri buna göre değişmelidir.
		   
		3. Tüm bunlar, eksik olay işleyicileri tarafından tetiklenen eksik state değerlerindeki değişiklikler yoluyla gerçekleştirilmelidir. Bu eksik state'ler ve olay işleyicilerinin yanında herhangi bir kodu SİLMEMELİ, eklememeli veya değiştirmemelisiniz. Bunu doğru şekilde yaparsanız aşağıdaki try bloğu ve useEffect zaten yazılmış oldukları için mükemmel şekilde çalışacaktır. 
		   
		Bonus Challenge: Dört olayın tamamını sadece iki - hatta sadece bir - fonksiyonla halledip halledemeyeceğinizi deneyin
*/

  try {
    useEffect(() => {
      let interval
      if (cursorInButton && buttonHeldDown) {
        interval = setInterval(() => {
          setTimeCount((timeCount) => timeCount + 1)
        }, 10)
      }
      return () => {
        setTimeCount(0)
        if (buttonHeldDown && !cursorInButton) {
          setButtonHeldDown(false)
        }
        clearInterval(interval)
      }
    }, [cursorInButton, buttonHeldDown])
  } catch {
    console.log(
      `AHAHAHA, uygulamanız hacklendi. İki state'inizi ve dört event handler'ınızı sildim. Onları yakalayabilir misin, bulmaya çalış 😜`
    )
  }

  /*------Aşağıya olay işleyicilerini ekleyin----------------------------*/
  /*
  const handleCursorInButton = () => {
    setCursorInButton(true)
  }

  const handleCursorOutButton = () => {
    setCursorInButton(false)
  }

  const handleClickDownInButton = () => {
    setButtonHeldDown(true)
  }

  const handleClickUpInButton = () => {
    setButtonHeldDown(false)
  }
  */

  const handleButtonInteraction = (type) => {
    if(type === "enter") setCursorInButton(true)
    if(type === "leave") setCursorInButton(false)
    if(type === "down") setButtonHeldDown(true)
    if(type === "up") setButtonHeldDown(false)
  }

  return (
    <div className='wrapper'>
      <Header time={+timeToDisplay} />
      <Thermometer time={+timeToDisplay} />
      <button 
        /*onMouseDown={handleClickDownInButton} 
        onMouseUp={handleClickUpInButton} 
        onMouseEnter={handleCursorInButton} 
        onMouseLeave={handleCursorOutButton}*/ 
        onMouseDown={() => handleButtonInteraction("down")} 
        onMouseUp={() => handleButtonInteraction("up")} 
        onMouseEnter={() => handleButtonInteraction("enter")} 
        onMouseLeave={() => handleButtonInteraction("leave")}
        className={buttonClass}>Basılı Tut</button>
      <p className='time'>{timeToDisplay} saniye </p>
    </div>
  )
}
