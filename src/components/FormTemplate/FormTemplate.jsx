import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const FormTemplate = ({ formFields, buttonText }) => {
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
    <form onSubmit={formik.handleSubmit}>
      {formFields.map((field) => (
        // Map over each form field and create corresponding input elements
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          {/* Use a checkbox input for 'checkbox' type, otherwise use a text input */}
          {field.type === 'checkbox' ? (
            <input
              type="checkbox"
              id={field.name}
              name={field.name}
              checked={formik.values[field.name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          ) : (
            <input
              type={field.type || 'text'} // Use provided type or default to 'text'
              id={field.name}
              name={field.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[field.name]}
            />
          )}
          {/* Display validation error if the field has been touched and there's an error */}
          {formik.touched[field.name] && formik.errors[field.name] ? (
            <div className="error">{formik.errors[field.name]}</div>
          ) : null}
        </div>
      ))}
      <button type="submit">{buttonText}</button>
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
  buttonText: PropTypes.string,
};

FormTemplate.defaultProps = {
  formFields: [],
  buttonText: '',
};

export default FormTemplate;
