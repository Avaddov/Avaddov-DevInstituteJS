import React from 'react';

class Socials extends React.Component {
  render() {
    const { socialMedias } = this.props;

    return (
      <div>
        <h2>Social Media Links:</h2>
        <ul>
          {socialMedias.map((url, index) => (
            <li key={index}><a href={url}>{url}</a></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Socials;
