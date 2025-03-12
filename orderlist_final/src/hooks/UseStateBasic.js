import { useState } from 'react'

const UseStateBasic = () => {
  const [text, setText] = useState('Engin')
  const handleClick = () => {
    if (text === 'Engin') {
      setText('Namık')
    } else {
      setText('Engin')
    }
  }
  return (
    <>
      <h1>{text}</h1>
      <button onClick={handleClick}>Başlığı değiştir</button>
    </>
  )
}
export default UseStateBasic
