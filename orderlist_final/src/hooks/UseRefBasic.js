import { useRef, useEffect } from 'react'

const UseRefBasic = () => {
  const refContainer = useRef(null)
  const divContainer = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(refContainer.current.value)
    // console.log(divContainer.current)
  }
  useEffect(() => {
    console.log(refContainer.current)
    refContainer.current.focus()
  })
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
        </div>
        <button type='submit'>Submit</button>
      </form>
      <div ref={divContainer}>Hello World</div>
    </>
  )
}
export default UseRefBasic
