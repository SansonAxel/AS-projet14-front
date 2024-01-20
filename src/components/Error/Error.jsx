/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import Cookies from 'js-cookie';

import './Error.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Error = ({ errorMessage, errorType }) => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(7);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      if (errorType === 401) {
        navigate('/login');
        Cookies.remove('user');
      } else {
        navigate('/dashboard');
      }
    }
  }, [timer, navigate, errorType]);

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 7 ? '0' : ''}${seconds}`;
  };

  const progressBarValue = 7 - timer;

  return (
    <div className="Error">
      <h1 className="Error__Type">Erreur {errorType}</h1>
      <p className="Error__Description">{errorMessage}</p>
      <p className="Error__Countdown">Redirection dans {formatTime()}</p>
      <progress
        value={progressBarValue}
        max="7"
        className="Error__Countdown__Progress"
      />

      <HashLink
        smooth
        to={errorType === 401 ? '/login' : '/dashboard'}
        className="Error__Link"
        onClick={() => {
          if (errorType === 401) {
            Cookies.remove('user');
          }
        }}
      >
        {errorType === 401 ? 'Se connecter' : 'Retour au tableau de bord'}
      </HashLink>
    </div>
  );
};

Error.propTypes = {
  errorMessage: PropTypes.string,
  errorType: PropTypes.number,
};

Error.defaultProps = {
  errorMessage: "Cette page n'existe pas.",
  errorType: 404,
};
export default Error;
