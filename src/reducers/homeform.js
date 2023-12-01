import { CHANGE_INFO_FIELD } from '../actions/homeform';

// reducer for homepage forms (info request and subscribtion)
export const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  organizationName: '',
  phoneNumber: '',
  address: '',
  siren: '',
  message: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INFO_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    default:
      return state;
  }
};

export default reducer;
