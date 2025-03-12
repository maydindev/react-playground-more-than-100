import { useFetch } from './UseFetch'

const url = 'https://fakestoreapi.com/products'

const CustomHooks = () => {
  const { loading, products } = useFetch(url)
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}
export default CustomHooks
