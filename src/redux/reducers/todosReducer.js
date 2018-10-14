const initialState = {
  todos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return {
        todos: action.payload,
      };
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.todo],
      };
    case 'EDIT_TODO':
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        }),
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            todo.completed = !todo.completed;
            return todo;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
