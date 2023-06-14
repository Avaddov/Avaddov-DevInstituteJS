



// Using this array:

const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// The new array should look like this :
// const usernames = ["john!", "becky!", "susy!", "tyson!"]


// Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// The new array should look like this :

// const winners = ["becky", "susy"]


// Find and display the total score of the users. (Hint: The total score is 71)












//Create an array of usernames with exclamation point:
const usernames = [];

// forEach method is used to loop through each object in the gameInfo array
gameInfo.forEach(player => {
  // The username of each player is concatenated with an exclamation point and added to the usernames array
  usernames.push(player.username + "!");
});

// The usernames array is logged to the console
console.log(usernames); // Output: ["john!", "becky!", "susy!", "tyson!"]


//Create an array of usernames of players with score bigger than 5:
const winners = [];

// forEach method is used to loop through each object in the gameInfo array
gameInfo.forEach(player => {
  // If the score of a player is bigger than 5, their username is added to the winners array
  if(player.score > 5) {
    winners.push(player.username);
  }
});

// The winners array is logged to the console
console.log(winners); // Output: ["becky", "susy"]


//Find and display the total score of users:
let totalScore = 0;

// forEach method is used to loop through each object in the gameInfo array
gameInfo.forEach(player => {
  // The score of each player is added to the totalScore variable
  totalScore += player.score;
});

// The total score is logged to the console
console.log(totalScore); // Output: 71
