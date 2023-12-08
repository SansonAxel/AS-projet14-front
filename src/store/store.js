import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { projectApi } from '../services/products';

/* Main reducer */
import reducer from '../reducers';

import userMiddleware from '../middlewares/userMiddleware';

// Devtools + middlewares combined for legacy store
const legacyEnhancers = composeWithDevTools(applyMiddleware(userMiddleware));

// Create the legacy store
const legacyStore = createStore(
  // Reducer
  reducer,
  // Enhancer
  legacyEnhancers
);

// Create the store with rtk-query middleware
const rtkStore = configureStore({
  reducer: {
    [projectApi.reducerPath]: projectApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectApi.middleware),
});

// Setup listeners for rtk-query store
setupListeners(rtkStore.dispatch);

export { legacyStore, rtkStore };
