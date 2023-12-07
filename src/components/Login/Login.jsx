/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

import './Login.scss';
import FormTemplate from '../FormTemplate/FormTemplate';
import { formFieldsLogin } from '../../datas/formFieldsConfig';
import { handleSuccessfulLogin } from '../../actions/user';

const Login = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (values) => {
    const { email, password } = values;

    const payload = {
      email,
      password,
    };

    axios
      .post('http://sansonaxel-server.eddi.cloud/api/login_check', payload)
      .then((response) => {
        const { token } = response.data;

        dispatch(handleSuccessfulLogin(token, true));
        Cookies.set('token', token, { expires: 7, secure: true });

        if (token) {
          navigate('/dashboard');
        } else {
          navigate('/');
        }

        setError(null);
      })
      .catch((errors) => {
        console.error(
          'Error:',
          error.response ? error.response.data : error.message
        );
        setError('Identifiants invalides');
      });
  };

  return (
    <div className="Login">
      <h2>Accès à votre tableau de bord</h2>
      <FormTemplate
        formFields={formFieldsLogin}
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
