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
          <Route path='/products' element={<Product />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

// Sizlere 4 bağlantı sağladık:

// Homepage => /
// id 1 olan bir ürün => /products/1
// id 2 olan bir ürün => /products/2
// id 3 olan bir ürün => /products/3
// Ürünlerden herhangi birine tıklandığında tam olarak <Product /> bileşenini oluşturacak şekilde yönlendirmeleri güncelleyin. Henüz ürün id'si ile uğraşmayacaksınız, şimdilik tüm rotalar aynı bileşeni oluşturacak.
