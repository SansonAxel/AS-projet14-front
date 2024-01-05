import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';

import './Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faChevronRight,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { handleLogout } from '../../actions/user';
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import routesConfig from '../../routes/routes';

const Sidebar = ({ isSidebarOpened, toggleSidebar, isDesktop }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    Cookies.remove('token');
    Cookies.remove('user');
    dispatch(handleLogout());
    navigate('/login');
  };

  return (
    <>
      {/* BURGER button (mobile / tablet views) */}
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
        {routesConfig
          .filter((route) => route.isPrivate)
          .map((route) => (
            <Link key={route.name} to={route.path} className="Sidebar__Item">
              {route.name}
            </Link>
          ))}
        <button
          type="button"
          className="Sidebar__Button"
          onClick={handleLogoutClick}
        >
          Déconnexion
        </button>
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
