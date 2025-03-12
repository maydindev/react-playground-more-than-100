import { useEffect, useState } from 'react'

const UseEffectBasic = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('useEffect çağırın')
    if (value > 1) {
      document.title = `Yeni Mesajlar(${value})`
    }
  }, [value])

  console.log('Bileşen işlendi/render')
  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue((p) => p + 1)}>Tıklayın</button>
    </>
  )
}
export default UseEffectBasic
