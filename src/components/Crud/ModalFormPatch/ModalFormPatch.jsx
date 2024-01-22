/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import './ModalFormPatch.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import FormTemplate from '../../FormTemplate/FormTemplate';
import { closeModal } from '../../../actions/modalActions';
import { projectApi } from '../../../services/projectApi';
import brandFormConfig from '../../../formsConfig/brandFormConfig';
import categoryFormConfig from '../../../formsConfig/categoryFormConfig';
import organizationFormConfig from '../../../formsConfig/organizationFormConfig';
import productFormConfig from '../../../formsConfig/productFormConfig';
import structureFormConfig from '../../../formsConfig/structureFormConfig';
import userFormConfig from '../../../formsConfig/userFormConfig';

const ModalFormPatch = ({ isOpenModal, refetch, entityType, setSnackbar }) => {
  const location = useLocation();
  const currentEntity = location.pathname.split('/')[1];
  let mutation;
  let entity;
  let formFieldsConfig;
  const navigate = useNavigate();
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
      case 'structures':
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
        navigate('/error', {
          state: { error: `Type d'entité invalide: ${entityType}` },
        });
        break;
    }
  })();
  const entityFormFields = formFieldsConfig;
  const [update, { isLoading: isUpdating }] = mutation;
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
      setSnackbar({
        children: `Modification réussie`,
        severity: 'success',
      });
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
  entityType: PropTypes.string.isRequired,
  setSnackbar: PropTypes.func.isRequired,
};

export default ModalFormPatch;
