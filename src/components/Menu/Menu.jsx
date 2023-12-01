import PropTypes from 'prop-types';
import './Menu.scss';

// TODO à dynamiser et mieux styliser

const Menu = () => {
  return (
    <nav className="Menu">
      <input id="Menu__Toggle" type="checkbox" />
      <label className="Menu__Button" htmlFor="Menu__Toggle">
        <span />
      </label>

      <ul className="Menu__Container">
        <li>
          <a className="Menu__Item" to="/">
            À propos
          </a>
        </li>
        <li>
          <a className="Menu__Item" to="/">
            Notre application
          </a>
        </li>
        <li>
          <a className="Menu__Item" to="/">
            Notre équipe
          </a>
        </li>
        <li>
          <a className="Menu__Item" to="/">
            Informez-vous
          </a>
        </li>
        <li>
          <a className="Menu__Item" to="/">
            Inscrivez-vous
          </a>
        </li>
        <li>
          <a className="Menu__Item" to="/">
            Mentions légales
          </a>
        </li>
      </ul>
    </nav>
  );
};

Menu.propTypes = {};
export default Menu;
