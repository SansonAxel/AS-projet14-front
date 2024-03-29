/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from 'react';

import Header from './Header/Header';
import Presentation from './Presentation/Presentation';
import Features from './Features/Features';
import TeamMembers from './TeamMembers/TeamMembers';
import Footer from './Footer/Footer';

import './Homepage.scss';

import { featuresData, membersData, formOptions } from '../../homedatas';

import LegalNotice from './LegalNotice/LegalNotice';
import FormTemplate from '../FormTemplate/FormTemplate';
import {
  formFieldsInformations,
  formFieldsRegistration,
} from '../../formsConfig/homeFormsConfig';

const Homepage = () => {
  const [selectedForm, setSelectedForm] = useState('default');
  const [formLoaded, setFormLoaded] = useState(false);
  const [displayState, setDisplayState] = useState('none');

  const selectRef = useRef(null);
  const formRef = useRef();

  /* Used to make sure that the form to display is loaded and 
  that the form height is higher than 50px, 
  which is not the case initially */
  useEffect(() => {
    if (formRef.current && formRef.current.clientHeight > 50) {
      setFormLoaded(true);
    }
  }, []);

  const handleScrollOnForm = (formType) => {
    if (formLoaded) {
      selectRef.current.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    } else {
      // If form is not loaded, wait for a short time and then scroll
      setTimeout(() => {
        selectRef.current.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      }, 200);
    }
    setSelectedForm(formType);
  };

  /* Handle scoll on informations form */
  const handleScrollOnInformations = () => {
    handleScrollOnForm('informations');
  };

  /* Handle scoll on registration form */
  const handleScrollOnRegistration = () => {
    handleScrollOnForm('registration');
  };

  /* Changes the state that defines the selected form in the selector */
  const handleFormToDisplay = (event) => {
    setSelectedForm(event.target.value);
  };

  const handleDisplayLegalNotice = () => {
    setDisplayState('block');
  };

  const handleHideOverlay = () => {
    setDisplayState('none');
  };

  return (
    <div className="Homepage">
      <Header
        onScrollInformations={() => handleScrollOnInformations('informations')}
        onScrollRegistration={() => handleScrollOnRegistration('registration')}
        handleDisplayLegalNotice={handleDisplayLegalNotice}
      />
      {/* intro */}
      <Presentation
        onScrollInformations={() => handleScrollOnInformations('informations')}
        onScrollRegistration={() => handleScrollOnRegistration('registration')}
      />

      {/* Features */}
      <Features featuresData={featuresData} />

      {/* Team */}
      <TeamMembers membersData={membersData} />

      <section className="Homepage__Section" ref={selectRef}>
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
        {selectedForm !== 'default' && (
          <FormTemplate
            formFields={
              selectedForm === 'informations'
                ? formFieldsInformations
                : formFieldsRegistration
            }
            buttonText="Envoyer"
            infoText="Les champs marqués d'un * sont obligatoires"
          />
        )}
      </section>
      <LegalNotice
        displayState={displayState}
        handleHideOverlay={handleHideOverlay}
      />
      <Footer handleDisplayLegalNotice={handleDisplayLegalNotice} />
    </div>
  );
};

export default Homepage;
