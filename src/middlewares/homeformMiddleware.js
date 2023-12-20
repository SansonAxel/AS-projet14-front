const homeformMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      break;
  }

  next(action);
};

export default homeformMiddleware;
