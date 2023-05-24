// Retrieve DOM elements
const nameElement = document.getElementById('name');
const heightElement = document.getElementById('height');
const genderElement = document.getElementById('gender');
const birthYearElement = document.getElementById('birth-year');
const homeWorldElement = document.getElementById('home-world');
const loadingElement = document.getElementById('loading');
const randomButton = document.getElementById('random-button');

// Function to make API request and update DOM
function getRandomCharacter() {
  // Display loading message
  loadingElement.style.display = 'block';

  // Hide character info
  document.getElementById('character-info').style.display = 'none';

  // Make AJAX request to SWAPI API
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.swapi.tech/api/people', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);

      // Randomly select a character from the response
      const randomIndex = Math.floor(Math.random() * response.results.length);
      const character = response.results[randomIndex];

      // Update DOM with character information
      nameElement.textContent = character.properties.name;
      heightElement.textContent = character.properties.height;
      genderElement.textContent = character.properties.gender;
      birthYearElement.textContent = character.properties.birth_year;

      // Make another AJAX request to fetch the home world of the character
      const homeWorldUrl = character.properties.homeworld;
      const homeWorldXhr = new XMLHttpRequest();
      homeWorldXhr.open('GET', homeWorldUrl, true);
      homeWorldXhr.onload = function() {
        if (homeWorldXhr.status === 200) {
          const homeWorldResponse = JSON.parse(homeWorldXhr.responseText);
          homeWorldElement.textContent = homeWorldResponse.result.properties.name;
        } else {
          homeWorldElement.textContent = 'Unknown';
        }
      };
      homeWorldXhr.onerror = function() {
        homeWorldElement.textContent = 'Unknown';
      };
      homeWorldXhr.send();

      // Hide loading message and show character info
      loadingElement.style.display = 'none';
      document.getElementById('character-info').style.display = 'block';
    } else {
     
