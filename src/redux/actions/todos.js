import { getTodos, instance } from '../../networking';
import { triggerError } from './errors';

export const setTodos = payload => ({
  type: 'SET_TODOS',
  payload,
});

export const startGetTodos = () => (dispatch) => {
  console.log("Start get todos...");
  return getTodos()
    .then(({ data }) => {
      console.log(data);
      return dispatch(setTodos(data));
    })
    .catch((error) => {
      console.log(error);
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
};
