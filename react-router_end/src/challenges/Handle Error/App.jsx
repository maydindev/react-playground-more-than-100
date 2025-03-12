import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './Home'
import Products from './Products'
import Team from './Team'

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
          <li>
            <Link to='/non-existing-page'>Mevcut olmayan sayfa</Link> (404'ü
            tetiklemelidir)
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/team' element={<Team />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

// Kodu, 404 bağlantıları için <NotFound /> bileşenini oluşturacak şekilde tamamlayın.
// Kodlarınızı test edebilmeniz için size var olmayan bir bağlantıya yönlendiren bir bağlantı sağlandı.
