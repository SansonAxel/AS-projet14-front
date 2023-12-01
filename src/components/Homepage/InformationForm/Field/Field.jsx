import PropTypes from 'prop-types';
import './Field.scss';

const Field = () => {
  return (
    <div className="Field">
      <input
        type="text"
        id="lastname"
        placeholder="Dupont"
        className="Field__Input"
      />
      <label htmlFor="lastname">Nom</label>
    </div>
  );
};

Field.propTypes = {};
export default Field;
