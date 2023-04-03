// Prompt the user for several words
const wordsInput = prompt("Please enter several words, separated by commas:");

// Split the input string into an array of words
const wordsArray = wordsInput.split(",");

// Find the longest word in the array
const longestWordLength = Math.max(...wordsArray.map(word => word.length));

// Create the top and bottom borders of the frame
const border = "*".repeat(longestWordLength + 4);

// Print the top border
console.log(border);

// Print each word in the array with side borders
wordsArray.forEach(word => {
  const spacesNeeded = longestWordLength - word.length;
  const sideSpaces = " ".repeat(Math.floor(spacesNeeded / 2));
  const sideBorders = "* ";
  const paddedWord = sideBorders + sideSpaces + word + sideSpaces + (spacesNeeded % 2 === 1 ? " " : "") + sideBorders;
  console.log(paddedWord);
});

// Print the bottom border
console.log(border);
