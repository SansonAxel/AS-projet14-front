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
        .get(`http://localhost:8080/api/brands/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
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
        .get(`http://localhost:8080/api/categories/${id}`, {
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
        .get(`http://localhost:8080/api/organizations/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          store.dispatch(saveOrganizations(response.data));
        })
        .catch((error) => {
          console.error('Erreur de la requête :', error);
        })
        .finally(() => {});
      break;
    case FETCH_PRODUCTS:
      axios
        .get(`http://localhost:8080/api/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          store.dispatch(saveProducts(response.data));
          store.dispatch(openModal());
        })
        .catch((error) => {
          console.error('Erreur de la requête :', error);
        })
        .finally(() => {});
      break;
    case FETCH_STRUCTURES:
      axios
        .get(`http://localhost:8080/api/structures/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          store.dispatch(saveStructures(response.data));
          store.dispatch(openModal());
        })
        .catch((error) => {
          console.error('Erreur de la requête :', error);
        })
        .finally(() => {});
      break;
    case FETCH_USERS:
      axios
        .get(`http://localhost:8080/api/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          store.dispatch(saveUsers(response.data));
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
