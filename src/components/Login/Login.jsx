import { useDispatch, useSelector } from 'react-redux';
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
      <form autoComplete="off" className="login-form-element">
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
        <button type="submit" className="login-form-button">
          Se connecter
        </button>
      </form>
    </div>
  );
};

Login.propTypes = {};
export default Login;
