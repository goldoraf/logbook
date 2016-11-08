import { combineReducers } from 'redux'
import entries from './entries'
//import visibilityFilter from './visibilityFilter'

const logbook = combineReducers({
  entries,
  //visibilityFilter
})

export default logbook