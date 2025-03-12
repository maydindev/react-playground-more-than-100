import { useState, useRef } from 'react'
import './styles.css'
import Header from './components/Header'
import FrontMessage from './components/FrontMessage'
import InnerMessage from './components/InnerMessage'

export default function App() {

  /* Challenge

	Kullanıcı kartın kapağına tıkladığında kart açılır ve kapanır, ancak kart şirketi daha sofistike bir kontrol yöntemi istiyor. Kullanıcının mouse ile parmağını kaydırmasını taklit eden bir yöntem. Göreviniz aşağıdaki gibi bir tane ayarlamaktır:
		
		1. "open" class'ı, 34. satırdaki className'i "cover" olan div'e yalnızca aşağıdaki koşulların tümü karşılandığında uygulanmalıdır: 
		   	
			   - Kullanıcı mouse butonunu "cover" div'inin içinde bir yerde basılı tutuyorsa.
			   
    		   - Mouse butonunu basılı tutmaya devam ederken, imleci basılı tutmaya başladığı yerin 50 piksel soluna hareket ettirir. 
		
		2. Kullanıcı daha sonra mouse'unu "cover" div'i açıkken aşağı doğru hareket ettirirse, "open" 
		   class'ı kaldırılmalı ve böylece kart kapatılmalıdır. 
		   
	Not: cardOpen state'ini, 33. satırdaki onClick olay işleyicisini ve 34. satırdaki "open" class'ının şu anda uygulanma şeklini değiştirmeniz veya düzenlemeniz gerekecektir. 
*/

  const [cardOpen, setCardOpen] = useState(false)
  const [startX,setStartX] = useState(null)
  const coverRef = useRef(null)

  const handleMouseDown = (event) => {
    // Record the initial X position when the mouse button is pressed
    setStartX(event.clientX)
  }

  const handleMouseMove = (event) => {
    // Check if the mouse is pressed and moved 50px to the left
    if (startX !== null && event.clientX < startX - 50) {
      setCardOpen(true)
    }
     // Close the card if it is open and the mouse is moving downward
    if (cardOpen && event.movementY > 0) {
      setCardOpen(false)
    }
  }

  const handleMouseUp = () => {
    // Reset the startX position when the mouse button is released
    setStartX(null)
  }

  return (
    <div className='wrapper'>
      <Header />
      <div className='card'>
        <InnerMessage />

        <div
        ref={coverRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
          /*onClick={() => setCardOpen((pre) => !pre)}
          className={`cover ${cardOpen && 'open'}`}*/
          className={`cover ${cardOpen ? "open" : ""}`}
        >
          <FrontMessage />
          <img src='./images/forLoop.png' />
        </div>
      </div>
    </div>
  )
}
