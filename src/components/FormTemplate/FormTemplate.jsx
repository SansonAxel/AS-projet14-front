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
  function isModifyingNestedObject(field, values) {
    // Ajoute ta logique ici pour déterminer si le champ modifie un objet imbriqué
    // Par exemple, vérifie si le champ est une clé d'un objet imbriqué
    return field.name in values && typeof values[field.name] === 'string';
  }

  function shouldPatch(convertedValues) {
    // Ajoute ta logique ici pour déterminer si tu devrais appeler handlePatch
    // Par exemple, vérifie si l'une des valeurs modifiées est un objet imbriqué
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
    // Set initial form values based on formFields (cf /src/datas/formFieldsConfig.js)
    // initialValues: dataObject
    //   ? formFields.reduce((accumulator, field) => {
    //       accumulator[field.name] =
    //         dataObject[field.name] || field.initialValue || '';
    //       return accumulator;
    //     }, {})
    //   : {},

    initialValues: dataObject
      ? formFields.reduce((accumulator, field) => {
          if (field.extractId && dataObject[field.name]) {
            // Si le champ nécessite l'extraction de l'id
            accumulator[field.name] =
              dataObject[field.name].id || field.initialValue || '';
          } else {
            accumulator[field.name] =
              dataObject[field.name] || field.initialValue || '';
          }
          return accumulator;
        }, {})
      : {},

    validationSchema,
    // Handle form submission
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log('values', values);
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
      console.log('converted values', convertedValues);

      // Handle form submission with the updated 'status' value
      handleLoginSubmission(values);
      handleSubmission(convertedValues);
      if (shouldPatch(convertedValues)) {
        handlePatch(values);
      }
      handlePatch(convertedValues);
    },
  });

  const prevDataObjectRef = useRef(null);

  /* Editing initialvalues (to prevent the delay between state changes) */
  // useEffect(() => {
  //   if (dataObject !== prevDataObjectRef.current) {
  //     if (dataObject) {
  //       formik.setValues((prevValues) => ({
  //         ...prevValues,
  //         ...formFields.reduce((accumulator, field) => {
  //           accumulator[field.name] = dataObject[field.name] || '';
  //           return accumulator;
  //         }, {}),
  //       }));
  //     }
  //   }
  //   prevDataObjectRef.current = dataObject;
  // }, [dataObject, formik.setValues, prevDataObjectRef, formFields, formik]);
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
            {/* Use a checkbox input for 'checkbox' type, textarea for 'textarea', select for 'select', otherwise use a text input */}
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

            {field.type !== 'checkbox' &&
              field.type !== 'textarea' &&
              field.type !== 'select' && (
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
