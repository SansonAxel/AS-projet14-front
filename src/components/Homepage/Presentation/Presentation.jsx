/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import './Presentation.scss';

const Presentation = ({ onScrollInformations, onScrollRegistration }) => {
  return (
    <section className="Homepage__Section">
      <p className="Homepage__Section__Presentation">
        <span>
          Projet 14, un outil pour les associations d'aide alimentaire
        </span>
        <br />
        Nous vous proposons une solution de gestion de stocks, claire, intuitive
        et centralisée pour vous et vos antennes associatives.
      </p>
      <div className="Homepage__Section__Presentation__Buttons">
        <button type="button" onClick={onScrollInformations}>
          Contactez-nous
        </button>
        <button type="button" onClick={onScrollRegistration}>
          Inscrivez-vous
        </button>
      </div>
    </section>
  );
};

Presentation.propTypes = {
  onScrollInformations: PropTypes.func.isRequired,
  onScrollRegistration: PropTypes.func.isRequired,
};
export default Presentation;
