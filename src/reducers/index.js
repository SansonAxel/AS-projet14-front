import { combineReducers } from 'redux';

import homeformReducer from './homeform';
import userReducer from './user';

const rootReducer = combineReducers({
  recipes: homeformReducer,
  user: userReducer,
});

export default rootReducer;
