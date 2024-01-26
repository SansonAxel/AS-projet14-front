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
  currentEntity,
  setSnackbar,
}) => {
  let mutation;
  let entity;
  let formFieldsConfig;
  /* IIFE */
  (() => {
    switch (currentEntity) {
      case 'marques':
        mutation = projectApi.useUpdateBrandsMutation();
        entity = 'brand';
        formFieldsConfig = brandFormConfig;
        break;
      case 'categories':
        mutation = projectApi.useUpdateCategoriesMutation();
        entity = 'category';
        formFieldsConfig = categoryFormConfig;
        break;
      case 'associations':
        mutation = projectApi.useUpdateOrganizationsMutation();
        entity = 'organization';
        formFieldsConfig = organizationFormConfig;
        break;
      case 'produits':
        mutation = projectApi.useUpdateProductsMutation();
        entity = 'product';
        formFieldsConfig = productFormConfig;
        break;
      case 'antennes':
        mutation = projectApi.useUpdateStructuresMutation();
        entity = 'structure';
        formFieldsConfig = structureFormConfig;
        break;
      case 'utilisateurs':
        mutation = projectApi.useUpdateUsersMutation();
        entity = 'user';
        formFieldsConfig = userFormConfig;
        break;
      default:
        break;
    }
  })();
  const entityFormFields = formFieldsConfig;
  const [update] = mutation;
  const dataObject = useSelector((state) => state.entities[entity]);
  const dispatch = useDispatch();
  const handlePatch = async (values) => {
    try {
      const response = await update({
        id: dataObject.id,
        ...values,
        fixedCacheKey: 'shared-update-post',
      });
      refetch();
      dispatch(closeModal());
      if (response.data.message === 'Update successfull') {
        setSnackbar({
          children: `Modification réussie`,
          severity: 'success',
        });
      }
    } catch (error) {
      setSnackbar({ children: 'Echec de la modification', severity: 'error' });
    }
  };

  return (
    <div
      className="ModalFormPatch"
      style={{ display: isOpenModal ? 'block' : 'none' }}
    >
      <div className="ModalFormPatch__Content">
        <h2>{`Modification de ${currentEntity}`}</h2>

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
          buttonText="Enregistrer"
          infoText="Les champs marqués d'un * sont obligatoires"
          dataObject={dataObject}
          handlePatch={handlePatch}
        />
      </div>
    </div>
  );
};

ModalFormPatch.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  refetch: PropTypes.func.isRequired,
  currentEntity: PropTypes.string.isRequired,
  setSnackbar: PropTypes.func.isRequired,
};

export default ModalFormPatch;
