import PropTypes from 'prop-types';
import './Menu.scss';

// TODO à dynamiser et mieux styliser

const Menu = () => {
  return (
    <nav className="Menu">
      <button type="button" to="/" className="closebtn">
        &times;
      </button>

      <a className="Menu__Item" to="/">
        À propos
      </a>

      <a className="Menu__Item" to="/">
        Notre application
      </a>

      <a className="Menu__Item" to="/">
        Notre équipe
      </a>

      <a className="Menu__Item" to="/">
        Informez-vous
      </a>

      <a className="Menu__Item" to="/">
        Inscrivez-vous
      </a>

      <a className="Menu__Item" to="/">
        Mentions légales
      </a>
    </nav>
  );
};

Menu.propTypes = {};
export default Menu;
