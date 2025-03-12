import Dashboard from './components/Dashboard'
import SignOut from './components/SignOut'
import SignIn from './components/SignIn'
import Logo from './components/Logo'
import { useState } from 'react'



// login'i ve dashboard + signout'u isAuthUser'a koşullu olarak görüntülemek için <></> fragment'ı kullanın

export default function Navbar() {
  const [isAuthUser,setIsAuthUser] = useState(false)
  //const isAuthUser = false


  const handleClickSignIn = () => {
    setIsAuthUser(true)
  }

  const handleClickSignOut = () => {
    setIsAuthUser(false)
  }
  
  return (
    <header className='navbar-wrapper'>
      <nav className='navbar'>
        <Logo/>
        <div className='navbar-links'>     
        {isAuthUser ? <>
          <Dashboard/>{" "}
          <SignOut onClickSignOut={handleClickSignOut}/>
          </> : <SignIn onClickSignIn={handleClickSignIn}/>}
        </div>
      </nav>
    </header>
  )
}


