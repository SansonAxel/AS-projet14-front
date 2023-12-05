/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';

import PropTypes from 'prop-types';
import './Login.scss';
import Field from './Field/Field';
import { changeLoginField } from '../../actions/user';

const Login = () => {
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const dispatch = useDispatch();

  const handleChange = (newValue, identifier) => {
    dispatch(changeLoginField(newValue, identifier));
  };

  return (
    <div className="Login">
      <h2>Accès à votre tableau de bord</h2>
      <form autoComplete="off" className="Login__Form">
        <Field
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={handleChange}
          value={email}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={handleChange}
          value={password}
        />
        <button type="submit" className="Login__Form__Button">
          Se connecter
        </button>
      </form>
      <HashLink smooth to="/">
        Retour à l'accueil
      </HashLink>
    </div>
  );
};

Login.propTypes = {};
export default Login;
