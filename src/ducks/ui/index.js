const initialState = {
  filtred: '',
}
export default function filterReducer(state=initialState, action) {
  const { type, title } = action;
  switch (type) {
    case FIND_TODO:
      return { ...state, filtred: title }
    default:
      return state;
  }
}

export const FIND_TODO = 'FIND_TODO';
export const findTodo = title => ({ type: FIND_TODO, title });
