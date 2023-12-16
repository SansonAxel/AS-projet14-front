import { combineReducers } from 'redux';

import userReducer from './userReducer';
import organizationReducer from './entitiesReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  user: userReducer,
  organization: organizationReducer,
  modal: modalReducer,
});

export default rootReducer;
