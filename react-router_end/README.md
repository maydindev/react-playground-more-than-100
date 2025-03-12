https://react-router-end.netlify.app/

# React Router 6

- main.jsx

```js
import App from './App.jsx'
```

#### Docs

[React Router Docs](https://reactrouter.com/en/main/start/tutorial)

#### Install

```sh
npm install react-router-dom@6
```

#### İlk Sayfalar

- App.jsx

```js
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>home page</div>} />
        <Route
          path='test'
          element={
            <div>
              <h2>test </h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

#### Components

- App.jsx

```js
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

#### Links

- Home.jsx, About.jsx

```js
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to='/about' className='btn'>
        About
      </Link>
      <a href="">
    </div>
  );
};
export default Home;
```

#### Error Page

- App.jsx

```js
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
```

- Error.jsx

```js
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='section'>
      <h2>404</h2>
      <p>page not found</p>
      <Link to='/'>back home</Link>
    </section>
  )
}
export default Error
```

#### İç içe sayfalar

- birkaç kez yeniden düzenleme yapacak

- App.jsx

```js
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
```

#### Paylaşılan Sayfa Düzeni

- Home.jsx

```js
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <section className='section'>
      <h2>Home Page</h2>
      <Outlet />
    </section>
  )
}
export default Home
```

#### Navbar

- Navbar.jsx

```js
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
    </nav>
  )
}
export default Navbar
```

- Home.jsx

```js
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <>
      <Navbar />
      <section className='section'>
        <Outlet />
      </section>
    </>
  )
}
export default Home
```

#### Index Routes

- Index rotaları, üst rotanın yolundaki üst rota outlet'inde oluşturulur.
- Index rotaları, bir üst rota eşleştiğinde ancak diğer alt rotaların hiçbiri eşleşmediğinde eşleşir.
- Index rotaları, bir üst rota için varsayılan alt rotadır.
- Index rotaları, kullanıcı henüz bir navigasyon listesindeki öğelerden birine tıklamadığında oluşturulur.

- Home.js içeriğini kopyala
- SharedLayout.jsx

```js
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <section className='section'>
        <Outlet />
      </section>
    </>
  )
}
export default SharedLayout
```

- Home.jsx

```js
const Home = () => {
  return (
    <section className='section'>
      <h2>Home Page</h2>
    </section>
  )
}
export default Home
```

- App.jsx

```js
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
```

#### NavLink (style)

- StyledNavbar.jsx

```js
import { NavLink } from 'react-router-dom';
<nav className='navbar'>
  <NavLink
    to='/about'
    style={({ isActive }) => {
      return { color: isActive ? 'red' : 'grey' }
    }}
  >
    Home
  </NavLink>
</nav>
```

#### NavLink (className)

- StyledNavbar.jsx

```js
<nav className='navbar'>
  <NavLink
    to='/'
    className={({ isActive }) => (isActive ? 'link active' : 'link')}
  >
    Home
  </NavLink>
</nav>
```

<!-- Highlight Menu-1 -->

#### URL Params Okuma

- App.jsx

```js
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<SingleProduct />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
```

<!-- Defining Route Params-1 -->
<!-- Defining Route Params-2 -->

#### Single Product

- SingleProduct.jsx

```js
import { Link, useParams } from 'react-router-dom'
import products from '../data'
const SingleProduct = () => {
  const { productId } = useParams()

  return (
    <section className='section product'>
      <h2>{productId}</h2>
      <Link to='/products'>back to products</Link>
    </section>
  )
}

export default SingleProduct
```

<!-- Extracting Route Params-1 -->
<!-- Extracting Route Params-2 -->
<!-- Extracting Route Params-3 -->

#### Products Page

- Products.jsx

```js
import { Link } from 'react-router-dom'
import products from '../data'
const Products = () => {
  return (
    <section className='section'>
      <h2>products</h2>
      <div className='products'>
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`}>more info</Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Products
```

#### Single Product

- SingleProduct.jsx

```js
import { Link, useParams } from 'react-router-dom'
import products from '../data'
const SingleProduct = () => {
  const { productId } = useParams()
  const product = products.find((product) => product.id === productId)
  const { image, name } = product

  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to='/products'>back to products</Link>
    </section>
  )
}

export default SingleProduct
```

#### useNavigate()

- App.jsx

```js
function App() {
  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<SingleProduct />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='dashboard' element={<Dashboard user={user} />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
```

- Login.jsx

```js
 import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate('/dashboard');
  };

```

- Dashboard.jsx

```js
const Dashboard = ({ user }) => {
  return (
    <section className='section'>
      <h4>Hello, {user?.name}</h4>
    </section>
  )
}
export default Dashboard
```

<!-- Conditional Redirect -->

#### Protected Route

- App.jsx

```js
<Route
  path='dashboard'
  element={
    <ProtectedRoute user={user}>
      <Dashboard user={user} />
    </ProtectedRoute>
  }
/>
```

- ProtectedRoute.jsx

```js
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to='/' />
  }
  return children
}

export default ProtectedRoute
```
