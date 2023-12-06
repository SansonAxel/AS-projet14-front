import PropTypes from 'prop-types';
import './AppHeader.scss';

const AppHeader = () => {
  return (
    <header className="AppHeader">
      <div className="AppHeader__Title">
        <h1>Current page</h1>
      </div>
      <div className="AppHeader__Content">
        <p>
          Name - <span>Role</span>
        </p>
      </div>
    </header>
  );
};

AppHeader.propTypes = {};
export default AppHeader;
