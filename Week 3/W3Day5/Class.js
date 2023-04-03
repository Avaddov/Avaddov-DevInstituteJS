// LOOPS

// for
// 1.

// for (let i = 0; i < 15; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " is even");
//   } else {
//     console.log(i + " is odd");
//   }
// }

// let arr = [0,1,2,3,4,58,9];
// console.log(arr[2]);
// for(let index = 0; index <= arr.length; index++){
    // console.log(arr[index]);


// let vars = ['John', 123, 'Rob', 'James', true];

// for(var i = 0; i < vars.length; i++) {
//     //Check if the current item is a stringS
//     if (typeof vars[i] === 'string') {
//         // Check if the first letter is uppercase
//         if (vars[i][0] !== vars[i][0].toUpperCase()) {
//             // Convert the first letter to uppercase
//             vars[i] = vars[i][0].toUpperCase() + vars[i].substring(i);
//     }
//          // Display the variable name
//         console.log(vars[i]);
//     }
// }







let vars = ['John', 123, 'Rob', 'James', true];

for(elem of vars) {
    //Check if the current item is a string
    if (typeof elem === 'string') {
        // Check if the first letter is uppercase
        if (elem[0] !==elem[0].toUpperCase()) {
            // Convert the first letter to uppercase
            elem = elem[0].toUpperCase() + elem.slice(1);
    }
         // Display the variable name
        console.log(elem);
    }
}