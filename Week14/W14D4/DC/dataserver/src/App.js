import React, { Component } from 'react';

class App extends Component {
  state = {
    message: ''
  };

  componentDidMount() {
    this.fetchMessage();
  }

  fetchMessage = async () => {
    try {
      const response = await fetch('/api/hello');
      const message = await response.text();
      this.setState({ message });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { message } = this.state;

    return (
      <div>
        <h1>{message}</h1>
      </div>
    );
  }
}

export default App;
