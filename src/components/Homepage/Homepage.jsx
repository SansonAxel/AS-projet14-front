/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

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
  const email = useSelector((state) => state.homeform.email);
  const phoneNumber = useSelector((state) => state.homeform.phoneNumber);
  const address = useSelector((state) => state.homeform.address);
  const siren = useSelector((state) => state.homeform.siren);
  const message = useSelector((state) => state.homeform.message);

  const dispatch = useDispatch();

  const formOptionsSelector = [
    { value: 'default', label: 'Choisissez' },
    { value: 'informations', label: 'Des informations' },
    { value: 'registration', label: 'Vous inscrire' },
  ];

  const handleChange = (newValue, identifier) => {
    dispatch(changeInfoField(newValue, identifier));
  };

  const [selectedForm, setSelectedForm] = useState('default');

  const defaultSelectedValue = useMemo(() => {
    setSelectedForm(formOptionsSelector[0]);

    return formOptionsSelector[0];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <button type="button">Contactez-nous</button>
          <button type="button">Inscrivez-vous</button>
        </div>
      </section>
      {/* Features */}
      <section className="Homepage__Section">
        <div className="Homepage__Section__Features">
          <img
            src="https://dummyimage.com/100x100/a3a3a3/fff&text=illustration"
            alt="temp"
          />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="Homepage__Section__Features">
          <img
            src="https://dummyimage.com/100x100/a3a3a3/fff&text=illustration"
            alt="temp"
          />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="Homepage__Section__Features">
          <img
            src="https://dummyimage.com/100x100/a3a3a3/fff&text=illustration"
            alt="temp"
          />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="Homepage__Section__Features">
          <img
            src="https://dummyimage.com/100x100/a3a3a3/fff&text=illustration"
            alt="temp"
          />
          <p>Lorem ipsum dolor sit amet.</p>
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
      <section className="Homepage__Section">
        <h2>Vous souhaitez :</h2>
        {/* <select
          ref={ref}
          value={selectedForm}
          onChange={(e) => setSelectedForm(e.target.value)}
        >
          <option value="default">Choisissez</option>
          <option value="informations">Des informations</option>
          <option value="registration">Vous inscrire</option>
        </select> */}
        <Select
          defaultValue={defaultSelectedValue}
          value={selectedForm}
          onChange={(value) => setSelectedForm(value)}
          name="Select"
          options={formOptionsSelector}
        />
        {selectedForm.value !== 'default' &&
          (selectedForm.value === 'informations' ? (
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
              email={email}
              phoneNumber={phoneNumber}
              address={address}
              siren={siren}
              changeInfoField={handleChange}
            />
          ))}
        <Footer />
      </section>
    </div>
  );
};

Homepage.propTypes = {};
export default Homepage;
