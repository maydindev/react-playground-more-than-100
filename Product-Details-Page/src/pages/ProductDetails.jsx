import { useState,useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import useFetch from '../utilities/useFetch'
import Loader from './Loader'


export default function ProductDetails() {
  const [product, setProduct] = useState({})
  const {id} = useParams() // Url'deki id'yi yakaladık.
  console.log(id)
  const {get,loading} = useFetch('https://router-12f10-default-rtdb.europe-west1.firebasedatabase.app/')

  useEffect(() => {
    get(`productdetails/id${id}.json`) // Doğru id yi endpointe ekledik.
    .then((data) => setProduct(data))
    .catch((error) => console.log(error))
  },[id])

  //Link ile ana sayfaya geri dönüyoruz.
  return (
    <div>
      <Link to="/" style={{ color: 'green', textDecoration: "none", fontSize: "18px" }}>Back home</Link>
      {loading ? (<Loader/>) : 
      (product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <img src={product.image} width='100' />
        </div>
      )
      )}
    </div>
  )
}
