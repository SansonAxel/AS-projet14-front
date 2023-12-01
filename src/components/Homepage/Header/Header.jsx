import PropTypes from 'prop-types';
import './Header.scss';
import Menu from '../../Menu/Menu';

const Header = () => {
  return (
    <div className="Header">
      <Menu />
      <a className="Header__Link" to="/">
        Tableau de bord
      </a>
    </div>
  );
};

Header.propTypes = {};
export default Header;
