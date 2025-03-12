import {NavLink} from "react-router-dom"

export default function NotFound() {
  return (
    <>
      <h2>Sayfa bulunamadı</h2>
      <p>Sayfa bulunamadı</p>
      <NavLink to="/" className="btn">Ana Sayfa</NavLink>
    </>
  );
}
