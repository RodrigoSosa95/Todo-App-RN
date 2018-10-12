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
    default:
      return state;
  }
};
