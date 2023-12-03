import PropTypes from 'prop-types';
import './TeamMembers.scss';

const TeamMember = ({ membersData }) => {
  return (
    <section className="Homepage__Section">
      <h2>Notre équipe</h2>
      {membersData.map((member) => (
        <div className="Homepage__Section__Member" key={member.key}>
          <img src={member.imgUrl} alt={member.name} />
          <p className="Homepage__Section__Member__Member__Details">
            {member.name} <br />
            <span>{member.teamRole}</span>
          </p>
        </div>
      ))}
    </section>
  );
};

TeamMember.propTypes = {
  membersData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      teamRole: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default TeamMember;
