import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './Home'
import Book from './Book'

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/books/fiction'>Fantastik kitaplar</Link>
          </li>
          <li>
            <Link to='/books/nonfiction'>Kurgusal olmayan kitaplar</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/books' element={<Book />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

// Size 3 bağlantı seçeneği sunulmuştur:

// Homepage => /
// Fantastik kitaplar => /books/fiction
// Kurgusal olmayan kitaplar => /books/nonfiction
// Rotaları, kitap türlerinden herhangi birine tıklandığında aynı <Book /> bileşenini oluşturacak şekilde güncelleyin.
// Not: URL parametresinin adı olarak type öğesini kullanın.
