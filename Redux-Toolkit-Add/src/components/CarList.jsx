import { useSelector, useDispatch} from "react-redux"
import {del} from "../features/cars/carsSlice"



function CarList() {
  // Yapılacaklar: store'dan arabaları alın
  const carList = useSelector((state) => state.cars.list)
  const dispatch = useDispatch()
  const cars = carList
  //console.log(cars)

  const onClick = (car) => {
    // Yapılacak: Arabayı silin
    dispatch(del(car))
  }

  const renderedCars = cars.map((car, i) => {
    return (
      <div key={i} className='panel'>
        <p>
          {car.name} - ${car.value}
        </p>
        <button className='button' onClick={() => onClick(car)}>
          Sil
        </button>
      </div>
    )
  })

  return (
    <div className='car-list'>
      {renderedCars.length ? (
        renderedCars
      ) : (
        <div className='no-cars'>Başlamak için araba ekleyin</div>
      )}
    </div>
  )
}

export default CarList
