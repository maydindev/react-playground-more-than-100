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
          <Route path='/books/:type' element={<Book />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

/* <Book /> bileşenini güncelleyin ve paragraftaki X'i kullanıcının o anda göz attığı kitabın türüyle (fantastik veya kurgu dışı) değiştirin.
Örneğin, /books/fiction seçeneğine tıklandığında <h2>Kitap</h2><p>Fantastik kitabın açıklaması</p> görüntülenmelidir.

Önce tanımlanmış rotalara baktığınızdan emin olun. */
