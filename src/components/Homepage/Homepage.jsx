import PropTypes from 'prop-types';
import './Homepage.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import InformationForm from './InformationForm/InformationForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';

const Homepage = () => {
  return (
    <div className="Homepage">
      <Header />
      <section className="Homepage__Section">
        <p className="Homepage__Section__Presentation">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          laboriosam nihil maxime animi est!
        </p>
      </section>
      <InformationForm />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

Homepage.propTypes = {};
export default Homepage;
