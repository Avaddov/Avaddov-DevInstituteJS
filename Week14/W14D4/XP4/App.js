import React from 'react';

class App extends React.Component {
  handleClick = async () => {
    const url = 'https://webhook.site/8a46f5f3-21d5-4434-9403-5d1822bf8b01';
    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    console.log(responseData);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default App;
