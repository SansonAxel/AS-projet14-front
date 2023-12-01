import { combineReducers } from 'redux';

import homeformReducer from './homeform';
import userReducer from './user';

const rootReducer = combineReducers({
  homeform: homeformReducer,
  user: userReducer,
});

export default rootReducer;
