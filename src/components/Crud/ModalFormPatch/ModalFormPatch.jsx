/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import './ModalFormPatch.scss';
import { formFieldOganization } from '../../../formsConfig/formFieldsConfig';
import FormTemplate from '../../FormTemplate/FormTemplate';
import { closeModal } from '../../../actions/modalActions';
import { useUpdateOrganizationMutation } from '../../../services/projectApi';

const ModalFormPatch = ({ isOpenModal, refetch, dataObject }) => {
  const [updateOrganization, { idLoading: isUpdating }] =
    useUpdateOrganizationMutation();
  const dispatch = useDispatch();
  const handleOrganizationPatch = async (values) => {
    try {
      // Use the RTK mutation to update the organization
      const response = await updateOrganization({
        id: dataObject.id,
        ...values,
        fixedCacheKey: 'shared-update-post',
      });
      refetch();

      // Close the modal
      dispatch(closeModal());
    } catch (error) {
      console.error('Erreur lors de la mise à jour :', error);
    }
  };

  const handleCancelPatch = () => {
    // Close the modal without updating
    dispatch(closeModal());
  };
  return (
    <div
      className="ModalFormPatch"
      style={{ display: isOpenModal ? 'block' : 'none' }}
    >
      <div className="ModalFormPatch__Content">
        <h2>{`Modification de l'association id ${dataObject.id}`}</h2>

        <button
          type="button"
          className="ModalFormPatch__Content__CloseButton"
          onClick={() => dispatch(closeModal())}
        >
          &times;
        </button>
        <FormTemplate
          className="ModalFormPatch__Content__Form"
          formFields={formFieldOganization}
          buttonText="Sauvegarder"
          infoText="Les champs marqués d'un * sont obligatoires"
          dataObject={dataObject}
          handleOrganizationPatch={handleOrganizationPatch}
        />
      </div>
    </div>
  );
};

ModalFormPatch.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  refetch: PropTypes.func.isRequired,
  dataObject: PropTypes.objectOf(PropTypes.any),
};

ModalFormPatch.defaultProps = {
  dataObject: {},
};
export default ModalFormPatch;
