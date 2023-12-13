/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

import './ModalForm.scss';
import { formFieldAddOganization } from '../../../formsConfig/formFieldsConfig';
import FormTemplate from '../../FormTemplate/FormTemplate';
import { useAddOrganizationMutation } from '../../../services/projectApi';

const ModalForm = ({ isOpenModalForm, handleCloseModalForm, refetch }) => {
  const [addOrganization] = useAddOrganizationMutation();

  const handleOrganizationSubmission = async (values) => {
    // Call the addOrganization mutation
    addOrganization(values)
      .unwrap()
      .then((response) => {
        // Handle the response if needed
        console.log(response);
        // Close the modal form
        handleCloseModalForm();
        refetch();
      })
      .catch((errors) => {
        console.error('Error adding organization:', errors);
        // Handle the error if needed
      });
  };
  return (
    <div
      className="ModalForm"
      style={{ display: isOpenModalForm ? 'block' : 'none' }}
    >
      <div className="ModalForm__Content">
        <h2>Ajout d'une organisation</h2>
        <button
          type="button"
          className="ModalForm__Content__CloseButton"
          onClick={handleCloseModalForm}
        >
          &times;
        </button>
        <FormTemplate
          className="ModalForm__Content__Form"
          formFields={formFieldAddOganization}
          buttonText="Envoyer"
          infoText="Les champs marqués d'un * sont obligatoires"
          handleOrganizationSubmission={handleOrganizationSubmission}
        />
      </div>
    </div>
  );
};

ModalForm.propTypes = {
  isOpenModalForm: PropTypes.bool.isRequired,
  handleCloseModalForm: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};
export default ModalForm;
