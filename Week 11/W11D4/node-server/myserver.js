const http = require('http');

// Create a server instance
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/html');

  // Write the HTML response
  res.write('<h1>This is my first response</h1>');
  res.write('<h2>This is my second response.</h2>');
  res.write('<p>This is my third response');

  // End the response
  res.end();
});

// Start the server on port 3000
server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
