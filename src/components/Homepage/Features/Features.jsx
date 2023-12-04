import PropTypes from 'prop-types';
import './Features.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Feature = ({ featuresData }) => {
  return (
    <section className="Homepage__Section" id="features">
      <h2>Nos atouts</h2>

      {featuresData.map((feature) => (
        <div className="Homepage__Section__Feature" key={feature.key}>
          <FontAwesomeIcon
            icon={feature.icon}
            className="Homepage__Section__Feature__Icon"
          />
          <p>{feature.content}</p>
        </div>
      ))}
    </section>
  );
};

Feature.propTypes = {
  featuresData: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object,
      ]).isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default Feature;
