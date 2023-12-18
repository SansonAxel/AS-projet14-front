/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import './FormTemplate.scss';

const FormTemplate = ({
  formFields,
  infoText,
  buttonText,
  handleLoginSubmission,
  handleSubmission,
  handlePatch,
  dataObject,
  currentEntityName,
}) => {
  // Create a formik object to manage form state and actions
  const formik = useFormik({
    // Set initial form values based on formFields (cf /src/datas/formFieldsConfig.js)
    initialValues: dataObject
      ? formFields.reduce((accumulator, field) => {
          accumulator[field.name] =
            dataObject[field.name] || field.initialValue || '';
          return accumulator;
        }, {})
      : {},
    // Use the validation schema we created
    validationSchema: Yup.object({
      address: Yup.string()
        .max(255, 'Ne doit pas dépasser 255 caractères')
        .required('Champ requis'),
      categoriesId: Yup.number().required('Champ requis'),
      conservationType: Yup.string()
        .max(100, 'Ne doit pas dépasser 100 caractères')
        .required('Champ requis'),
      createdAt: Yup.date(),
      description: Yup.string().max(300, 'Ne doit pas dépasser 300 caractères'),
      email: Yup.string()
        .email('Adresse mail non valide')
        .max(180, 'Ne doit pas dépasser 180 caractères')
        .required('Champ requis'),
      expirationDate: Yup.date(),
      firstName: Yup.string()
        .max(100, 'Ne doit pas dépasser 100 caractères')
        .required('Champ requis'),
      lastName: Yup.string()
        .max(100, 'Ne doit pas dépasser 100 caractères')
        .required('Champ requis'),
      message: Yup.string()
        .max(1000, 'Message limité à 1000 caractères')
        .required('Champ requis'),
      name: Yup.string()
        .max(100, 'Ne doit pas dépasser 100 caractères')
        .required('Champ requis'),
      organizationName: Yup.string()
        .max(100, 'Ne doit pas dépasser 100 caractères')
        .required('Champ requis'),
      organizationType: Yup.string()
        .max(255, 'Ne doit pas dépasser 255 caractères')
        .required('Champ requis'),
      phoneNumber: Yup.string().max(20, 'Ne doit pas dépasser 20 caractères'),
      picture: Yup.string().max(255, 'Ne doit pas dépasser 255 caractères'),
      price: Yup.number().max(9999, 'Trop long').required('Champ requis'),
      quantity: Yup.number().max(9999, 'Trop long'),
      siret: Yup.string()
        .max(9, 'Ne doit pas dépasser 9 caractères')
        .required('Champ requis'),
      siren: Yup.string()
        .max(9, 'Ne doit pas dépasser 9 caractères')
        .required('Champ requis'),
      status:
        currentEntityName === 'organizationConfig'
          ? Yup.number().required('Champ requis')
          : Yup.bool(),
      structuresId: Yup.number().required('Champ requis'),
      weight: Yup.number().max(9999, 'Trop long').required('Champ requis'),
    }),

    // Handle form submission
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      handleLoginSubmission(values);
      handleSubmission(values);
      handlePatch(values);
    },
  });

  const prevDataObjectRef = useRef(null);

  /* Editing initialvalues (to prevent the delay between state changes) */
  useEffect(() => {
    if (dataObject !== prevDataObjectRef.current) {
      if (dataObject) {
        formik.setValues((prevValues) => ({
          ...prevValues,
          ...formFields.reduce((accumulator, field) => {
            accumulator[field.name] = dataObject[field.name] || '';
            return accumulator;
          }, {}),
        }));
      }
    }
    prevDataObjectRef.current = dataObject;
  }, [dataObject, formik.setValues, prevDataObjectRef, formFields, formik]);

  // Updates ref
  useEffect(() => {
    prevDataObjectRef.current = dataObject;
  }, [dataObject]);
  return (
    // Render the form with input fields and validation messages
    <form onSubmit={formik.handleSubmit} className="Form">
      {formFields.map((field) => {
        const commonProps = {
          id: field.name,
          name: field.name,
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
        };
        return (
          // Map over each form field and create corresponding input elements
          <div key={field.name} className="Form__Element">
            <label htmlFor={field.name} className="Form__Element__Label">
              {field.label}
            </label>
            {/* Use a checkbox input for 'checkbox' type, otherwise use a text input */}
            {field.type === 'checkbox' && (
              <input
                {...commonProps}
                className="Form__Element__Checkbox"
                type="checkbox"
                checked={formik.values[field.name]}
              />
            )}
            {field.type === 'textarea' && (
              <textarea
                {...commonProps}
                className="Form__Element__Textarea"
                value={formik.values[field.name]}
              />
            )}
            {field.type !== 'checkbox' && field.type !== 'textarea' && (
              <input
                {...commonProps}
                className="Form__Element__Input"
                type={field.type}
                value={formik.values[field.name]}
              />
            )}
            {/* Display validation error if the field has been touched and there's an error */}
            {formik.touched[field.name] && formik.errors[field.name] && (
              <div className="Form__Element__Error">
                {formik.errors[field.name]}
              </div>
            )}
          </div>
        );
      })}
      <p className="Form__Info">{infoText}</p>
      <button type="submit" className="Form__Submit">
        {buttonText}
      </button>
    </form>
  );
};

FormTemplate.propTypes = {
  formFields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string,
      initialValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
        PropTypes.instanceOf(Date),
      ]),
      validation: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
        PropTypes.instanceOf(Date),
      ]),
    })
  ),
  infoText: PropTypes.string,
  buttonText: PropTypes.string,
  handleLoginSubmission: PropTypes.func,
  handleSubmission: PropTypes.func,
  handlePatch: PropTypes.func,
  dataObject: PropTypes.objectOf(PropTypes.any),
  currentEntityName: PropTypes.string,
};

FormTemplate.defaultProps = {
  infoText: '',
  buttonText: '',
  handleLoginSubmission: () => {},
  handleSubmission: () => {},
  handlePatch: () => {},
  dataObject: {},
  formFields: [],
  currentEntityName: '',
};

export default FormTemplate;
