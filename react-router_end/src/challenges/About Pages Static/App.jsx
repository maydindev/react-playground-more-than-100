import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './About.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Link to='/about'>Go to /about page</Link>}
        ></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

// About bileşenini, /about/us ve /about/mission bağlantıları sırasıyla <AboutUs /> ve <AboutMission /> bileşenlerini oluşturacak ve aynı zamanda <About /> bileşenini her zaman en üstte oluşturacak şekilde tamamlayın.

// Örneğin, /about/us seçeneğine tıklandığında <h1>About</h1> ile birlikte 2 bağlantı ve ardından <AboutUs /> bileşeni oluşturulmalıdır.
// App.js üzerinde de bazı değişiklikler yapmanız gerekebilir.
