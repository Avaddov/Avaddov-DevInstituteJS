

// Exercise 1 : Scope





// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.

// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?









// Exercise  2 : Ternary Operator

//Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.


// const winBattle = () => true;
// const experiencePoints = winBattle() ? 10 : 1;
// console.log(experiencePoints);


// Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output
// Example:

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false


// const isString = (value) => typeof value === 'string' ? true : false;
// console.log(isString('hello')); // true
// console.log(isString([1, 2, 4, 0])); // false


// Exercise 4 : Colors


// Using this array :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.


// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// // Display the colors in the required format
// for (let i = 0; i < colors.length; i++) {
//   console.log(`${i+1}# choice is ${colors[i]}.`);
// }

// // Check if at least one element of the array is equal to "Violet"
// if (colors.includes("Violet")) {
//   console.log("Yeah");
// } else {
//   console.log("No...");
// }



//Exercise 5 : Colors #2
// Instructions
// Using these arrays :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.



const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

// Display the colors in the required format
for (let i = 0; i < colors.length; i++) {
  const suffix = i < 4 ? ordinal[i] : ordinal[0]; // get the appropriate suffix
  console.log(`${i+1}${suffix} choice is ${colors[i]}.`);
}



// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.



let bankAmount = 5000; // use let as the value of this variable will change over time

const VAT_PERCENTAGE = 0.17; // use const as the value of VAT percentage will not change

const expenses = ["+200", "-100", "+146", "+167", "-2900"]; // use const as the array itself will not change, only its contents will be modified

// loop through the expenses array and modify each expense to include VAT
for (let i = 0; i < expenses.length; i++) {
  const expense = parseFloat(expenses[i]); // convert the expense string to a number
  const expenseWithVAT = expense * (1 + VAT_PERCENTAGE); // calculate the expense with VAT
  expenses[i] = expenseWithVAT.toFixed(2); // update the expenses array with the new expense value, rounded to 2 decimal places
}

// loop through the expenses array again and update the bankAmount accordingly
for (let i = 0; i < expenses.length; i++) {
  const expense = parseFloat(expenses[i]); // convert the expense string to a number
  bankAmount -= expense; // subtract the expense (with VAT) from the bankAmount
}

console.log("Bank account standing at the end of the month:", bankAmount.toFixed(2)); // display the final bankAmount, rounded to 2 decimal places
