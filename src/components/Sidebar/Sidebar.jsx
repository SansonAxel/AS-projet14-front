import PropTypes from 'prop-types';
import './Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faChevronRight,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isSidebarOpened, toggleSidebar, isDesktop }) => {
  return (
    <>
      {/* BURGER button (mobile / tablet views */}
      {!isDesktop && (
        <button
          type="button"
          className="Sidebar__Trigger"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}

      {/* CHEVRON button (desktop view) */}
      {!isSidebarOpened && isDesktop && (
        <button
          type="button"
          className="Sidebar__Trigger"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}

      <nav
        className={`Sidebar ${
          isSidebarOpened ? 'Sidebar--Opened' : 'Sidebar--Closed'
        }`}
      >
        {isSidebarOpened && (
          <button
            type="button"
            className="Sidebar__CloseButton"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
        <a to="__blank" className="Sidebar__Item">
          hip
        </a>
        <a to="__blank" className="Sidebar__Item">
          hop
        </a>
        {/* Ajoutez d'autres éléments de la sidebar ici */}
      </nav>
    </>
  );
};

Sidebar.propTypes = {
  isSidebarOpened: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  isDesktop: PropTypes.bool.isRequired,
};
export default Sidebar;
