/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import './ModalFormPatch.scss';
import { formFieldAddOganization } from '../../../formsConfig/formFieldsConfig';
import FormTemplate from '../../FormTemplate/FormTemplate';
import { closeModal } from '../../../actions/modalActions';

const ModalFormPatch = ({ isOpenModal, refetch, patchItemId }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="ModalFormPatch"
      style={{ display: isOpenModal ? 'block' : 'none' }}
    >
      <div className="ModalFormPatch__Content">
        <h2>{`Modification de l'association id ${patchItemId}`}</h2>

        <button
          type="button"
          className="ModalFormPatch__Content__CloseButton"
          onClick={() => dispatch(closeModal())}
        >
          &times;
        </button>
        <FormTemplate
          className="ModalFormPatch__Content__Form"
          formFields={formFieldAddOganization}
          buttonText="Envoyer"
          infoText="Les champs marqués d'un * sont obligatoires"
        />
      </div>
    </div>
  );
};

ModalFormPatch.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  refetch: PropTypes.func.isRequired,
  patchItemId: PropTypes.number,
};

ModalFormPatch.defaultProps = {
  patchItemId: 0,
};
export default ModalFormPatch;
