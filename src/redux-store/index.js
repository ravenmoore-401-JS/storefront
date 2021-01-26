import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import thing from './thing';

let reducers = combineReducers({thing});

const reduxStore = () => {
  return createStore(reducers, composeWithDevTools());
}

export default reduxStore();