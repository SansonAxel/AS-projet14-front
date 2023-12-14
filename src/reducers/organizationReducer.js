import { SAVE_ORGANIZATION } from '../actions/oganization';

export const initialState = {
  organization: {
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    siren: '',
    type: '',
    status: '',
    createdAt: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ORGANIZATION:
      return {
        ...state,
        organization: {
          ...state.organization,
          ...action.payload.organization,
        },
      };

    default:
      return state;
  }
};

export default reducer;
