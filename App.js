import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/redux';
import NavigationStack from './src/NavigationStack';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <NavigationStack />
  </Provider>
);
