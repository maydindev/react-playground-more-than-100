import { useContext } from 'react'
import FoodShow from './FoodShow'
import FoodContext from '@/context/foods'

const FoodList = () => {
  const { foods } = useContext(FoodContext)
  const renderedFoods = foods.map((food) => {
    return <FoodShow key={food.id} food={food} />
  })
  return <div className='food-list'>{renderedFoods}</div>
}
export default FoodList
