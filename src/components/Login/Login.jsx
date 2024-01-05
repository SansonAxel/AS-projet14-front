/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';

import './Login.scss';
import FormTemplate from '../FormTemplate/FormTemplate';
import { loginFormConfig } from '../../formsConfig/loginFormConfig';
import { handleSuccessfulLogin } from '../../actions/user';
import Loader from '../Loader/Loader';

const Login = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = ({ email, password }) => {
    setIsLoading(true);
    const payload = {
      email,
      password,
    };
    axios
      .post('http://localhost:8080/api/login_check', payload)
      // https://sansonaxel-server.eddi.cloud/api/login_check
      .then((response) => {
        const { token, userInformation } = response.data;
        const { firstname, lastname, roles, organizations, structures } =
          userInformation;

        dispatch(
          handleSuccessfulLogin(
            token,
            firstname,
            lastname,
            roles[0],
            organizations,
            structures
          )
        );
        Cookies.set('token', token, { expires: 7, secure: true });
        Cookies.set('user', JSON.stringify(userInformation), {
          expires: 7,
          secure: true,
        });
        console.log('Response data:', response.data);
        console.log('Navigating to /dashboard');
        // navigate('/produits', { replace: true });
        setTimeout(() => {
          setIsLoading(false);
          navigate('/dashboard', { replace: true });
          window.location.reload();
        }, 100);
      })
      .catch((errors) => {
        console.error(
          'Error:',
          errors.response ? errors.response.data : errors.message
        );
        setIsLoading(false);
      });
  };
  if (isLoading) {
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
      {error && <p className="Login__Error">{error.response}</p>}
      <HashLink smooth to="/">
        Retour à l'accueil
      </HashLink>
    </div>
  );
};

export default Login;
