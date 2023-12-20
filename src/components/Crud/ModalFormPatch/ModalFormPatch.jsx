/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import './ModalFormPatch.scss';
import FormTemplate from '../../FormTemplate/FormTemplate';
import { closeModal } from '../../../actions/modalActions';
import { projectApi } from '../../../services/projectApi';
import brandFormConfig from '../../../formsConfig/brandFormConfig';
import categoryFormConfig from '../../../formsConfig/categoryFormConfig';
import organizationFormConfig from '../../../formsConfig/organizationFormConfig';
import productFormConfig from '../../../formsConfig/productFormConfig';
import structureFormConfig from '../../../formsConfig/structureFormConfig';
import userFormConfig from '../../../formsConfig/userFormConfig';

const ModalFormPatch = ({
  isOpenModal,
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
        mutation = projectApi.useUpdateBrandsMutation();
        entity = 'brand';
        formFieldsConfig = brandFormConfig;
        break;
      case 'categories':
        mutation = projectApi.useUpdateCategoriesMutation();
        entity = 'category';
        formFieldsConfig = categoryFormConfig;
        break;
      case 'organizations':
        mutation = projectApi.useUpdateOrganizationsMutation();
        entity = 'organization';
        formFieldsConfig = organizationFormConfig;
        break;
      case 'products':
        mutation = projectApi.useUpdateProductsMutation();
        entity = 'product';
        formFieldsConfig = productFormConfig;
        break;
      case 'structures':
        mutation = projectApi.useUpdateStructuresMutation();
        entity = 'structure';
        formFieldsConfig = structureFormConfig;
        break;
      case 'users':
        mutation = projectApi.useUpdateUsersMutation();
        entity = 'user';
        formFieldsConfig = userFormConfig;
        break;
      default:
        console.error(`Invalid entityType: ${entityType}`);
        break;
    }
  })();
  const entityFormFields = formFieldsConfig;
  // console.log(entityFormFields);

  // Utilisez directement les variables mutation et entity ici
  const [update, { isLoading: isUpdating }] = mutation;
  const dataObject = useSelector((state) => state.entities[entity]);

  // console.log(entityType);
  // console.log('modal', dataObject);
  const dispatch = useDispatch();
  const handlePatch = async (values) => {
    try {
      console.log(values);
      const response = await update({
        id: dataObject.id,
        ...values,
        fixedCacheKey: 'shared-update-post',
      });

      refetch();
      dispatch(closeModal());
      setSnackbar({
        children: `Modification réussie`,
        severity: 'success',
      });
    } catch (error) {
      setSnackbar({ children: 'Echec de la modification', severity: 'error' });
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
        <h2>{`Modification de  ${currentEntityName}`}</h2>

        <button
          type="button"
          className="ModalFormPatch__Content__CloseButton"
          onClick={() => dispatch(closeModal())}
        >
          &times;
        </button>
        <FormTemplate
          className="ModalFormPatch__Content__Form"
          formFields={entityFormFields}
          buttonText="Sauvegarder"
          infoText="Les champs marqués d'un * sont obligatoires"
          dataObject={dataObject}
          handlePatch={handlePatch}
          currentEntityName={currentEntityName}
        />
      </div>
    </div>
  );
};

ModalFormPatch.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  refetch: PropTypes.func.isRequired,
  currentEntityName: PropTypes.string.isRequired,
  entityType: PropTypes.string.isRequired,
  setSnackbar: PropTypes.func.isRequired,
};

export default ModalFormPatch;
