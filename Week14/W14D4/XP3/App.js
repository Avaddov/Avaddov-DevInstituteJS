import React from 'react';
import Exp from './Experience';
import Skill from './Skill';
import Socials from './Socials';

class App extends React.Component {
  render() {
    // Assuming you have the JSON data stored in a variable called `jsonData`
    const { SocialMedias, Skills, Experiences } = jsonData;

    return (
      <div>
        <Socials socialMedias={SocialMedias} />
        <Skill skills={Skills} />
        <Exp experiences={Experiences} />
      </div>
    );
  }
}

export default App;
