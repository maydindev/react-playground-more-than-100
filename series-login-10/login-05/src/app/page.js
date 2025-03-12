import Image from "next/image";
import Navbar from "./components/navbar.js";
import Login from "./components/login.js";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Login/>
    </div>
  );
}
