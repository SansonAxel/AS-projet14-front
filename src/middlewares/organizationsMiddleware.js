import axios from 'axios';
import Cookies from 'js-cookie';
import { FETCH_ORGANIZATION, saveOrganization } from '../actions/oganization';

const organizationMiddleware = (store) => (next) => (action) => {
  const token = Cookies.get('token');
  const id = action.payload;
  switch (action.type) {
    case FETCH_ORGANIZATION:
      console.log("Middleware appelé avec l'ID :", id);

      axios
        .get(`http://sansonaxel-server.eddi.cloud/api/organizations/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          store.dispatch(saveOrganization(response.data));
        });

      break;

    default:
      break;
  }

  next(action);
};

export default organizationMiddleware;
