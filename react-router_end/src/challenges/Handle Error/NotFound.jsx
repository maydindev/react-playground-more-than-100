import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <h2>Sayfa bulunamadı</h2>
      <p>
        Sayfa bulunamadı. <Link to='/'>Ana sayfaya geri dön</Link>
      </p>
    </>
  )
}
