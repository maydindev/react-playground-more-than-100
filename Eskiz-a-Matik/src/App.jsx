import { useState, useEffect } from 'react'
import './styles.css'
import examplePixels2 from './examples/examplePixels2'

export default function App() {
  const [pixels, setPixels] = useState([])
  const [mouseDown, setMouseDown] = useState(false)
  const [wantsToDraw, setWantsToDraw] = useState(true)
  const [resetRequested, setResetRequested] = useState(false)

  useEffect(() => {
    const initialPixels = new Array(3600)
      .fill('')
      .map(() => ({ id: crypto.randomUUID(), filled: false }))
    setPixels(initialPixels)
  }, [])

  function reset() {
    setResetRequested(true)
  }

  function togglePencil() {
    setWantsToDraw((pre) => !pre)
  }

  useEffect(() => {
    let timeoutOne
    let timeoutTwo

    if (resetRequested) {
      timeoutOne = setTimeout(() => {
        setPixels((prevPixels) =>
          prevPixels.map((pixel) => ({ ...pixel, filled: false }))
        )
      }, 1000)
    }

    if (resetRequested) {
      timeoutTwo = setTimeout(() => {
        setResetRequested(false)
      }, 1001)
    }

    return () => {
      clearTimeout(timeoutOne)
      clearTimeout(timeoutTwo)
    }
  }, [resetRequested])
  /* Challenge 
    
     1. Kullanıcının imleci "wrapper" div içinde herhangi bir yerde aşağı veya yukarı giderse, "mouseDown" state'i sırasıyla true veya false olarak ayarlanmalıdır. Başka bir deyişle:
     
            Kullanıcının mouse butonu     mouseDown =                      
            ╷---------------------╷---------------------╷                   
            |       aşağı         |        true         |
            |---------------------|---------------------|
            |      yukarı         |        false        |
            ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯    
     
     2. mouseDown true ise ve kullanıcının imleci "pixel" div'lerinden birine girerse, pixels state array'inde o div'e karşılık gelen pixel data nesnesinin "filled" özelliği "wantsToDraw" true ise true, "wantsToDraw" false ise false olarak ayarlanmalıdır. Başka bir deyişle, mouseDown === true && kullanıcının imleci pixel[n]'e karşılık gelen div'e girerse,
     
                  wantsToDraw         pixel[n].filled                     
            ╷---------------------╷---------------------╷                   
            |       true          |        true         |
            |---------------------|---------------------|
            |       false         |        false        |
            ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
     
     3. Bu ve diğer tüm piksel veri nesnelerinin diğer tüm özellikleri korunmalıdır. Başka bir deyişle, hedeflenen belirli piksel veri nesnesinin yalnızca "filled" özelliği değiştirilmelidir. Diğer her şey aynı kalmalıdır. 
        
    4. Yalnızca aşağıdaki koda ekleme yapmalısınız. Bu veya başka bir dosyada başka hiçbir şeyin değiştirilmesine gerek yok
*/

  const handleMouseDown = () => setMouseDown(true)
  const handleMouseUp = () => setMouseDown(false)

  const handleMouseEnter = (pixelId) => {
    if(mouseDown) {
      setPixels((prevPixels) => 
        prevPixels.map((pixel) => pixel.id === pixelId ? {...pixel, filled:wantsToDraw} : pixel)
      )
    }
  }

  const pixelElements = pixels.map((pixel) => (
    <div
      key={pixel.id}
      id={pixel.id}
      className={`pixel ${pixel.filled ? 'filled' : 'empty'}`}
      onMouseEnter={() => handleMouseEnter(pixel.id)}
    ></div>
  ))

  return (
    <div className='wrapper' onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <div
        className={`sketch-o-matic-container ${
          resetRequested && 'shake-horizontal'
        }`}
      >
        <h1>Eskiz-a-Matik</h1>
        <div
          className={`canvas ${wantsToDraw ? 'draw' : 'erase'} 
                               ${resetRequested && 'fade-out'}`}
        >
          {pixelElements}
        </div>
        <div className='button-container'>
          <button onClick={reset}>Reset</button>
          <button onClick={togglePencil}>{wantsToDraw ? 'Çiz' : 'Sil'}</button>
        </div>
      </div>
    </div>
  )
}
