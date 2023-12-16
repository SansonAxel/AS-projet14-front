export const SAVE_BRANDS = 'SAVE_BRANDS';
export const FETCH_BRANDS = 'FETCH_BRANDS';

export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export const SAVE_ORGANIZATIONS = 'SAVE_ORGANIZATIONS';
export const FETCH_ORGANIZATIONS = 'FETCH_ORGANIZATIONS';

export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const SAVE_STRUCTURES = 'SAVE_STRUCTURES';
export const FETCH_STRUCTURES = 'FETCH_STRUCTURES';

export const SAVE_USERS = 'SAVE_USERS';
export const FETCH_USERS = 'FETCH_USERS';

export const saveBrands = (brand) => ({
  type: SAVE_BRANDS,
  brand,
});
export const fetchBrands = (id) => ({
  type: FETCH_BRANDS,
  payload: id,
});

export const saveCategories = (category) => ({
  type: SAVE_CATEGORIES,
  category,
});
export const fetchCategories = (id) => ({
  // Correction ici
  type: FETCH_CATEGORIES,
  payload: id,
});

export const saveOrganizations = (organization) => ({
  type: SAVE_ORGANIZATIONS,
  organization,
});
export const fetchOrganizations = (id) => ({
  type: FETCH_ORGANIZATIONS,
  payload: id,
});

export const saveProducts = (product) => ({
  type: SAVE_PRODUCTS,
  product,
});
export const fetchProducts = (id) => ({
  type: FETCH_PRODUCTS,
  payload: id,
});

export const saveStructures = (structure) => ({
  type: SAVE_STRUCTURES,
  structure,
});
export const fetchStructures = (id) => ({
  type: FETCH_STRUCTURES,
  payload: id,
});

export const saveUsers = (user) => ({
  type: SAVE_USERS,
  user,
});
export const fetchUsers = (id) => ({
  type: FETCH_USERS,
  payload: id,
});
