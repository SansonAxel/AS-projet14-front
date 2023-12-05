import PropTypes from 'prop-types';
import './Dashboard.scss';
import Page from '../Page/Page';
import AppHeader from '../AppHeader/AppHeader';

const Dashboard = () => {
  return (
    <Page>
      <AppHeader />
      <div className="Dashboard">Dashboard</div>
    </Page>
  );
};

Dashboard.propTypes = {};
export default Dashboard;
