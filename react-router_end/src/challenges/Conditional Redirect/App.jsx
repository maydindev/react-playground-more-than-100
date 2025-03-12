import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Home loggedIn={false} />
              <Home loggedIn={true} />
            </>
          }
        ></Route>
        <Route
          path='/login'
          element={
            <>
              <h1>Login page</h1>
              <Link to='/'>Back home</Link>
            </>
          }
        ></Route>
        <Route
          path='/dashboard'
          element={
            <>
              <h1>Dashboard page</h1>
              <Link to='/'>Back home</Link>
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

// Home bileşeninin handleStartClick fonksiyonunu şu şekilde tamamlayın:

// kullanıcı oturum açtığında kullanıcıyı /dashboard sayfasına yönlendirir
// kullanıcı oturumu kapattığında kullanıcıyı /login sayfasına yönlendirir
// <Home /> bileşeni, kullanıcının oturum açtığını ya da oturumu kapattığını anlayabileceğiniz bir prop alır.
// Kodunuzu Browser sekmesinde deneyebilmeniz için her iki durumu da render ettik.
