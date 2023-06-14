// Part I:
// Create a file named main.js that contains a variable const largeNumber = 356; and export the module.

// Use the exported module in a script.js file.

// In the script.js file declare a variable const b = 5; and use it to output the sum of the imported module + b


const largeNumber = 356;

module.exports = largeNumber;


const largeNumber = require('./main.js');
const b = 5;

const sum = largeNumber + b;
console.log(sum);

node script.js
361

// Part II:
// Before starting the exercises, check out the lesson named Node.js Application in the Course Notes.

// In the script.js file create a server using the http module (require('http')).

// Create a server instance and bind it at port 3000. Therefore your server should run on http://localhost:3000/. When the server run, you should console.log("I'm listening") in the terminal.

// Set the response header to res.setHeader('Content-Type', 'text/html')(look at this tutorial- Part named “Serving HTML)

// Respond (res.end) with a HTML paragraph saying "My Module is <result from Part I>", and an HTML <h1> saying “Hi there at the frontend”


// const http = require('http');
// const server = http.createServer((req, res) => {
//     // Server logic goes here
//   });
  
//   server.listen(3000, () => {
//     console.log("I'm listening");
//   });
// res.setHeader('Content-Type', 'text/html');
// res.end(`<p>My Module is ${largeNumber}</p><h1>Hi there at the frontend</h1>`);
// const http = require('http');
// const largeNumber = require('./main.js');

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`<p>My Module is ${largeNumber}</p><h1>Hi there at the frontend</h1>`);
// });

// server.listen(3000, () => {
//   console.log("I'm listening");
// });
// node script.js
// <p>My Module is 356</p>
// <h1>Hi there at the frontend</h1>

// Part III:

// function getCurrentDateTime() {
//     const currentDate = new Date();
//     return currentDate.toLocaleString();
//   }
  
//   module.exports = getCurrentDateTime;
  

// const http = require('http');
// const getCurrentDateTime = require('./main.js');

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`<p>Current Date and Time: ${getCurrentDateTime()}</p>`);
// });

// server.listen(8080, () => {
//   console.log("Server running on http://localhost:8080/");
// });


// node script.js
