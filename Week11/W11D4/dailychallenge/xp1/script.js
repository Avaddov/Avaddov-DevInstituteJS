// script.js

const url = 'http://localhost:3000/1234'; // Replace with your desired URL

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Display the data on the DOM
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = JSON.stringify(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
