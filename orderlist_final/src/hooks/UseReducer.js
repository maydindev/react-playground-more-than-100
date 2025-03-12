import { useReducer, useState } from 'react'
import Modal from './Modal'
import { reducer } from './reducer'

const data = [
  { id: 1, name: 'murat' },
  { id: 2, name: 'namık' },
  { id: 3, name: 'suzan' },
  { id: 4, name: 'eda' },
]

const defaultState = {
  people: [],
  isModalOpen: true,
  modalContent: 'hello world',
}
const UseReducer = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newItem = { id: crypto.randomUUID(), name }
      dispatch({ type: 'ADD_ITEM', payload: newItem })
      setName('')
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }
  const closeModal = () => {
    dispatch({ type: 'MODAL_OFF' })
  }

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text '
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>Ekle</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
              }
            >
              Kaldır
            </button>
          </div>
        )
      })}
    </>
  )
}
export default UseReducer
