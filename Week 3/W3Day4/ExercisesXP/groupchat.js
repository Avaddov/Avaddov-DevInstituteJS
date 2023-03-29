
// // Exercise 4: Group Chat
let users = [
  "Lea123",
  "Princess45",
  "cat&doglovers",
  "helooo@000",
  "n00bmaster69420",
];
let numberOfUsers = users.length;
let numberOfRemainingUsers = numberOfUsers - 2;
// // Using the array above, console.log the number of users in a group conversation based on the following rules:
// // If there is no one, display “no one is online”.
if (users.length == 0) {
  console.log("no one is online");

//   // If there is 1 person, display “<name_user> is online”.
} else if (users.length == 1) {
  console.log(users[0] + " is online"); //gets first index of online user
//   // If there are 2 people, display “<name_user1> and <name_user2> are online”.
} else if (users.length == 2) {
  console.log(users[0] + " " + users[1] + " are online");
//   // If there are n>2 people, display the first two names and add “and n-2 more are online”.
} else if (users.length > 2) {
  console.log(
    users[0] +
      ", " +
      users[1] +
      " and " +
      numberOfRemainingUsers +
      " more are online"
  );
}

