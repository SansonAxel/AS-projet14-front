import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.scss';
import HomeMenu from '../HomeMenu/HomeMenu';

const Header = ({
  onScrollInformations,
  onScrollRegistration,
  handleDisplayLegalNotice,
}) => {
  return (
    <header className="Header">
      <HomeMenu
        onScrollInformations={onScrollInformations}
        onScrollRegistration={onScrollRegistration}
        handleDisplayLegalNotice={handleDisplayLegalNotice}
      />
      <Link className="Header__Link" to="/login">
        Tableau de bord
      </Link>
    </header>
  );
};

Header.propTypes = {
  onScrollInformations: PropTypes.func.isRequired,
  onScrollRegistration: PropTypes.func.isRequired,
  handleDisplayLegalNotice: PropTypes.func.isRequired,
};
export default Header;
