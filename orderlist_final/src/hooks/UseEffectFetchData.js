import { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
    console.log(users)
  }
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      <h3>Github Users</h3>
      {users.map((user) => {
        const { login, avatar_url, html_url, id } = user
        return (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h4>{login}</h4>
            </div>
          </li>
        )
      })}
    </>
  )
}
export default UseEffectFetchData
