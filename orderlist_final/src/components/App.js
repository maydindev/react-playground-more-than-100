import { useEffect, useContext } from 'react'
import FoodCreate from './FoodCreate'
import FoodList from './FoodList'
import FoodsContext from '@/context/foods'

const App = () => {
  const { fetchFoods } = useContext(FoodsContext)
  useEffect(() => {
    fetchFoods()
  }, [])
  // BUNU YAPMAYIN
  // fetchFoods()

  return (
    <div className='app'>
      <FoodCreate />
      <FoodList />
    </div>
  )
}
export default App
