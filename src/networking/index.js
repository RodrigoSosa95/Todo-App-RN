import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos/',
});

export const getTodos = () => instance.get();
export const getTodo = id => instance.get(`${id}`);
export const createTodo = payload => instance.post('', payload);
export const updateTodo = (id, payload) => instance.put(`${id}`, payload);
export const partialUpdateTodo = (id, payload) => instance.patch(`${id}`, payload);
export const deleteTodo = id => instance.delete(`${id}`);
