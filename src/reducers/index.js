import { combineReducers } from 'redux';

import userReducer from './user';
// import crudSlice from './crudSlice';

const rootReducer = combineReducers({
  user: userReducer,
  // crud: crudSlice,
});

export default rootReducer;
