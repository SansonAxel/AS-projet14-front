import PropTypes from 'prop-types';
import './TeamMember.scss';

const TeamMember = ({ name, teamRole, imgUrl }) => {
  return (
    <div className="Homepage__Section__Team">
      <img src={imgUrl} alt={name} />
      <p className="Homepage__Section__Team__Member">
        {name} <br />
        <span>{teamRole}</span>
      </p>
    </div>
  );
};

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  teamRole: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
export default TeamMember;
