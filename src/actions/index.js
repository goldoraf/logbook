export const ADD_ENTRY = 'ADD_ENTRY'

let nextEntryId = 0
export const addEntry = (text) => {
  return {
    type: 'ADD_ENTRY',
    id: nextEntryId++,
    text
  }
}

// export const setVisibilityFilter = (filter) => {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter
//   }
// }

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}