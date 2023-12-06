import PropTypes from 'prop-types';
import './AppHeader.scss';

const AppHeader = () => {
  return (
    <div className="AppHeader">
      <h1>Current page</h1>
      <p>
        Name - <span>Role</span>
      </p>
    </div>
  );
};

AppHeader.propTypes = {};
export default AppHeader;
