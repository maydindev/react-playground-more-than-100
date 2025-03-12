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
            <Link to='/books/fiction/2'>Dijital kale</Link>
          </li>
          <li>
            <Link to='/books/nonfiction/5'>Neden uyuruz</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/books/:type/:id' element={<Book />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

/* <Book /> bileşenini güncelleyin ve paragraftaki X'i kullanıcının o anda göz atmakta olduğu kitabın türü ve Y'yi de bu kitabın id'si ile değiştirin.
Örneğin, /books/nonfiction/5 seçeneğine tıklandığında <h2>Kitap</h2><p>Kurgu olmayan bir kitabın id 5 ile açıklaması</p> oluşturulmalıdır.

Önce tanımlanmış rotalara baktığınızdan emin olun. */
