import { connect } from 'react-redux';

import Form from './Form';
import { addTodo } from '../../ducks/data';
import { findTodo } from '../../ducks/ui';

const mapDispatchToProps = dispatch => ({
  onAdd: title => dispatch(addTodo(title)),
  onFilted: title => dispatch(findTodo(title))
});

const FormContainer = connect(null, mapDispatchToProps)(Form);
export default FormContainer;