let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// Remove the Banana from the array.
fruits.shift();
console.info(fruits); //ProgressPrint
// Sort the array in order.
fruits.sort();
console.info(fruits); //ProgressPrint
// Put “Kiwi” at the end of the array.
fruits.push("Kiwi");
console.info(fruits); //ProgressPrint
// Remove “Apples” from the array. Don’t use the same method as in the question 1.
fruits.splice(0, 1);
console.log(fruits); //ProgressPrint
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
fruits.reverse();
console.log(fruits);
// You should have at the end:
// let fruits = ["Kiwi", "Oranges", "Blueberries"];


//Exercise 2:
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

 console.log(moreFruits[1][1][0]);
