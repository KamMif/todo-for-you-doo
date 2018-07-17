const initialState = [
  {
    "id": 1,
    "title": "First Todo Item",
    "completed": false
},
{
    "id": 2,
    "title": "Secont Todod Item",
    "completed": true
},
{
    "id": 3,
    "title": "Third Todo Item",
    "completed": false
}
];

export default function todoReducer(state=initialState, action) {
  const { type, id, title } = action;
  switch (type) {
    case ADD_TODO:
      return [ ...state, { id, title, completed: false } ]
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== id) {
          return todo
        };
        return Object.assign({}, todo, { completed: !todo.completed })
      })
    // case FIND_TODO:
    //     return state.filter(todo => todo.title.toLowerCase().indexOf(title) !== -1)
    default:
      return state;
  }
}

let currentId = 5;
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FIND_TODO = 'FIND_TODO';

export const addTodo = text => ({ type: ADD_TODO, title: text, id: currentId++ });
export const toggleTodo = id => ({ type: TOGGLE_TODO, id });
export const findTodo = title => ({ type: FIND_TODO, title });
