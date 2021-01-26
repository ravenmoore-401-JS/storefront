import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import categoriesReducer from './categories';

let reducers = combineReducers({categoriesReducer});

const reduxStore = () => {
  return createStore(reducers, composeWithDevTools());
}

export default reduxStore();