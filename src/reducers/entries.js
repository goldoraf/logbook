import { ADD_ENTRY } from '../actions'

const entry = (state = {}, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const entries = (state = [], action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return [
        ...state,
        entry(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        entry(t, action)
      )
    default:
      return state
  }
}

export default entries