// Create an XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the API URL with the necessary parameters
var apiUrl = 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2';

// Open a GET request to the API URL
xhr.open('GET', apiUrl, true);

// Set the onload callback function
xhr.onload = function () {
  // Check if the request was successful
  if (xhr.status === 200) {
    // Parse the response text into a JavaScript object
    var responseObj = JSON.parse(xhr.responseText);
    
    // Log the JavaScript object
    console.log(responseObj);
  }
};

// Send the request
xhr.send();
