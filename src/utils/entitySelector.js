const selectEntity = (state, entityType) => {
  switch (entityType) {
    case 'brands':
      return state.brand;
    case 'categories':
      return state.category;
    case 'organizations':
      return state.organization;
    case 'products':
      return state.product;
    case 'structures':
      return state.structure;
    case 'users':
      return state.user;
    default:
      throw new Error(`Invalid entityType: ${entityType}`);
  }
};

export default selectEntity;
