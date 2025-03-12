import { BrowserRouter, Link, Routes, Route, Outlet } from 'react-router-dom'

function Home() {
  return <Link to='/about'>Go to /about page</Link>
}

function About() {
  return (
    <>
      <h1>About</h1>
      <ul>
        <li>
          <Link to='us'>About us</Link>
        </li>
        <li>
          <Link to='team'>About the team</Link>
        </li>
      </ul>
      <Outlet />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}>
          <Route path='us' element={<h2>About us</h2>}></Route>
          <Route path='team' element={<h2>About the Team</h2>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// About sayfası daha sonra 2 bağlantı oluşturacaktır.
// about/us sayfasına gittiğinizde hala /about sayfasındaki içeriğin nasıl işlendiğine ama aynı zamanda altındaki /about/us sayfasındaki içeriğin de nasıl işlendiğine dikkat edin.
// Aynı şey /about/team sayfası için de geçerlidir.
