import { HANDLE_LOGOUT, HANDLE_SUCCESSFUL_LOGIN } from '../actions/user';

// reducer for login form
export const initialState = {
  isLogged: false,
  token: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_SUCCESSFUL_LOGIN:
      return {
        isLogged: true,
        token: action.token,
      };
    case HANDLE_LOGOUT:
      return {
        isLogged: false,
        token: '',
      };
    default:
      return state;
  }
};

export default reducer;
