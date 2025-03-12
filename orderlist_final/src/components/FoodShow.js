import { useState, useContext } from 'react'

import FoodEdit from './FoodEdit'
import FoodsContext from '@/context/foods'

const FoodShow = ({ food }) => {
  const [showEdit, setShowEdit] = useState(false)
  const { deleteFoodById } = useContext(FoodsContext)
  const handleSubmit = (id, newTitle) => {
    setShowEdit(false)
  }

  const handleEditClick = () => {
    setShowEdit((pre) => !pre)
  }

  const handleDeleteClick = () => {
    deleteFoodById(food.id)
  }
  let content = showEdit ? (
    <FoodEdit onSubmit={handleSubmit} food={food} />
  ) : (
    <h3>{food.title}</h3>
  )
  return (
    <div className='food-show'>
      <div
        className='food-background'
        style={{
          backgroundImage: `url(https://picsum.photos/seed/${food.id}/200/300)`,
        }}
      ></div>
      <div className='food-content'>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
}
export default FoodShow
