// Get the HTML elements
const form = document.getElementById('libform');
const nounInput = document.getElementById('noun');
const adjInput = document.getElementById('adjective');
const personInput = document.getElementById('person');
const verbInput = document.getElementById('verb');
const placeInput = document.getElementById('place');
const storySpan = document.getElementById('story');
const libButton = document.getElementById('lib-button');
const shuffleButton = document.getElementById('shuffle-button');

// Define the story template
const storyTemplate = "Once upon a time, there was a(n) {adjective} {noun} named {person}. {person} loved to {verb} at {place}. One day, while {verb} at {place}, {person} met a(n) {adjective} {noun}. They {verb} together for hours and then went their separate ways. {person} couldn't stop thinking about the {noun} and went back to {place} every day to try to find the {noun} again. Finally, one day {person} found the {noun} and they lived happily ever after.";

// Define a function to generate the story
function generateStory() {
  // Get the values of the input fields
  const nounValue = nounInput.value;
  const adjValue = adjInput.value;
  const personValue = personInput.value;
  const verbValue = verbInput.value;
  const placeValue = placeInput.value;

  // Make sure the values are not empty
  if (nounValue && adjValue && personValue && verbValue && placeValue) {
    // Replace the placeholders in the story template with the input values
    const story = storyTemplate
      .replace('{noun}', nounValue)
      .replace('{adjective}', adjValue)
      .replace('{person}', personValue)
      .replace('{verb}', verbValue)
      .replace('{place}', placeValue);
      
    // Update the story element
    storySpan.textContent = story;
  } else {
    alert('Please fill in all the input fields.');
  }
}

// Define a function to shuffle the story
function shuffleStory() {
  // Generate a new story with the same input values
  generateStory();
}

// Attach event listeners to the buttons
libButton.addEventListener('click', function(event) {
  event.preventDefault();
  generateStory();
});

shuffleButton.addEventListener('click', function(event) {
  event.preventDefault();
  shuffleStory();
});
