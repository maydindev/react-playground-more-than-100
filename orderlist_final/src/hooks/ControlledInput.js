import { useState } from 'react'

const ControlledInput = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email) {
      console.log('formu gönder')
      const person = { name, email, id: crypto.randomUUID() }
      setPeople((people) => {
        return [...people, person]
      })
      setName('')
      setEmail('')
    } else {
      console.log('boş değerler')
    }
  }
  return (
    <>
      <article>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>Kişi Ekle</button>
        </form>
        {people.map((person) => {
          const { name, email, id } = person
          return (
            <div key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}
export default ControlledInput
