import PropTypes from 'prop-types';
import './LegalNotice.scss';

const LegalNotice = ({ displayState, handleHideOverlay }) => {
  return (
    <div
      className="LegalNotice"
      style={{ display: displayState }}
      id="legal-notice"
    >
      <div className="LegalNotice__Content">
        <button
          type="button"
          className="LegalNotice__Content__CloseButton"
          onClick={handleHideOverlay}
        >
          &times;
        </button>
        <h1>Legal Notice</h1>
        <h2>Article 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          asperiores ratione doloribus. Odit cumque adipisci, architecto nobis
          sapiente praesentium quisquam similique, earum nam laboriosam fuga
          magni dolores dolor consectetur. Repellendus eaque similique
          repudiandae possimus neque perspiciatis quos voluptatem, aperiam
          voluptas laboriosam aliquid dolorum sed nemo omnis doloribus ab qui
          iste? At asperiores neque quod porro sed a dolorem iste assumenda
          minus animi rerum pariatur amet, corporis expedita ad vero, tempora
          cupiditate provident esse exercitationem dolorum mollitia aliquam
          natus. Mollitia incidunt nobis minus recusandae voluptatem!
          Accusantium, maxime non quae animi minima quisquam! Tempora ea,
          tenetur odit praesentium velit ad beatae assumenda. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Esse vel commodi consequuntur!
          Architecto veniam quos rem mollitia nisi inventore exercitationem,
          porro alias maiores dolor cum quis culpa cumque et incidunt vel odio,
          distinctio dolorum unde neque quaerat consequatur? Esse blanditiis
          atque minima nihil exercitationem sint repellat, illum minus quam ex,
          vero provident possimus sed incidunt nesciunt, distinctio accusamus
          dolores maxime libero officia? Minus odit qui eos iure maxime adipisci
          eligendi, eaque hic amet assumenda necessitatibus perferendis
          laboriosam laborum suscipit deleniti omnis ex molestiae veniam
          perspiciatis blanditiis officiis dicta? Explicabo, mollitia! Ipsam ex
          unde ipsum optio repellendus debitis ipsa consequatur deleniti?
        </p>
        <h2>Article 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          asperiores ratione doloribus. Odit cumque adipisci, architecto nobis
          sapiente praesentium quisquam similique, earum nam laboriosam fuga
          magni dolores dolor consectetur. Repellendus eaque similique
          repudiandae possimus neque perspiciatis quos voluptatem, aperiam
          voluptas laboriosam aliquid dolorum sed nemo omnis doloribus ab qui
          iste? At asperiores neque quod porro sed a dolorem iste assumenda
          minus animi rerum pariatur amet, corporis expedita ad vero, tempora
          cupiditate provident esse exercitationem dolorum mollitia aliquam
          natus. Mollitia incidunt nobis minus recusandae voluptatem!
          Accusantium, maxime non quae animi minima quisquam! Tempora ea,
          tenetur odit praesentium velit ad beatae assumenda. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Esse vel commodi consequuntur!
          Architecto veniam quos rem mollitia nisi inventore exercitationem,
          porro alias maiores dolor cum quis culpa cumque et incidunt vel odio,
          distinctio dolorum unde neque quaerat consequatur? Esse blanditiis
          atque minima nihil exercitationem sint repellat, illum minus quam ex,
          vero provident possimus sed incidunt nesciunt, distinctio accusamus
          dolores maxime libero officia? Minus odit qui eos iure maxime adipisci
          eligendi, eaque hic amet assumenda necessitatibus perferendis
          laboriosam laborum suscipit deleniti omnis ex molestiae veniam
          perspiciatis blanditiis officiis dicta? Explicabo, mollitia! Ipsam ex
          unde ipsum optio repellendus debitis ipsa consequatur deleniti?
        </p>
      </div>
    </div>
  );
};

LegalNotice.propTypes = {
  displayState: PropTypes.string.isRequired,
  handleHideOverlay: PropTypes.func.isRequired,
};
export default LegalNotice;
