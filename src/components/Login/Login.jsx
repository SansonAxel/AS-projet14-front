/* eslint-disable react/no-unescaped-entities */
import { HashLink } from 'react-router-hash-link';

import './Login.scss';
import FormTemplate from '../FormTemplate/FormTemplate';
import { formFieldsLogin } from '../../datas/formFieldsConfig';

const Login = () => {
  return (
    <div className="Login">
      <h2>Accès à votre tableau de bord</h2>
      <FormTemplate formFields={formFieldsLogin} buttonText="Se connecter" />
      <HashLink smooth to="/">
        Retour à l'accueil
      </HashLink>
    </div>
  );
};

export default Login;
