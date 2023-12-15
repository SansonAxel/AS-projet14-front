/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import './ModalFormPatch.scss';
import { formFieldOganization } from '../../../formsConfig/formFieldsConfig';
import FormTemplate from '../../FormTemplate/FormTemplate';
import { closeModal } from '../../../actions/modalActions';

const ModalFormPatch = ({ isOpenModal, refetch, patchItemId, dataObject }) => {
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
          formFields={formFieldOganization}
          buttonText="Envoyer"
          infoText="Les champs marqués d'un * sont obligatoires"
          dataObject={dataObject}
        />
      </div>
    </div>
  );
};

ModalFormPatch.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  refetch: PropTypes.func.isRequired,
  patchItemId: PropTypes.number,
  dataObject: PropTypes.objectOf(PropTypes.any),
};

ModalFormPatch.defaultProps = {
  patchItemId: 0,
  dataObject: {},
};
export default ModalFormPatch;
