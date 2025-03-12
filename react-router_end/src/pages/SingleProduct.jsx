import { Link, useParams } from 'react-router-dom'
import products from '../data'
const SingleProduct = () => {
  const { productId } = useParams()
  const product = products.find((product) => product.id === productId)
  const { image, name } = product
  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <Link to='/products'>Products</Link>
    </section>
  )
}

export default SingleProduct
