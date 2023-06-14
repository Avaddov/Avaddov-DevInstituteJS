// Exercise 1 : Find The Sum

// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.



// const sum = (num1, num2) => num1 + num2;
// console.log(sum(4, 5));



// // Exercise 2 Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// // First, use function declaration and invoke it.
// function convertToGrams(weightInKg) {
//     return weightInKg * 1000;
//   }
  
//   convertToGrams(5); // returns 5000
  
// // Then, use function expression and invoke it.
// const convertToGrams = function(weightInKg) {
//     return weightInKg * 1000;
//   };
  
//   convertToGrams(5); // returns 5000
  
// // Write in a one line comment, the difference between function declaration and function expression.
// // Finally, use a one line arrow function and invoke it.

// const convertToGrams = weightInKg => weightInKg * 1000;

// convertToGrams(5); // returns 5000


// // Exercise 3
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// self-invoking function that displays the message in the DOM
(function (numChildren, partnerName, location, jobTitle) {
  // create message string using template literals
  const message = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
  
  // set the text content of the output element to the message
  document.querySelector('#output').textContent = message;
})(2, 'Jane', 'New York City', 'Software Engineer');






// // Exercise 4
// Self-invoking function that takes the user's name as an argument
(function(username) {
  // Get the navbar element
  const navbar = document.querySelector('.navbar-nav');

  // Create a new div to hold the user's name and profile picture
  const userDiv = document.createElement('div');
  userDiv.classList.add('navbar-text');

  // Create a new span element for the user's name and set its text content to the username
  const usernameSpan = document.createElement('span');
  usernameSpan.textContent = `Welcome, ${username}! `;
  userDiv.appendChild(usernameSpan);

  // Create a new image element for the user's profile picture and set its source to the path of the image
  const profileImg = document.createElement('img');
  profileImg.src = 'path/to/profile/image';
  profileImg.classList.add('profile-img');
  userDiv.appendChild(profileImg);

  // Add the userDiv to the navbar
  navbar.appendChild(userDiv);
})('John');





