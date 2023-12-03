/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './Header/Header';
import Presentation from './Presentation/Presentation';
import Features from './Features/Features';
import TeamMembers from './TeamMembers/TeamMembers';
import InformationForm from './InformationForm/InformationForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import Footer from './Footer/Footer';

import './Homepage.scss';

import { changeInfoField } from '../../actions/homeform';

import { featuresData, membersData, formOptions } from '../../homedatas';

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

  const [selectedForm, setSelectedForm] = useState('default');
  const [formLoaded, setFormLoaded] = useState(false);

  const ref = useRef(null);
  const formRef = useRef();

  /* Used to make sure that the form to display is loaded and 
  that the form height is higher than 50px, 
  which is not the case initially */
  useEffect(() => {
    if (formRef.current && formRef.current.clientHeight > 50) {
      setFormLoaded(true);
    }
  }, []);

  const handleScroll = (formType) => {
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
    setSelectedForm(formType);
  };

  /* Handle scoll on informations form */
  const handleScrollOnInformations = () => {
    handleScroll('informations');
  };

  /* Handle scoll on registration form */
  const handleScrollOnRegistration = () => {
    handleScroll('registration');
  };

  /* Changes the state that defines the selected form in the selector */
  const handleFormToDisplay = (event) => {
    setSelectedForm(event.target.value);
  };

  return (
    <div className="Homepage">
      <Header />
      {/* intro */}
      <Presentation
        onScrollInformations={() => handleScrollOnInformations('informations')}
        onScrollRegistration={() => handleScrollOnRegistration('registration')}
      />

      {/* Features */}

      <Features featuresData={featuresData} />

      {/* Features */}

      <TeamMembers membersData={membersData} />

      <section className="Homepage__Section" ref={ref}>
        <h2>Vous souhaitez :</h2>
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

export default Homepage;
