import './AppHeader.scss';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import routesConfig from '../../routes/routes';

const AppHeader = () => {
  const userString = Cookies.get('user');

  // Parse user information
  const userInformation = userString ? JSON.parse(userString) : null;

  // Now you can access user properties like firstname, lastname, role, etc.
  const currentUserFirstname = userInformation ? userInformation.firstname : '';
  const currentUserLastname = userInformation ? userInformation.lastname : '';
  const currentUserRole = userInformation ? userInformation.roles[0] : '';
  const slicedRoleName = currentUserRole.slice(5).toLowerCase();

  const location = useLocation();
  const currentPath = location.pathname;
  const getPageName = (path) => {
    const route = routesConfig.find(
      (currentRoute) => currentRoute.path === path
    );
    return route ? route.name : 'Autre page';
  };
  return (
    <header className="AppHeader">
      <div className="AppHeader__Title">
        <h1>{getPageName(currentPath)}</h1>
      </div>
      <div className="AppHeader__Content">
        <p>
          {`${currentUserFirstname} ${currentUserLastname}`} -{' '}
          <span>{`${slicedRoleName}`}</span>
        </p>
      </div>
    </header>
  );
};

AppHeader.propTypes = {};
export default AppHeader;
