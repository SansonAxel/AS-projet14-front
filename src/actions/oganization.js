export const SAVE_ORGANIZATION = 'SAVE_ORGANIZATION';

export const FETCH_ORGANIZATION = 'FETCH_ORGANIZATION';

export const saveOrganization = () => ({
  type: SAVE_ORGANIZATION,
});
export const fetchOrganization = (id) => ({
  type: FETCH_ORGANIZATION,
  payload: id,
});
