import CarForm from './components/CarForm'
import CarList from './components/CarList'

export default function App() {
  return (
    <div className='container'>
      <CarForm />
      <h3 className='title'>Arabalarım</h3>
      <CarList />
    </div>
  )
}
