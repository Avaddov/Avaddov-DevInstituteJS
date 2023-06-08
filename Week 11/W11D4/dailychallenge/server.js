// server.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/:id', (req, res) => {
  const id = req.params.id;
  const response = { id: id };
  res.send(JSON.stringify(response));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
