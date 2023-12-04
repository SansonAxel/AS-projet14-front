import PropTypes from 'prop-types';
import './Header.scss';
import Menu from '../../Menu/Menu';

const Header = ({ onScrollInformations, onScrollRegistration }) => {
  return (
    <header className="Header">
      <Menu
        onScrollInformations={onScrollInformations}
        onScrollRegistration={onScrollRegistration}
      />
      <a className="Header__Link" to="/">
        Tableau de bord
      </a>
    </header>
  );
};

Header.propTypes = {
  onScrollInformations: PropTypes.func.isRequired,
  onScrollRegistration: PropTypes.func.isRequired,
};
export default Header;
