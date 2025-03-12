import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' className={({isActive}) => (isActive ? 'btn nav-active' : 'btn')}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about' className={({isActive}) => (isActive ? 'btn nav-active' : 'btn')}>About</NavLink>
        </li>
        <li>
          <NavLink to='/products' className={({isActive}) => (isActive ? 'btn nav-active' : 'btn')}>Products</NavLink>
        </li>
      </ul>
    </nav>
  )
}
