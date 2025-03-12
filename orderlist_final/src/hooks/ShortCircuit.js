import { useState } from 'react'

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)

  return (
    <>
      <button onClick={() => setIsError((s) => !s)}>Toggle Error</button>
      {!isError && <h1>Error..</h1>}
      {isError ? (
        <p>Hata var...</p>
      ) : (
        <div>
          <h2>Hata Yok</h2>
        </div>
      )}
    </>
  )
}
export default ShortCircuit
