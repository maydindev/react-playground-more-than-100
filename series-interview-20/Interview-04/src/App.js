import React, { useContext, useEffect, useState } from "react";
import UsersContext from "./context/users";

function App() {
  // KODUNUZ BURAYA GELECEK
  const [userState,changeUserState] = useContext(UsersContext)

  useEffect(() => {
    changeUserState()
  },[userState])

  return (
    <UserList/>
  )
  
}

const UserList = () => {
  // KODUNUZ BURAYA GELECEK
  const [userState] = useContext(UsersContext)
  console.log(userState)
  return (
    <ul>
      {Object.entries(userState).map(([user,isActive]) => (
        <li key={user}>
          {user}: {isActive ? "🟢" : "🔴"}
        </li>
      ))}
    </ul>
  )
};

export default App;
