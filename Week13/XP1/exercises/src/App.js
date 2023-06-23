// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//Exercise 1: No JSX


// import React from 'react';

// function App() {
//   const element = React.createElement('h1', null, 'I do not use JSX');
//   return element;
// }

// export default App;


// //  Exercise 2: With JSX



// import React from 'react';

// function App() {
//   const myElement = <h1>I Love JSX!</h1>;
//   const sum = 5 + 5;
//   return (
//     <div>
//       {myElement}
//       <p>React is {sum} times better with JSX</p>
//     </div>
//   );
// }

// export default App;


// Exercise 3: Object

// import React from 'react';
// import UserFavoriteColors from './UserFavoriteColors';

// const user = {
//   firstName: 'Bob',
//   lastName: 'Dylan',
//   favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey'],
// };

// function App() {
//   return (
//     <div>
//       <h3>{user.firstName}</h3>
//       <h3>{user.lastName}</h3>
//       <UserFavoriteColors favAnimals={user.favAnimals} />
//     </div>
//   );
// }

// export default App;




// Exercise 4: HTML Tags in React


// import React from 'react';
// import Exercise4 from './Exercise4';

// function App() {
//   return (
//     <div>
//       <Exercise4 />
//     </div>
//   );
// }

// export default App;
