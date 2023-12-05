import { useState } from 'react';
import PropTypes from 'prop-types';
import './HomeMenu.scss';

import { HashLink } from 'react-router-hash-link';

const Menu = ({
  onScrollInformations,
  onScrollRegistration,
  handleDisplayLegalNotice,
}) => {
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

        <HashLink
          className="Menu__Item"
          smooth
          to="/#presentation"
          onClick={handleCloseNav}
        >
          À propos
        </HashLink>

        <HashLink
          className="Menu__Item"
          smooth
          to="/#features"
          onClick={handleCloseNav}
        >
          Notre application
        </HashLink>

        <HashLink
          className="Menu__Item"
          smooth
          to="/#team"
          onClick={handleCloseNav}
        >
          Notre équipe
        </HashLink>

        <HashLink
          className="Menu__Item"
          smooth
          to="/#informations"
          onClick={() => {
            onScrollInformations();
            handleCloseNav();
          }}
        >
          Informez-vous
        </HashLink>

        <HashLink
          className="Menu__Item"
          smooth
          to="/#registration"
          onClick={() => {
            onScrollRegistration();
            handleCloseNav();
          }}
        >
          Inscrivez-vous
        </HashLink>

        <HashLink
          className="Menu__Item"
          to="/#legal-notice"
          onClick={handleDisplayLegalNotice}
        >
          Mentions légales
        </HashLink>
      </nav>
    </>
  );
};

Menu.propTypes = {
  onScrollInformations: PropTypes.func.isRequired,
  onScrollRegistration: PropTypes.func.isRequired,
  handleDisplayLegalNotice: PropTypes.func.isRequired,
};
export default Menu;
