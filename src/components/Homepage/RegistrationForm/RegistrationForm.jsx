import PropTypes from 'prop-types';
import './RegistrationForm.scss';
import Field from './Field/Field';

const RegistrationForm = ({
  firstname,
  lastname,
  organizationName,
  email,
  phoneNumber,
  address,
  siren,
  changeInfoField,
}) => {
  return (
    <div className="RegistrationForm">
      <form className="RegistrationForm__Element" autoComplete="off">
        <Field
          name="firstname"
          placeholder="Prénom"
          value={firstname}
          onChange={changeInfoField}
        />
        <Field
          name="lastname"
          placeholder="Nom"
          value={lastname}
          onChange={changeInfoField}
        />
        <Field
          name="organizationName"
          placeholder="Association"
          value={organizationName}
          onChange={changeInfoField}
        />
        <Field
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={changeInfoField}
        />
        <Field
          name="phoneNumber"
          placeholder="Téléphone"
          value={phoneNumber}
          onChange={changeInfoField}
        />

        <Field
          name="address"
          placeholder="Adresse complète de l'association"
          value={address}
          onChange={changeInfoField}
        />

        <Field
          name="siren"
          placeholder="Numéro SIREN"
          value={siren}
          onChange={changeInfoField}
        />

        <button type="submit" className="RegistrationForm__Button">
          Envoyer
        </button>
      </form>
    </div>
  );
};

RegistrationForm.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  organizationName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  siren: PropTypes.string.isRequired,
  changeInfoField: PropTypes.func.isRequired,
};
export default RegistrationForm;
