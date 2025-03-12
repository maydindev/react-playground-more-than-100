import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <h1>Hakkında</h1>
      <ul>
        <li>
          <Link to='us'>Hakkımızda</Link>
        </li>
        <li>
          <Link to='mission'>Misyonumuz hakkında</Link>
        </li>
      </ul>
    </>
  )
}
