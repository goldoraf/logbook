import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => {
  return {
    todos: state.entries
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const MainEntryList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default MainEntryList