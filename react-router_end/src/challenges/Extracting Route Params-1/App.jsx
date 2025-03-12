import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Product from './Product'

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products/1'>Product 1</Link>
          </li>
          <li>
            <Link to='/products/2'>Product 2</Link>
          </li>
          <li>
            <Link to='/products/3'>Product 3</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products/:id' element={<Product />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

/* <Product /> bileşenini güncelleyin ve paragraftaki X'i o anda oluşturmakta olduğumuz ürünün id'si ile değiştirin.
Örneğin, /products/1 öğesine tıklandığında <h2>Ürün</h2> <p>id: 1 olan ürünü açıklayın</p> olan ürünün açıklaması görüntülenmelidir.

Önce tanımlanmış rotalara baktığınızdan emin olun. */
