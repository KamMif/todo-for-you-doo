import { connect } from 'react-redux';

import List from './List';
import { toggleTodo } from '../../ducks/data';

const mapStateToProps = state => {

  return {
    todos: state.data,
    filtredTodo: state.data.filter(todo => todo.title.toLowerCase().indexOf(state.ui.filtred) !== -1)
  }
}

const mapDispatchToProps = dispatch => ({
  onToggle: id => dispatch(toggleTodo(id))
});

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);
export default ListContainer;