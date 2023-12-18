/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';

import './Login.scss';
import FormTemplate from '../FormTemplate/FormTemplate';
import loginFormConfig from '../../formsConfig/loginFormConfig';
import { handleSuccessfulLogin } from '../../actions/user';

const Login = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (values) => {
    const { email, password } = values;

    const payload = {
      email,
      password,
    };
    console.log('login', values);

    axios
      .post('http://sansonaxel-server.eddi.cloud/api/login_check', payload)
      .then((response) => {
        setIsLoading(true);
        const { token } = response.data;

        dispatch(handleSuccessfulLogin(token, true));
        Cookies.set('token', token, { expires: 7, secure: true });

        setError(null);
      })
      .catch((errors) => {
        console.error(
          'Error:',
          errors.response ? errors.response.data : errors.message
        );
        setError('Identifiants invalides');
      })
      .finally(() => {
        setIsLoading(false);
        navigate('/dashboard');
      });
  };

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
