import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

/* on importe le reducer principal */
import reducer from '../reducers';

import recipesMiddleware from '../middlewares/homeformMiddleware';
import userMiddleware from '../middlewares/userMiddleware';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    recipesMiddleware,
    userMiddleware
    // ... d'autres middlewares
  )
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers
);

export default store;
