/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

import './ModalFormCreate.scss';
import { formFieldOganization } from '../../../formsConfig/formFieldsConfig';
import FormTemplate from '../../FormTemplate/FormTemplate';
import { useAddOrganizationMutation } from '../../../services/projectApi';

const ModalFormCreate = ({
  isOpenModalFormCreate,
  handleCloseModalFormCreate,
  refetch,
}) => {
  const [addOrganization] = useAddOrganizationMutation();

  const handleOrganizationSubmission = async (values) => {
    // Call the addOrganization mutation
    addOrganization(values)
      .unwrap()
      .then((response) => {
        // Handle the response if needed
        // Close the modal form
        handleCloseModalFormCreate();
        refetch();
      })
      .catch((errors) => {
        console.error('Error adding organization:', errors);
        // Handle the error if needed
      });
  };

  return (
    <div
      className="ModalFormCreate"
      style={{ display: isOpenModalFormCreate ? 'block' : 'none' }}
    >
      <div className="ModalFormCreate__Content">
        <h2>Ajout d'une association</h2>

        <button
          type="button"
          className="ModalFormCreate__Content__CloseButton"
          onClick={handleCloseModalFormCreate}
        >
          &times;
        </button>
        <FormTemplate
          className="ModalFormCreate__Content__Form"
          formFields={formFieldOganization}
          buttonText="Envoyer"
          infoText="Les champs marqués d'un * sont obligatoires"
          handleOrganizationSubmission={handleOrganizationSubmission}
        />
      </div>
    </div>
  );
};

ModalFormCreate.propTypes = {
  isOpenModalFormCreate: PropTypes.bool.isRequired,
  handleCloseModalFormCreate: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};
export default ModalFormCreate;
