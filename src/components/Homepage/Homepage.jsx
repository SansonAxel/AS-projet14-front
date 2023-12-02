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
import Feature from './Feature/Feature';
import TeamMember from './TeamMember/TeamMember';

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

  /* Options details for the form selector */
  const formOptions = [
    { value: 'default', label: 'Choisissez' },
    { value: 'informations', label: 'Des informations' },
    { value: 'registration', label: 'Vous inscrire' },
  ];

  const [selectedForm, setSelectedForm] = useState('default');
  const [formLoaded, setFormLoaded] = useState(false);

  const ref = useRef(null);
  const formRef = useRef();

  /* Used to make sure that the form to display is loaded and that the form height is higher than 50px, which is not initially */
  useEffect(() => {
    if (formRef.current && formRef.current.clientHeight > 50) {
      setFormLoaded(true);
    }
  }, []);

  /* Handle scoll on informations form */
  const handleScrollOnInformations = () => {
    // Scroll into view only if the form is loaded
    if (formLoaded) {
      ref.current.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    } else {
      // If form is not loaded, wait for a short time and then scroll
      setTimeout(() => {
        ref.current.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      }, 200);
    }
    /* Changes the state that defines the selected form */
    setSelectedForm('informations');
  };

  /* Handle scoll on registration form */
  const handleScrollOnRegistration = () => {
    // Scroll into view only if the form is loaded
    if (formLoaded) {
      ref.current.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    } else {
      // If form is not loaded, wait for a short time and then scroll
      setTimeout(() => {
        ref.current.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      }, 200);
    }
    /* Changes the state that defines the selected form */
    setSelectedForm('registration');
  };

  /* Changes the state that defines the selected form in the selector */
  const handleFormToDisplay = (event) => {
    setSelectedForm(event.target.value);
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
          <button
            type="button"
            onClick={() => handleScrollOnInformations('informations')}
          >
            Contactez-nous
          </button>
          <button
            type="button"
            onClick={() => handleScrollOnRegistration('registration')}
          >
            Inscrivez-vous
          </button>
        </div>
      </section>
      {/* Features */}
      <section className="Homepage__Section">
        <Feature icon={faThumbsUp} content="Un affichage épuré" />
        <Feature icon={faSun} content="Une solution intuitive" />
        <Feature icon={faGear} content="Une gestion efficace" />
        <Feature icon={faCircleDot} content="Des données centralisées" />
      </section>
      {/* Features */}
      <section className="Homepage__Section">
        <TeamMember
          imgUrl="https://dummyimage.com/150x150/a3a3a3/fff&text=illustration"
          name="Axel Sanson"
          teamRole="Product Owner - Dev backend"
        />
        <TeamMember
          imgUrl="https://dummyimage.com/150x150/a3a3a3/fff&text=illustration"
          name="Nabila Abdallah"
          teamRole="Scrum Master - Dev backend"
        />
        <TeamMember
          imgUrl="https://dummyimage.com/150x150/a3a3a3/fff&text=illustration"
          name="Jérémy Le Goff"
          teamRole="Lead dev backend"
        />
        <TeamMember
          imgUrl="https://dummyimage.com/150x150/a3a3a3/fff&text=illustration"
          name="Louis Le Croller"
          teamRole="Lead dev frontend"
        />
        <TeamMember
          imgUrl="https://dummyimage.com/150x150/a3a3a3/fff&text=illustration"
          name="Jacques André"
          teamRole="Git Master - Dev frontend"
        />
      </section>
      <section className="Homepage__Section" id="test">
        <h2 ref={ref}>Vous souhaitez :</h2>
        <select
          value={selectedForm}
          onChange={handleFormToDisplay}
          ref={formRef}
        >
          {formOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {selectedForm !== 'default' &&
          (selectedForm === 'informations' ? (
            <InformationForm
              firstname={firstname}
              lastname={lastname}
              organizationName={organizationName}
              email={email}
              phoneNumber={phoneNumber}
              message={message}
              changeInfoField={handleChange}
            />
          ) : (
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
          ))}
      </section>

      <Footer />
    </div>
  );
};

Homepage.propTypes = {};
export default Homepage;
