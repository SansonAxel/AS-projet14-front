import { CLOSE_MODAL, OPEN_MODAL } from '../actions/modalActions';

const initialState = {
  isOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true,
      };

    case CLOSE_MODAL:
      return {
        isOpen: false,
      };

    default:
      return state;
  }
};

export default reducer;
