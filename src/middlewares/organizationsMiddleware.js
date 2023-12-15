import axios from 'axios';
import Cookies from 'js-cookie';
import { FETCH_ORGANIZATION, saveOrganization } from '../actions/oganization';
import { openModal } from '../actions/modalActions';

const organizationMiddleware = (store) => (next) => (action) => {
  const token = Cookies.get('token');
  const id = action.payload;

  switch (action.type) {
    case FETCH_ORGANIZATION:
      // console.log("Middleware appelé avec l'ID :", id);

      axios
        .get(`http://sansonaxel-server.eddi.cloud/api/organizations/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // La requête a réussi
          // console.log('Réponse de la requête :', response.data);
          // Dispatch de l'action pour sauvegarder les données dans le state
          store.dispatch(saveOrganization(response.data));
          // Ouvrir la modal en cas de succès
          store.dispatch(openModal());
        })
        .catch((error) => {
          // La requête a échoué
          console.error('Erreur de la requête :', error);
          // Dispatch de l'action pour gérer l'échec (ex: afficher un message d'erreur)
          // Vous pouvez également fermer la modal ici si nécessaire
        })
        .finally(() => {
          // Cette partie sera exécutée indépendamment du succès ou de l'échec de la requête
          // console.log('La requête est terminée.');
        });

      break;

    default:
      break;
  }

  next(action);
};

export default organizationMiddleware;
