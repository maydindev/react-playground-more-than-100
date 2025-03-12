import axios from 'axios'
import { createContext, useState } from 'react'

const FoodsContext = createContext()

function AppProvider({ children }) {
  const [foods, setFoods] = useState([])

  const fetchFoods = async () => {
    const response = await axios.get('http://localhost:3001/foods')
    setFoods(response.data)
  }

  const editFoodById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/foods/${id}`, {
      title: newTitle,
    })
    console.log(response)
    const updatedFoods = foods.map((food) => {
      if (food.id === id) {
        return { ...food, ...response.data }
      }
      return food
    })
    setFoods(updatedFoods)
  }

  const deleteFoodById = async (id) => {
    await axios.delete(`http://localhost:3001/foods/${id}`)
    const updatedFoods = foods.filter((food) => {
      return food.id !== id
    })
    setFoods(updatedFoods)
  }

  const createFood = async (title) => {
    const response = await axios.post('http://localhost:3001/foods', {
      title,
    })
    const updatedFoods = [...foods, response.data]
    setFoods(updatedFoods)
  }

  const valuToShare = {
    foods,
    deleteFoodById,
    editFoodById,
    createFood,
    fetchFoods,
  }

  return (
    <FoodsContext.Provider value={valuToShare}>
      {children}
    </FoodsContext.Provider>
  )
}

export { AppProvider }
export default FoodsContext
