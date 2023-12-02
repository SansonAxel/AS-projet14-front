import PropTypes from 'prop-types';
import './Feature.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Feature = ({ icon, content }) => {
  return (
    <div className="Homepage__Section__Features">
      <FontAwesomeIcon
        icon={icon}
        className="Homepage__Section__Features__Icon"
      />
      <p>{content}</p>
    </div>
  );
};

Feature.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  content: PropTypes.string.isRequired,
};
export default Feature;
