// let b = 3, d = b, u = b;

// const tree = ++d * d*b * b++ +
//  + --d+ + +b-- +
//  + +d*b+ +
//  u

// console.log(tree); // 163

// 4 * 4 * 3 * 3 +
// 3 + 4 +
// 3 * 3 +
// 3

///WTF WAS THAT?






// // Make a keyless car!
// // This car will only let you drive if you are over 18. Make it do the following:
// // Using prompt() and alert(), ask a user for their age.
// let age = Number(prompt('What is your age?'));

// // IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
// if (age < 18){
//     alert("Sorry, you are to young to drive. Powering off");
// }
// // IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
// else if (age == 18){
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
//     // IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"
// } else {
//     alert("Powering On. Enjoy the ride!");
// }



let obj = {
    a:1,
    name: 'John',
    arr: ['banana', 'orange', 'lemon', {a:70}]
}


obj.b = 'banana';

console.log(obj);

console.log(obj["name"], obj.name);
console.log(obj.arr[3]["a"]); 