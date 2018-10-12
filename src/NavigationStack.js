import React from 'react';
import { createStackNavigator } from 'react-navigation';
import TodoList from './scenes/TodoList';
import TodoDetail from './scenes/TodoDetail';
import EditTodo from './scenes/EditTodo';

const navigator = createStackNavigator({
  TodoList: {
    screen: TodoList,
  },
  TodoDetail: {
    screen: TodoDetail,
  },
  EditTodo: {
    screen: EditTodo,
  },
});

export default navigator;
