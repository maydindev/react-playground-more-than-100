import { useState } from 'react'

const UseStateObject = () => {
  const [name, setName] = useState('Murat')
  const [age, setAge] = useState(37)
  const [text, setText] = useState('hello')

  const changeText = () => {
    setText('hello world')
  }
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{text}</h3>
      <button onClick={changeText}>Metni Değiştir</button>
    </>
  )
}
export default UseStateObject
