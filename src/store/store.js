import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { projectApi } from '../services/projectApi';
import userMiddleware from '../middlewares/userMiddleware';
import entitiesMiddleware from '../middlewares/entitiesMiddleware';

/* Importez vos réducteurs ici */
import userReducer from '../reducers/userReducer';
import entitiesReducer from '../reducers/entitiesReducer';
import modalReducer from '../reducers/modalReducer';

/* Combinez les réducteurs */
const rootReducer = combineReducers({
  user: userReducer,
  entities: entitiesReducer,
  modal: modalReducer,
  [projectApi.reducerPath]: projectApi.reducer,
});

// Devtools + middlewares combinés pour le store legacy
const legacyEnhancers = composeWithDevTools(
  applyMiddleware(userMiddleware, entitiesMiddleware)
);

// Créez le store legacy
const legacyStore = createStore(rootReducer, legacyEnhancers);

// Créez le store avec le middleware rtk-query
const rtkStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectApi.middleware, entitiesMiddleware),
});

// Configurez les auditeurs pour le store rtk-query
setupListeners(rtkStore.dispatch);

export { legacyStore, rtkStore };
