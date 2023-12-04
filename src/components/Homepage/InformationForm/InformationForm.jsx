import PropTypes from 'prop-types';
import './InformationForm.scss';
import Field from './Field/Field';

const InformationForm = ({
  firstname,
  lastname,
  organizationName,
  email,
  phoneNumber,
  message,
  changeInfoField,
}) => {
  return (
    <div className="InformationForm">
      <form className="InformationForm__Element" autoComplete="off">
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
          type="textarea"
          name="message"
          placeholder="Votre message"
          value={message}
          onChange={changeInfoField}
        />

        <button type="submit" className="InformationForm__Button">
          Envoyer
        </button>
      </form>
    </div>
  );
};

InformationForm.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  organizationName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  changeInfoField: PropTypes.func.isRequired,
};
export default InformationForm;
