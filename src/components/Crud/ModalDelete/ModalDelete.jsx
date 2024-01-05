import PropTypes from 'prop-types';
import './ModalDelete.scss';
import { projectApi } from '../../../services/projectApi';

const ModalDelete = ({
  isOpenModalDelete,
  handleCloseModalDelete,
  refetch,
  deleteItemId,
  currentEntityName,
  entityType,
}) => {
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
        console.error(`Invalid entityType: ${entityType}`);
        return [() => {}]; // Provide a dummy function to avoid errors
    }
  })();

  const handleConfirmDelete = async () => {
    try {
      const response = await deleteItem(deleteItemId);
      refetch();
      handleCloseModalDelete();
    } catch (error) {
      console.error('Erreur lors de la suppression :', error);
      // Handle the error if needed
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
        <p>
          Supprimer l'élément ? <span>(cette action est irréversible)</span>
        </p>
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
  currentEntityName: PropTypes.string.isRequired,
  entityType: PropTypes.string.isRequired,
};

ModalDelete.defaultProps = {
  deleteItemId: 0,
};
export default ModalDelete;
