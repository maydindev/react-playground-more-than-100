import FoodsContext from '@/context/foods'
import { useState, useContext } from 'react'

const FoodEdit = ({ food, onSubmit }) => {
  const { editFoodById } = useContext(FoodsContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()
    editFoodById(food.id, title)
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  const [title, setTitle] = useState(food.title)
  return (
    <form className='food-edit' onSubmit={handleSubmit}>
      <input value={title} className='input' onChange={handleChange} />
      <button className='button'>Save</button>
    </form>
  )
}
export default FoodEdit
