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
  // When used, returns a boolean if a nested object is modified
  function isModifyingNestedObject(field, values) {
    return field.name in values && typeof values[field.name] === 'string';
  }

  // When used, returns a boolean if a nested object should be patched
  function needsNestedPatch(convertedValues) {
    return Object.values(convertedValues).some(
      (value) => typeof value === 'object' && value !== null && 'id' in value
    );
  }
  // Creates a validation schema using Yup based on formFields
  const validationSchema = Yup.object().shape(
    formFields.reduce((accumulator, field) => {
      accumulator[field.name] = field.validation || null;
      return accumulator;
    }, {})
  );
  // Create a formik object to manage form state and actions
  const formik = useFormik({
    initialValues: dataObject
      ? formFields.reduce((accumulator, field) => {
          accumulator[field.name] = dataObject[field.name] || '';
          return accumulator;
        }, {})
      : {},

    validationSchema,
    // Handle form submission
    onSubmit: (values, { resetForm }) => {
      const convertedValues = formFields.reduce((acc, field) => {
        switch (field.valueType) {
          case 'number':
            acc[field.name] = parseInt(values[field.name], 10);
            break;
          case 'boolean':
            acc[field.name] =
              String(values[field.name]).toLowerCase() === 'true';
            break;
          case 'array':
            acc[field.name] = Array.isArray(values[field.name])
              ? values[field.name]
              : values[field.name].split(',').map((item) => item.trim());
            break;
          case 'object':
            acc[field.name] = isModifyingNestedObject(field, values)
              ? { id: parseInt(values[field.name], 10) }
              : values[field.name];
            break;
          default:
            acc[field.name] = values[field.name];
            break;
        }
        return acc;
      }, {});
      // Handle form submission with the updated 'status' value
      handleLoginSubmission(values);
      handleSubmission(convertedValues);
      if (needsNestedPatch(convertedValues)) {
        handlePatch(values);
      }
      handlePatch(convertedValues);
      resetForm();
    },
  });

  const prevDataObjectRef = useRef(null);

  useEffect(() => {
    if (dataObject !== prevDataObjectRef.current && dataObject) {
      formik.setValues((prevValues) => ({
        ...prevValues,
        ...formFields.reduce((accumulator, field) => {
          accumulator[field.name] = dataObject[field.name] || '';
          return accumulator;
        }, {}),
      }));
    }
    prevDataObjectRef.current = dataObject;
  }, [dataObject, prevDataObjectRef, formFields, formik]);

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
            {/* Use a textarea for 'textarea', select for 'select', otherwise use a text input */}
            {field.type === 'textarea' && (
              <textarea
                {...commonProps}
                className="Form__Element__Textarea"
                value={formik.values[field.name]}
              />
            )}
            {field.type === 'select' && (
              <select
                {...commonProps}
                className="Form__Element__Select"
                value={
                  typeof formik.values[field.name] === 'object'
                    ? formik.values[field.name].id
                    : formik.values[field.name]
                }
              >
                <option value="">Choisissez</option>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}

            {field.type !== 'textarea' && field.type !== 'select' && (
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
