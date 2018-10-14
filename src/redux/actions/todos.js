import { getTodos, partialUpdateTodo, deleteTodo, createTodo } from '../../networking';
import { triggerError } from './errors';

export const addTodo = todo => ({
  type: 'ADD_TODO',
  todo,
});

export const startAddTodo = title => dispatch => createTodo({ userId: 1, title, completed: false })
  .then(({ data }) => {
    console.log(data);
    dispatch(addTodo(data));
  })
  .catch(error => dispatch(triggerError(error)));

export const removeTodo = id => ({
  type: 'DELETE_TODO',
  id,
});

export const startRemoveTodo = id => dispatch => deleteTodo(id)
  .then(() => dispatch(removeTodo(id)))
  .catch(error => dispatch(triggerError(error.message)));

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const startToggleTodo = (id, todo) => dispatch => partialUpdateTodo(id, { completed: !todo.completed })
  .then(() => dispatch(toggleTodo(id)))
  .catch(error => dispatch(triggerError(error.message)));

export const setTodos = payload => ({
  type: 'SET_TODOS',
  payload,
});

export const startSetTodos = () => dispatch => getTodos()
  .then(({ data }) => dispatch(setTodos(data.slice(0, 25)))) // For demonstration purposes reduced size of data from 200 to 25
  .catch((error) => {
    if (error.response) {
      return dispatch(triggerError(String(error.response.status)));
    }
    if (error.request) {
      return dispatch(
        triggerError('Something went wrong with the server, please try again later'),
      );
    }
    return dispatch(triggerError(error.message));
  });
