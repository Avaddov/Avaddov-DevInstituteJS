const fs = require('fs');

// Read the RightLeft file
fs.readFile('RightLeft.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let currentPosition = 0; // Initialize the current position
  let stepsToNegativeOne = -1; // Initialize steps to reach -1 (starting from -1 for simplicity)

  // Loop through each character in the data
  for (const symbol of data) {
    if (symbol === '>') {
      currentPosition++; // Move 1 step to the right
      stepsToNegativeOne++; // Increment steps to reach -1
    } else if (symbol === '<') {
      currentPosition--; // Move 1 step to the left
      stepsToNegativeOne++; // Increment steps to reach -1
    }
  }

  const remainingSteps = stepsToNegativeOne - currentPosition;
  console.log(remainingSteps, 'more steps');
  console.log('Total Steps:', currentPosition);
});
