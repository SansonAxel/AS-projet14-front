import { combineReducers } from 'redux';

import userReducer from './user';
import organizationReducer from './organization';

const rootReducer = combineReducers({
  user: userReducer,
  organization: organizationReducer,
});

export default rootReducer;
