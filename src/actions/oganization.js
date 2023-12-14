export const SAVE_ORGANIZATION = 'SAVE_ORGANIZATION';

export const FETCH_ORGANIZATION = 'FETCH_ORGANIZATION';

export const saveOrganization = (organization) => ({
  type: SAVE_ORGANIZATION,
  payload: {
    organization,
  },
});

export const fetchOrganization = (id) => ({
  type: FETCH_ORGANIZATION,
  payload: id,
});
