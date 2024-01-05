/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

import './ModalFormCreate.scss';
import FormTemplate from '../../FormTemplate/FormTemplate';
import { projectApi } from '../../../services/projectApi';
import brandFormConfig from '../../../formsConfig/brandFormConfig';
import categoryFormConfig from '../../../formsConfig/categoryFormConfig';
import organizationFormConfig from '../../../formsConfig/organizationFormConfig';
import productFormConfig from '../../../formsConfig/productFormConfig';
import structureFormConfig from '../../../formsConfig/structureFormConfig';
import userFormConfig from '../../../formsConfig/userFormConfig';

const ModalFormCreate = ({
  isOpenModalFormCreate,
  handleCloseModalFormCreate,
  refetch,
  currentEntityName,
  entityType,
  setSnackbar,
}) => {
  // Define the mutation hook directly in the component body
  let mutation;
  let entity;
  let formFieldsConfig;
  /* IIFE */
  (() => {
    switch (entityType) {
      case 'brands':
        mutation = projectApi.useAddBrandsMutation();
        entity = 'brand';
        formFieldsConfig = brandFormConfig;
        break;
      case 'categories':
        mutation = projectApi.useAddCategoriesMutation();
        entity = 'category';
        formFieldsConfig = categoryFormConfig;
        break;
      case 'organizations':
        mutation = projectApi.useAddOrganizationsMutation();
        entity = 'organization';
        formFieldsConfig = organizationFormConfig;
        break;
      case 'products':
        mutation = projectApi.useAddProductsMutation();
        entity = 'product';
        formFieldsConfig = productFormConfig;
        break;
      case 'structures':
        mutation = projectApi.useAddStructuresMutation();
        entity = 'structure';
        formFieldsConfig = structureFormConfig;
        break;
      case 'users':
        mutation = projectApi.useAddUsersMutation();
        entity = 'user';
        formFieldsConfig = userFormConfig;
        break;
      default:
        console.error(`Invalid entityType: ${entityType}`);
        break;
    }
  })();

  const [create] = mutation;

  const entityFormFields = formFieldsConfig;

  const handleSubmission = async (values) => {
    try {
      const response = await create(values).unwrap();
      refetch();
      handleCloseModalFormCreate();
      setSnackbar({
        children: `Ajout réussi`,
        severity: 'success',
      });
    } catch (errors) {
      setSnackbar({ children: errors.message, severity: 'error' });
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
          buttonText="Enregistrer"
          infoText="Les champs marqués d'un * sont obligatoires"
          handleSubmission={handleSubmission}
          currentEntityName={currentEntityName}
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
  setSnackbar: PropTypes.func.isRequired,
};
export default ModalFormCreate;
