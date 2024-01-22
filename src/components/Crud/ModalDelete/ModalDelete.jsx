/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import './ModalDelete.scss';
import { useNavigate } from 'react-router-dom';
import { projectApi } from '../../../services/projectApi';

const ModalDelete = ({
  isOpenModalDelete,
  handleCloseModalDelete,
  refetch,
  deleteItemId,
  entityType,
  setSnackbar,
}) => {
  const navigate = useNavigate();

  // Define the mutation hook directly in the component body
  const [deleteItem] = (() => {
    switch (entityType) {
      case 'brands':
        return projectApi.useDeleteBrandsMutation();
      case 'categories':
        return projectApi.useDeleteCategoriesMutation();
      case 'organizations':
        return projectApi.useDeleteOrganizationsMutation();
      case 'products':
        return projectApi.useDeleteProductsMutation();
      case 'structures':
        return projectApi.useDeleteStructuresMutation();
      case 'users':
        return projectApi.useDeleteUsersMutation();
      default:
        navigate('/error', {
          state: { error: `Type d'entité invalide: ${entityType}` },
        });
        return [() => {}]; // Provide a dummy function to avoid errors
    }
  })();

  const handleConfirmDelete = async () => {
    try {
      const response = await deleteItem(deleteItemId);
      refetch();
      handleCloseModalDelete();
      if (response.data) {
        setSnackbar({
          children: `Suppression réussie`,
          severity: 'success',
        });
      }
    } catch (error) {
      setSnackbar({ children: 'Echec de la suppression', severity: 'error' });
    }
  };

  const handleCancelDelete = () => {
    handleCloseModalDelete();
  };

  return (
    <div
      className="ModalDelete"
      style={{ display: isOpenModalDelete ? 'block' : 'none' }}
    >
      <div className="ModalDelete__Content">
        <p>Supprimer l'élément ?</p>
        <span>(cette action est irréversible)</span>
        <div className="ModalDelete__Content__Buttons">
          <button
            type="button"
            className="ModalDelete__Content__Buttons ModalDelete__Content__Buttons--Cancel"
            onClick={handleCancelDelete}
          >
            Annuler
          </button>
          <button
            type="button"
            className="ModalDelete__Content__Buttons ModalDelete__Content__Buttons--Confirm"
            onClick={handleConfirmDelete}
          >
            Confirmer
          </button>
        </div>
      </div>
    </div>
  );
};

ModalDelete.propTypes = {
  isOpenModalDelete: PropTypes.bool.isRequired,
  handleCloseModalDelete: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
  deleteItemId: PropTypes.number,
  entityType: PropTypes.string.isRequired,
  setSnackbar: PropTypes.func.isRequired,
};

ModalDelete.defaultProps = {
  deleteItemId: 0,
};
export default ModalDelete;
