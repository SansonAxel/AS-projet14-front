/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

import './ModalFormCreate.scss';
import { formFieldsCreatePatch } from '../../../formsConfig/formFieldsConfig';
import FormTemplate from '../../FormTemplate/FormTemplate';
import {
  projectApi,
  useAddOrganizationMutation,
} from '../../../services/projectApi';

const ModalFormCreate = ({
  isOpenModalFormCreate,
  handleCloseModalFormCreate,
  refetch,
  currentEntityName,
  entityType,
}) => {
  const entityFormFields = formFieldsCreatePatch[entityType];
  // Define the mutation hook directly in the component body
  const [create] = (() => {
    switch (entityType) {
      case 'brands':
        return projectApi.useAddBrandMutation();
      case 'categories':
        return projectApi.useAddCategoryMutation();
      case 'organizations':
        return projectApi.useAddOrganizationMutation();
      case 'products':
        return projectApi.useAddProductMutation();
      case 'structures':
        return projectApi.useAddStructureMutation();
      case 'users':
        return projectApi.useAddUserMutation();
      default:
        console.error(`Invalid entityType: ${entityType}`);
        return [() => {}]; // Provide a dummy function to avoid errors
    }
  })();

  const handleSubmission = async (values) => {
    try {
      console.log('Request Payload:', values);
      const response = await create(values).unwrap();
      refetch();
      handleCloseModalFormCreate();
    } catch (errors) {
      console.error(`Error adding ${currentEntityName}:`, errors);
      // Handle the error if needed
    }
  };

  return (
    <div
      className="ModalFormCreate"
      style={{ display: isOpenModalFormCreate ? 'block' : 'none' }}
    >
      <div className="ModalFormCreate__Content">
        <h2>{`Création ${currentEntityName}`}</h2>

        <button
          type="button"
          className="ModalFormCreate__Content__CloseButton"
          onClick={handleCloseModalFormCreate}
        >
          &times;
        </button>
        <FormTemplate
          className="ModalFormCreate__Content__Form"
          formFields={entityFormFields}
          buttonText="Envoyer"
          infoText="Les champs marqués d'un * sont obligatoires"
          handleSubmission={handleSubmission}
        />
      </div>
    </div>
  );
};

ModalFormCreate.propTypes = {
  isOpenModalFormCreate: PropTypes.bool.isRequired,
  handleCloseModalFormCreate: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
  currentEntityName: PropTypes.string.isRequired,
  entityType: PropTypes.string.isRequired,
};
export default ModalFormCreate;
