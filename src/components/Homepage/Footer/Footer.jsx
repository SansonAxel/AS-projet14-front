import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = ({ handleDisplayLegalNotice }) => {
  return (
    <footer className="Footer">
      <button
        type="button"
        className="Footer__Link"
        onClick={handleDisplayLegalNotice}
      >
        Mentions légales
      </button>
    </footer>
  );
};

Footer.propTypes = {
  handleDisplayLegalNotice: PropTypes.func.isRequired,
};
export default Footer;
