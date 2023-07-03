import React from 'react';

class Exp extends React.Component {
  render() {
    const { experiences } = this.props;

    return (
      <div>
        <h2>Experiences:</h2>
        {experiences.map((experience, index) => (
          <div key={index}>
            <img src={experience.logo} alt={experience.companyName} />
            <h3>{experience.companyName}</h3>
            <p>{experience.url}</p>
            {experience.roles.map((role, index) => (
              <div key={index}>
                <h4>{role.title}</h4>
                <p>{role.description}</p>
                <p>Start Date: {role.startDate}</p>
                <p>End Date: {role.endDate}</p>
                <p>Location: {role.location}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Exp;
