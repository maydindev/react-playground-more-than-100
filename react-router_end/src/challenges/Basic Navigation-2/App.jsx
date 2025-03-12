import { BrowserRouter, Link } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/team'>Team</Link>
          </li>
        </ul>
      </nav>

      <main>{/* TODO: URL'ye göre doğru bileşeni oluştur */}</main>
    </BrowserRouter>
  )
}

// React Router kullanarak, kullanıcı ana sayfadayken (URL /'dir) <Home /> bileşenini, kullanıcı /team adresine gittiğinde <Team /> bileşenini ve kullanıcı /products adresine gittiğinde <Products /> bileşenini render edin.
// Bu bileşenler <main></main> elementinin içinde oluşturulmalıdır.
