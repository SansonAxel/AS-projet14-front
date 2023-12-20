import { HANDLE_LOGIN } from '../actions/user';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_LOGIN:
      break;

    default:
      break;
  }

  next(action);
};

export default authMiddleware;
