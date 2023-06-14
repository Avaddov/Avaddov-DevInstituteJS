const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = [];

app.get('/registerForm', (req, res) => {
  res.sendFile(__dirname + '/register.html');
});

app.get('/loginForm', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/register', (req, res) => {
  const { name, lastName, email, username, password } = req.body;
  const existingUser = users.find(user => user.username === username);

  if (existingUser) {
    res.send('Username already exists');
  } else {
    const newUser = {
      id: users.length + 1,
      name,
      lastName,
      email,
      username,
      password
    };

    users.push(newUser);
    res.send('Your account has been created!');
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const existingUser = users.find(user => user.username === username);

  if (existingUser) {
    if (existingUser.password === password) {
      res.send(`Hi, ${existingUser.username}. Welcome back!`);
    } else {
      res.send('Incorrect password');
    }
  } else {
    res.send('Username is not registered');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
