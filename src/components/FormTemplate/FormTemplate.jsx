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
}) => {
  // Creates a validation schema using Yup based on formFields
  const validationSchema = Yup.object().shape(
    formFields.reduce((accumulator, field) => {
      accumulator[field.name] = field.validation || null;
      return accumulator;
    }, {})
  );
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
    validationSchema,
    // Handle form submission
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
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
          id: `${field.name}-${field.id}`,
          name: field.name,
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
        };
        return (
          // Map over each form field and create corresponding input elements
          <div key={field.name} className="Form__Element">
            <label
              htmlFor={`${field.name}-${field.id}`}
              className="Form__Element__Label"
            >
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
