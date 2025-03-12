import { useState } from 'react'

const data = [
  { id: 1, name: 'murat' },
  { id: 2, name: 'namık' },
  { id: 3, name: 'suzan' },
  { id: 4, name: 'eda' },
]

const PropDrill = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }
  return (
    <section>
      <h3>PropDrill</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  )
}

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        )
      })}
    </>
  )
}

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Kaldır</button>
    </div>
  )
}

export default PropDrill
