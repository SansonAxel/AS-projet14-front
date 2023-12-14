import PropTypes from 'prop-types';
import './ModalDelete.scss';
import { useDeleteOrganizationMutation } from '../../../services/projectApi';

const ModalDelete = ({
  isOpenModalDelete,
  handleCloseModalDelete,
  refetch,
  deleteItemId,
}) => {
  const [deleteOrganization] = useDeleteOrganizationMutation();

  const handleConfirmDelete = async () => {
    try {
      const response = await deleteOrganization(deleteItemId);
      alert(JSON.stringify(response.error.data.error));
      refetch();
      handleCloseModalDelete();
    } catch (error) {
      console.error('Erreur lors de la suppression :', error);
      // Handle the error if needed
    }
  };

  const handleCancelDelete = () => {
    handleCloseModalDelete();
    console.log('non');
  };

  return (
    <div
      className="ModalDelete"
      style={{ display: isOpenModalDelete ? 'block' : 'none' }}
    >
      <div className="ModalDelete__Content">
        <p>{`Êtes-vous sûr•e de vouloir supprimer cet élément id ${deleteItemId} ?`}</p>
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
};

ModalDelete.defaultProps = {
  deleteItemId: 0,
};
export default ModalDelete;
