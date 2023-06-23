import React, { Component } from 'react';
import './App.css';

// Exercise 1: Car And Components
const carInfo = {
  name: "Ford",
  model: "Mustang"
};

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red"
    };
  }

  render() {
    return (
      <div>
        <h1>This car is {carInfo.model}</h1>
        <p>This car is {this.state.color} {carInfo.model}</p>
        <Garage size="small" />
      </div>
    );
  }
}

class Garage extends Component {
  render() {
    return <p>Who lives in my {this.props.size} Garage?</p>;
  }
}

// Exercise 2: Events
class Events extends Component {
  clickMe = () => {
    alert('I was clicked');
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert('Input value: ' + event.target.value);
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
  }

  toggleState = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.clickMe}>Click Me</button>
        <br />
        <input type="text" onKeyDown={this.handleKeyDown} />
        <br />
        <button onClick={this.toggleState}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <p>{this.state.isToggleOn ? 'on' : 'off'}</p>
      </div>
    );
  }
}

// Exercise 3: Phone And Components
class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Samsung",
      model: "Galaxy S20",
      color: "black",
      year: 2020
    };
  }

  changeColor = () => {
    this.setState({
      color: "blue"
    });
  }

  render() {
    return (
      <div>
        <p>Brand: {this.state.brand}</p>
        <p>Model: {this.state.model}</p>
        <p>Color: {this.state.color}</p>
        <p>Year: {this.state.year}</p>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

// Exercise 4: ComponentDidMount
class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        favoriteColor: "yellow"
      });
    }, 5000);
  }

  changeColor = () => {
    this.setState({
      favoriteColor: "blue"
    });
  }

  render() {
    return (
      <div>
        <h1>Favorite Color: {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      {/* Exercise 1 */}
      <Car />
      
      {/* Exercise 2 */}
      <Events />
      
      {/* Exercise 3 */}
      <Phone />
      
      {/* Exercise 4 */}
      <Color />
    </div>
  );
}

export default App;
