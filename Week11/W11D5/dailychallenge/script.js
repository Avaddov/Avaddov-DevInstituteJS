function submitRegisterForm(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const data = {
      name,
      lastName,
      email,
      username,
      password
    };
  
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.text())
      .then(message => {
        document.getElementById('registerForm').reset();
        alert(message);
      })
      .catch(error => console.error('Error:', error));
  }
  
  function submitLoginForm(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const data = {
      username,
      password
    };
  
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.text())
      .then(message => {
        document.getElementById('loginForm').reset();
        alert(message);
      })
      .catch(error => console.error('Error:', error));
  }
  