import PropTypes from 'prop-types';
import './Dashboard.scss';
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-cycle
import Page from '../Page/Page';
import Loader from '../Loader/Loader';

const Dashboard = () => {
  const isTokenGenerated = useSelector((state) => state.user.token);
  if (isTokenGenerated === null) {
    return <Loader />;
  }
  return (
    <Page>
      <div className="Dashboard">Dashboard</div>
    </Page>
  );
};

Dashboard.propTypes = {};
export default Dashboard;
