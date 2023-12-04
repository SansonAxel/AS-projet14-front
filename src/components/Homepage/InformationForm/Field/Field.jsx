import PropTypes from 'prop-types';
import './Field.scss';

const Field = ({ value, type, name, placeholder, onChange }) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div className="Field">
      <label htmlFor={inputId} className="Field__Label">
        {placeholder}
      </label>
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={handleChange}
          id={inputId}
          className="Field__Input Field__Textarea"
          name={name}
        />
      ) : (
        <input
          value={value}
          onChange={handleChange}
          id={inputId}
          type={type}
          className="Field__Input"
          placeholder={placeholder}
          name={name}
        />
      )}
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

// Default props value
Field.defaultProps = {
  value: '',
  type: 'text',
};
export default Field;
