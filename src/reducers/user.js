import { CHANGE_LOGIN_FIELD } from '../actions/user';

// reducer for login form
export const initialState = {
  email: '',
  password: '',
  isLogged: false,
  token: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    default:
      return state;
  }
};

export default reducer;
