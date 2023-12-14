import { SAVE_ORGANIZATION } from '../actions/oganization';

export const initialState = {
  name: '',
  email: '',
  phoneNumber: '',
  address: '',
  siren: '',
  type: '',
  status: '',
  createdAt: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ORGANIZATION:
      return {
        ...state,
        organization: {
          ...state.organization,
          name: action.payload.organization.name,
          email: action.payload.organization.email,
          phoneNumber: action.payload.organization.phoneNumber,
          address: action.payload.organization.address,
          siren: action.payload.organization.siren,
          type: action.payload.organization.type,
          status: action.payload.organization.status,
          createdAt: action.payload.organization.createdAt,
        },
      };

    default:
      return state;
  }
};

export default reducer;
