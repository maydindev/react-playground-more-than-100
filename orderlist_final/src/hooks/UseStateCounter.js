import { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const handleUpdate = () => {
    setValue((pre) => pre + 1)
  }
  const reset = () => {
    setValue(0)
  }
  const increase = () => {
    setTimeout(() => {
      setValue((p) => {
        return p + 1
      })
    }, 2000)
  }
  return (
    <>
      <section style={{ margin: '4rem 0 ' }}>
        <h2>Counter</h2>
        <h2>{value}</h2>
        <button onClick={() => setValue((pre) => pre - 1)}>-</button>
        <button onClick={reset}>reset</button>
        <button onClick={handleUpdate}>+</button>
      </section>
      <section style={{ margin: '4rem 0 ' }}>
        <h2>Counter 2</h2>
        <h2>{value}</h2>
        <button onClick={increase}>⏳</button>
      </section>
    </>
  )
}
export default UseStateCounter
