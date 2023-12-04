const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      break;
  }

  next(action);
};

export default authMiddleware;
