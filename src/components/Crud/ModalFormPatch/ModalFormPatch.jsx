/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

import { useState } from 'react';
import './ModalFormPatch.scss';
import { formFieldAddOganization } from '../../../formsConfig/formFieldsConfig';
import FormTemplate from '../../FormTemplate/FormTemplate';
import { useGetOrganizationQuery } from '../../../services/projectApi';

const ModalFormPatch = ({
  isOpenModalFormPatch,
  handleCloseModalFormPatch,
  refetch,
  patchItemId,
}) => {
  // const handleOrganizationSubmission = async (values) => {
  //   // Call the addOrganization mutation
  //   addOrganization(values)
  //     .unwrap()
  //     .then((response) => {
  //       // Handle the response if needed
  //       console.log(response);
  //       // Close the modal form
  //       handleCloseModalFormPatch();
  //       refetch();
  //     })
  //     .catch((errors) => {
  //       console.error('Error adding organization:', errors);
  //       // Handle the error if needed
  //     });
  // };

  return (
    <div
      className="ModalFormPatch"
      style={{ display: isOpenModalFormPatch ? 'block' : 'none' }}
    >
      <div className="ModalFormPatch__Content">
        <h2>{`Modification de l'association id ${patchItemId}`}</h2>

        <button
          type="button"
          className="ModalFormPatch__Content__CloseButton"
          onClick={handleCloseModalFormPatch}
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
  isOpenModalFormPatch: PropTypes.bool.isRequired,
  handleCloseModalFormPatch: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
  patchItemId: PropTypes.number,
};

ModalFormPatch.defaultProps = {
  patchItemId: 0,
};
export default ModalFormPatch;
