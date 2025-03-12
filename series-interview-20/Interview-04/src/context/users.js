import React, { useState,createContext } from "react";

const UsersContext = createContext()

function AppProvider({children}) {
  const [userState, setUserState] = useState({
    Namık: true,
    Eda: true,
    Suzan: false,
    Engin: false,
    Samet: false
  });


  function changeUserState() {
    const intervalId = setInterval(() => {
        const users = Object.keys(userState)
        const randomUser = users[Math.floor(Math.random()*users.length)]
        setUserState((prev) => ({
            ...prev, [randomUser]: !prev[randomUser]
        }))
    },2000)
    return () => clearInterval(intervalId)
  }


  const valueToShare = [userState,changeUserState]


  return (
    <UsersContext.Provider value={valueToShare}>{children}</UsersContext.Provider>
  )  

}

export {AppProvider}
export default UsersContext