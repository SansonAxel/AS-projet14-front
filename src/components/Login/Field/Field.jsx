import PropTypes from 'prop-types';
import './Field.scss';

const Field = ({ name, type, placeholder, onChange, value }) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div className="Field">
      <label htmlFor={inputId}>{placeholder}</label>

      <input
        type={type}
        className="Field__Input"
        id={inputId}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  value: '',
  type: 'text',
};
export default Field;
