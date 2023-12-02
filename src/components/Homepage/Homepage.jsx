/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear,
  faSun,
  faThumbsUp,
  faCircleDot,
} from '@fortawesome/free-solid-svg-icons';

import './Homepage.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import InformationForm from './InformationForm/InformationForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';

import { changeInfoField } from '../../actions/homeform';

const Homepage = () => {
  const firstname = useSelector((state) => state.homeform.firstname);
  const lastname = useSelector((state) => state.homeform.lastname);
  const organizationName = useSelector(
    (state) => state.homeform.organizationName
  );
  const organizationType = useSelector(
    (state) => state.homeform.organizationType
  );
  const email = useSelector((state) => state.homeform.email);
  const phoneNumber = useSelector((state) => state.homeform.phoneNumber);
  const address = useSelector((state) => state.homeform.address);
  const siren = useSelector((state) => state.homeform.siren);
  const message = useSelector((state) => state.homeform.message);

  const dispatch = useDispatch();

  const handleChange = (newValue, identifier) => {
    dispatch(changeInfoField(newValue, identifier));
  };

  const informationFormRef = useRef(null);
  const registrationFormRef = useRef(null);

  const handleInformationScroll = () => {
    informationFormRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleRegistrationScroll = () => {
    registrationFormRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="Homepage">
      <Header />
      {/* intro */}
      <section className="Homepage__Section">
        <p className="Homepage__Section__Presentation">
          <span>
            Projet 14, un outil pour les associations d'aide alimentaire
          </span>
          <br />
          Nous vous proposons une solution de gestion de stocks, claire,
          intuitive et centralisée pour vous et vos antennes associatives.
        </p>
        <div className="Homepage__Section__Presentation__Buttons">
          <button type="button" onClick={handleInformationScroll}>
            Contactez-nous
          </button>
          <button type="button" onClick={handleRegistrationScroll}>
            Inscrivez-vous
          </button>
        </div>
      </section>
      {/* Features */}
      <section className="Homepage__Section">
        <div className="Homepage__Section__Features">
          <FontAwesomeIcon
            icon={faThumbsUp}
            className="Homepage__Section__Features__Icon"
          />
          <p>Un affichage épuré</p>
        </div>
        <div className="Homepage__Section__Features">
          <FontAwesomeIcon
            icon={faSun}
            className="Homepage__Section__Features__Icon"
          />
          <p>Une solution intuitive</p>
        </div>
        <div className="Homepage__Section__Features">
          <FontAwesomeIcon
            icon={faGear}
            className="Homepage__Section__Features__Icon"
          />
          <p>Une gestion efficace</p>
        </div>
        <div className="Homepage__Section__Features">
          <FontAwesomeIcon
            icon={faCircleDot}
            className="Homepage__Section__Features__Icon"
          />
          <p>Des données centralisées</p>
        </div>
      </section>
      {/* Features */}
      <section className="Homepage__Section">
        <div className="Homepage__Section__Team">
          <img
            src="https://dummyimage.com/150x150/a3a3a3/fff&text=illustration"
            alt="temp"
          />
          <p className="Homepage__Section__Team__Member">
            Axel Sanson <br />
            <span>Product Owner - Dev backend</span>
          </p>
        </div>
        <div className="Homepage__Section__Team">
          <img
            src="https://dummyimage.com/150x150/a3a3a3/fff&text=illustration"
            alt="temp"
          />
          <p className="Homepage__Section__Team__Member">
            Nabila Abdallah <br />
            <span>Scrum Master - Dev backend</span>
          </p>
        </div>
        <div className="Homepage__Section__Team">
          <img
            src="https://dummyimage.com/150x150/a3a3a3/fff&text=illustration"
            alt="temp"
          />
          <p className="Homepage__Section__Team__Member">
            Jérémy Le Goff <br />
            <span>Lead dev backend</span>
          </p>
        </div>
        <div className="Homepage__Section__Team">
          <img
            src="https://dummyimage.com/150x150/a3a3a3/fff&text=illustration"
            alt="temp"
          />
          <p className="Homepage__Section__Team__Member">
            Louis Le Croller <br />
            <span>Lead dev frontend</span>
          </p>
        </div>
        <div className="Homepage__Section__Team">
          <img
            src="https://dummyimage.com/150x150/a3a3a3/fff&text=illustration"
            alt="temp"
          />
          <p className="Homepage__Section__Team__Member">
            Jacques André <br />
            <span>Git Master - Dev frontend</span>
          </p>
        </div>
      </section>
      <section className="Homepage__Section" ref={informationFormRef}>
        <h2>Contactez-nous !</h2>
        <InformationForm
          firstname={firstname}
          lastname={lastname}
          organizationName={organizationName}
          email={email}
          phoneNumber={phoneNumber}
          message={message}
          changeInfoField={handleChange}
        />
      </section>

      <section className="Homepage__Section" ref={registrationFormRef}>
        <h2>Inscrivez-vous !</h2>
        <RegistrationForm
          firstname={firstname}
          lastname={lastname}
          organizationName={organizationName}
          organizationType={organizationType}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
          siren={siren}
          changeInfoField={handleChange}
        />
      </section>

      <Footer />
    </div>
  );
};

Homepage.propTypes = {};
export default Homepage;
