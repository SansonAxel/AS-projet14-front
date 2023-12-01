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
      {/* intro */}
      <section className="Homepage__Section">
        <p className="Homepage__Section__Presentation">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          laboriosam nihil maxime animi est!
        </p>
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
      <InformationForm />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

Homepage.propTypes = {};
export default Homepage;
