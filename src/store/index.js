import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

/* Main reducer */
import reducer from '../reducers';

import userMiddleware from '../middlewares/userMiddleware';

// devtools + middlewares combined
const enhancers = composeWithDevTools(applyMiddleware(userMiddleware));

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers
);

export default store;
