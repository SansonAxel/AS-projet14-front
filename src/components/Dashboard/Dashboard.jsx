import PropTypes from 'prop-types';
import './Dashboard.scss';
import Cookies from 'js-cookie';

import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-cycle
import Page from '../Page/Page';
import Loader from '../Loader/Loader';

const Dashboard = () => {
  const userString = Cookies.get('user');

  const userInformation = userString ? JSON.parse(userString) : null;

  const currentUserFirstname = userInformation ? userInformation.firstname : '';
  const currentUserLastname = userInformation ? userInformation.lastname : '';
  const currentUserRole = userInformation ? userInformation.roles[0] : '';
  const isTokenGenerated = useSelector((state) => state.user.token);
  const slicedRoleName = currentUserRole.slice(5).toLowerCase();

  if (isTokenGenerated === null) {
    return <Loader />;
  }
  return (
    <Page>
      <div className="Dashboard">
        {currentUserFirstname} {currentUserLastname}, bienvenue sur votre espace{' '}
        {slicedRoleName}.
      </div>
    </Page>
  );
};

Dashboard.propTypes = {};
export default Dashboard;
