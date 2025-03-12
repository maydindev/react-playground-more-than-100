import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice'
import './index.css'

export default function App() {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <h1>Redux Toolkit</h1>
      <h2>README kısmını okuyunuz</h2>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}
