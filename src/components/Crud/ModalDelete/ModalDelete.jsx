/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import './ModalDelete.scss';
import { projectApi } from '../../../services/projectApi';

const ModalDelete = ({
  isOpenModalDelete,
  handleCloseModalDelete,
  refetch,
  deleteItemId,
  currentEntity,
  setSnackbar,
}) => {
  // Define the mutation hook directly in the component body
  const [deleteItem] = (() => {
    switch (currentEntity) {
      case 'marques':
        return projectApi.useDeleteBrandsMutation();
      case 'categories':
        return projectApi.useDeleteCategoriesMutation();
      case 'associations':
        return projectApi.useDeleteOrganizationsMutation();
      case 'produits':
        return projectApi.useDeleteProductsMutation();
      case 'antennes':
        return projectApi.useDeleteStructuresMutation();
      case 'utilisateurs':
        return projectApi.useDeleteUsersMutation();
      default:
        return [() => {}];
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
  currentEntity: PropTypes.string.isRequired,
  setSnackbar: PropTypes.func.isRequired,
};

ModalDelete.defaultProps = {
  deleteItemId: 0,
};
export default ModalDelete;
