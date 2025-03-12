import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

/* <Link /> bileşenini henüz öğrenmedik, bu yüzden bu görevde sizin için sağlanmıştır.
İşte yapmanız gerekenler:
React Router kullanarak, kullanıcı ana sayfadayken (URL /'dir) <Home /> bileşenini ve kullanıcı /contact adresine gittiğinde <Contact /> bileşenini render edin.
Bu bileşenler <main></main> elementinin içinde render edilmelidir. */
