import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import todosReducer from './reducers/todosReducer';
import errorsReducer from './reducers/errorsReducer';

export default () => createStore(combineReducers({ todosReducer, errorsReducer }), applyMiddleware(thunk));
