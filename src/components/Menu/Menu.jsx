import { useState } from 'react';
import PropTypes from 'prop-types';
import './Menu.scss';

const Menu = () => {
  const [navWidth, setNavWidth] = useState('0');

  const handleOpenNav = () => {
    setNavWidth('250');
  };

  const handleCloseNav = () => {
    setNavWidth('0');
  };
  return (
    <>
      <button type="button" className="Open" onClick={handleOpenNav}>
        &#9776;
      </button>
      <nav className="Menu" style={{ width: `${navWidth}px` }}>
        <button
          type="button"
          className="Menu__CloseButton"
          onClick={handleCloseNav}
        >
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
    </>
  );
};

Menu.propTypes = {};
export default Menu;
