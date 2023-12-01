import PropTypes from 'prop-types';
import './InformationForm.scss';
import Field from './Field/Field';

const InformationForm = () => {
  return (
    <div className="InformationForm">
      <form className="InformationForm__Element">
        <Field />
      </form>
    </div>
  );
};

InformationForm.propTypes = {};
export default InformationForm;
