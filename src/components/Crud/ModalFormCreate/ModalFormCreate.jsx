/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

import './ModalFormCreate.scss';
import { useLocation, useNavigate } from 'react-router-dom';
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
  setSnackbar,
}) => {
  const location = useLocation();
  const currentEntity = location.pathname.split('/')[1];
  let mutation;
  let formFieldsConfig;

  /* IIFE */
  (() => {
    switch (currentEntity) {
      case 'marques':
        mutation = projectApi.useAddBrandsMutation();
        formFieldsConfig = brandFormConfig;
        break;
      case 'categories':
        mutation = projectApi.useAddCategoriesMutation();
        formFieldsConfig = categoryFormConfig;
        break;
      case 'associations':
        mutation = projectApi.useAddOrganizationsMutation();
        formFieldsConfig = organizationFormConfig;
        break;
      case 'produits':
        mutation = projectApi.useAddProductsMutation();
        formFieldsConfig = productFormConfig;
        break;
      case 'antennes':
        mutation = projectApi.useAddStructuresMutation();
        formFieldsConfig = structureFormConfig;
        break;
      case 'utilisateurs':
        mutation = projectApi.useAddUsersMutation();
        formFieldsConfig = userFormConfig;
        break;
      default:
        break;
    }
  })();
  const [create] = mutation;

  const handleSubmission = async (values) => {
    try {
      const response = await create(values).unwrap();
      handleCloseModalFormCreate();
      refetch();
      if (response.message === 'Creation successful') {
        setSnackbar({
          children: `Ajout réussi`,
          severity: 'success',
        });
      }
    } catch (errors) {
      setSnackbar({
        children: 'Erreur lors de la validation du formulaire',
        severity: 'error',
      });
    }
  };

  return (
    <div
      className="ModalFormCreate"
      style={{ display: isOpenModalFormCreate ? 'block' : 'none' }}
    >
      <div className="ModalFormCreate__Content">
        <h2>{`Création ${currentEntity}`}</h2>

        <button
          type="button"
          className="ModalFormCreate__Content__CloseButton"
          onClick={handleCloseModalFormCreate}
        >
          &times;
        </button>
        <FormTemplate
          className="ModalFormCreate__Content__Form"
          formFields={formFieldsConfig}
          buttonText="Enregistrer"
          infoText="Les champs marqués d'un * sont obligatoires"
          handleSubmission={handleSubmission}
          currentEntityName={currentEntity}
        />
      </div>
    </div>
  );
};

ModalFormCreate.propTypes = {
  isOpenModalFormCreate: PropTypes.bool.isRequired,
  handleCloseModalFormCreate: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
  setSnackbar: PropTypes.func.isRequired,
};
export default ModalFormCreate;
