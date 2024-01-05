import PropTypes from 'prop-types';
import './Error.scss';
import Loader from '../Loader/Loader';

const Error = () => {
  return (
    <div className="Error">
      <Loader />
    </div>
  );
};

Error.propTypes = {};
export default Error;
