/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

import './Login.scss';
import FormTemplate from '../FormTemplate/FormTemplate';
import { loginFormConfig } from '../../formsConfig/loginFormConfig';
import { handleSuccessfulLogin } from '../../actions/user';
import Loader from '../Loader/Loader';
import config from '../../config/config';

const Login = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [userStatus, setUserStatus] = useState(null);
  const baseURL = config.apiUrl;

  const handleLogin = ({ email, password }) => {
    setIsLoading(true);
    const payload = {
      email,
      password,
    };
    axios
      .post(`${baseURL}/login_check`, payload)
      .then((response) => {
        const { token, userInformation } = response.data;
        const {
          firstname,
          lastname,
          roles,
          organizations,
          structures,
          status,
        } = userInformation;

        dispatch(
          handleSuccessfulLogin(
            token,
            firstname,
            lastname,
            roles[0],
            organizations,
            structures,
            status
          )
        );
        setUserStatus(status);
        const expirationDate = new Date();
        expirationDate.setHours(expirationDate.getHours() + 1);

        if (status === true) {
          Cookies.set('token', token, {
            expires: expirationDate,
            secure: true,
            sameSite: 'strict',
          });
          Cookies.set('user', JSON.stringify(userInformation), {
            expires: expirationDate,
            secure: true,
            sameSite: 'strict',
          });
          setTimeout(() => {
            setIsLoading(false);
            navigate('/dashboard', { replace: true });
            window.location.reload();
          }, 100);
        } else {
          setError('Le compte utilisateur est désactivé');
        }
      })
      .catch((errors) => {
        setError('Identifiants invalides');
        setIsLoading(false);
      });
  };
  if (isLoading && userStatus === true) {
    return <Loader />;
  }

  return (
    <div className="Login">
      <h2>Accès à votre tableau de bord</h2>
      <FormTemplate
        formFields={loginFormConfig}
        buttonText="Se connecter"
        handleLoginSubmission={handleLogin}
      />
      {error && <p className="Login__Error">{error}</p>}
      <HashLink smooth to="/">
        Retour à l'accueil
      </HashLink>
    </div>
  );
};

export default Login;
