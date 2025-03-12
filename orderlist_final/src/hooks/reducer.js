export const reducer = (state, action) => {
  console.log(state)
  if (action.type === 'ADD_ITEM') {
    const newItems = [...state.people, action.payload]
    return { ...state, people: newItems, modalContent: 'kişi eklendi' }
  }

  if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true, modalContent: 'Lütfen değer girin' }
  }

  if (action.type === 'MODAL_OFF') {
    return { ...state, isModalOpen: false }
  }

  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    )

    return { ...state, people: newPeople }
  }
  return state
  // throw new Error('eşleşen eylem türü yok')
}
