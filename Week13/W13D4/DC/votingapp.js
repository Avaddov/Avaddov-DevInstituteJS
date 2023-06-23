import React, { Component } from 'react';

class VotingApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaScript", votes: 0 },
        { name: "Java", votes: 0 }
      ]
    };
  }

  vote(index) {
    this.setState(prevState => {
      const updatedLanguages = [...prevState.languages];
      updatedLanguages[index].votes += 1;
      return { languages: updatedLanguages };
    });
  }

  render() {
    return (
      <div>
        {this.state.languages.map((language, index) => (
          <button
            key={index}
            onClick={() => this.vote(index)}
          >
            {language.name} - Votes: {language.votes}
          </button>
        ))}
      </div>
    );
  }
}

export default VotingApp;
