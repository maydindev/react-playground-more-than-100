import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './Home'
import Products from './Products'
import Team from './Team'
import NotFound from './NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Ürünler</Link>
          </li>
          <li>
            <Link to='/team'>Team</Link>
          </li>
          <li>
            <Link to='/non-existing-page'>Mevcut olmayan sayfa</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/team' element={<Team />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

// İlgili rota oluşturulduğunda her menü öğesi vurgulanacak şekilde kodu tamamlayın.
// index.css dosyasında verilen class'ı kullanın.
