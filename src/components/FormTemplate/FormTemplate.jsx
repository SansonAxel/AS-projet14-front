/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import './FormTemplate.scss';

const FormTemplate = ({ formFields, infoText, buttonText }) => {
  // Create a validation schema using Yup based on formFields
  const validationSchema = Yup.object().shape(
    formFields.reduce((acc, field) => {
      // For each field, add its validation to the schema
      acc[field.name] = field.validation;
      return acc;
    }, {})
  );

  // Create a formik object to manage form state and actions
  const formik = useFormik({
    // Set initial form values based on formFields (cf /src/datas/formFieldsConfig.js)
    initialValues: formFields.reduce((acc, field) => {
      acc[field.name] = field.initialValue || ''; // Use initial value if provided, otherwise use an empty string
      return acc;
    }, {}),
    // Use the validation schema we created
    validationSchema,
    // Handle form submission
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
      initialValue: PropTypes.string,
      validation: PropTypes.instanceOf(Yup.string),
    })
  ),
  infoText: PropTypes.string,
  buttonText: PropTypes.string,
};

FormTemplate.defaultProps = {
  formFields: [],
  infoText: '',
  buttonText: '',
};

export default FormTemplate;
