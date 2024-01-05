import { HANDLE_LOGOUT, HANDLE_SUCCESSFUL_LOGIN } from '../actions/user';

// reducer for login form
export const initialState = {
  isLogged: false,
  token: '',
  userInformation: {
    firstname: '',
    lastname: '',
    role: [],
    organization: {},
    structure: {},
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_SUCCESSFUL_LOGIN:
      return {
        isLogged: true,
        token: action.token,
        userInformation: {
          firstname: action.firstname || '',
          lastname: action.lastname || '',
          role: action.role ? [action.role] : [],
          organization: {
            id: action.organization ? action.organization.id : '',
            name: action.organization ? action.organization.name : '',
          },
          structure: {
            id: action.structure ? action.structure.id : '',
            name: action.structure ? action.structure.name : '',
          },
        },
      };
    case HANDLE_LOGOUT:
      return {
        isLogged: false,
        token: '',
        userInformation: {
          firstname: '',
          lastname: '',
          role: [],
          organization: {},
          structure: {},
        },
      };
    default:
      return state;
  }
};

export default reducer;
