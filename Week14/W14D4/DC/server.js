const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

const port = 5000; // You can change the port number if needed

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
