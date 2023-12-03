import PropTypes from 'prop-types';
import './Header.scss';
import Menu from '../../Menu/Menu';

const Header = () => {
  return (
    <header className="Header">
      <Menu />
      <a className="Header__Link" to="/">
        Tableau de bord
      </a>
    </header>
  );
};

Header.propTypes = {};
export default Header;
