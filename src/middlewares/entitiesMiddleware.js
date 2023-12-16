import axios from 'axios';
import Cookies from 'js-cookie';
import {
  FETCH_BRANDS,
  FETCH_CATEGORIES,
  FETCH_ORGANIZATIONS,
  FETCH_PRODUCTS,
  FETCH_STRUCTURES,
  FETCH_USERS,
  saveBrands,
  saveCategories,
  saveOrganizations,
  saveProducts,
  saveStructures,
  saveUsers,
} from '../actions/entities';
import { openModal } from '../actions/modalActions';

const entitiesMiddleware = (store) => (next) => (action) => {
  const token = Cookies.get('token');
  const id = action.payload;

  switch (action.type) {
    case FETCH_BRANDS:
      axios
        .get(`http://sansonaxel-server.eddi.cloud/api/brands/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveBrands(response.data));
          store.dispatch(openModal());
        })
        .catch((error) => {
          console.error('Erreur de la requête :', error);
        })
        .finally(() => {});
      break;
    case FETCH_CATEGORIES:
      axios
        .get(`http://sansonaxel-server.eddi.cloud/api/categories/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          store.dispatch(saveCategories(response.data));
          store.dispatch(openModal());
        })
        .catch((error) => {
          console.error('Erreur de la requête :', error);
        })
        .finally(() => {});
      break;
    case FETCH_ORGANIZATIONS:
      axios
        .get(`http://sansonaxel-server.eddi.cloud/api/organizations/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          store.dispatch(saveOrganizations(response.data));
          store.dispatch(openModal());
        })
        .catch((error) => {
          console.error('Erreur de la requête :', error);
        })
        .finally(() => {});
      break;

    default:
      break;
  }

  next(action);
};

export default entitiesMiddleware;
