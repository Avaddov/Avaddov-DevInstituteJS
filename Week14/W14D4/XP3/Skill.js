import React from 'react';

class Skill extends React.Component {
  render() {
    const { skills } = this.props;

    return (
      <div>
        <h2>Skills:</h2>
        {skills.map((skillArea, index) => (
          <div key={index}>
            <h3>{skillArea.Area}</h3>
            <ul>
              {skillArea.SkillSet.map((skill, index) => (
                <li key={index}>
                  {skill.Name} - {skill.Hot ? 'Hot' : 'Not Hot'}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Skill;
