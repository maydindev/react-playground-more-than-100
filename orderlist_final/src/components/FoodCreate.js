import FoodsContext from '@/context/foods'
import { useState, useContext } from 'react'

const FoodCreate = () => {
  const [title, setTitle] = useState('')
  const { createFood } = useContext(FoodsContext)
  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    createFood(title)
    setTitle('')
  }
  return (
    <div className='food-create'>
      <h3>Sipariş Listesi</h3>
      <form onSubmit={handleSubmit}>
        <input
          className='input'
          type='text'
          value={title}
          onChange={handleChange}
        />
        <button className='button'>Submit</button>
      </form>
    </div>
  )
}
export default FoodCreate
